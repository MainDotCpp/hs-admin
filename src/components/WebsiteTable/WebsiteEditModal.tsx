import api from '@/api';
import LandingSelectModal from '@/components/Landing/LandingSelectModal';
import {
  ModalForm,
  ProFormDependency,
  ProFormItem,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-form';
import { Input, Segmented, message } from 'antd';
import React from 'react';

type WebsiteEditModalProps = {
  id?: number;
  domainId: number;
  children?: React.ReactNode;
  onFinished?: () => void;
};
const WebsiteEditModal = (props: WebsiteEditModalProps) => {
  const [messageApi, contextHolder] = message.useMessage();
  const onFinish = async (formData: any) => {
    formData.path = formData.path ? `/${formData.path}` : '/';
    await api.website.save(formData);
    messageApi.success(
      <span>
        保存成功,需要重新部署才能生效{' '}
        <a
          onClick={async () => {
            messageApi.open({
              key: 'deploy',
              type: 'loading',
              content: '正在部署',
              duration: 0,
            });
            await api.domain.deploy({ id: props.domainId });
            messageApi.open({
              key: 'deploy',
              type: 'success',
              content: '部署成功',
              duration: 3,
            });
          }}
        >
          立即部署
        </a>
      </span>,
      5,
    );
    props.onFinished?.();
    return true;
  };

  const getInitialValues = async () => {
    let website: API.WebsiteDTO = {
      domainId: props.domainId,
      type: 'LINK',
    };
    if (props.id) {
      website = await api.website.getById({ id: props.id });
      if (website.path?.length > 0) website.path = website.path.slice(1);
      website.orders = website.orders.map((it) => it.id);
    }
    return website;
  };
  return (
    <>
      {contextHolder}
      <ModalForm
        title={props.id ? '编辑网站' : '新增网站'}
        modalProps={{
          destroyOnClose: true,
        }}
        request={getInitialValues}
        params={{ id: props.id }}
        trigger={props.children}
        onFinish={onFinish}
      >
        <ProFormText name="id" label="ID" hidden />
        <ProFormText name="domainId" label="域名ID" hidden />
        <ProFormItem name="path" label="路径">
          <Input addonBefore="/" placeholder="留空为根路径" />
        </ProFormItem>
        <ProFormItem name="type" label="使用场景" rules={[{ required: true }]}>
          <Segmented
            options={[
              { value: 'LINK', label: '跳转' },
              { value: 'LANDING', label: '落地页' },
            ]}
          />
        </ProFormItem>
        <ProFormDependency name={['type']}>
          {({ type }) => {
            if (type === 'LANDING') {
              return (
                <>
                  <ProFormItem
                    name="landingId"
                    label="落地页"
                    rules={[{ required: true }]}
                  >
                    <LandingSelectModal />
                  </ProFormItem>
                  <ProFormTextArea
                    label="跟踪代码"
                    name="extraScript"
                  ></ProFormTextArea>
                </>
              );
            }
            return null;
          }}
        </ProFormDependency>
        <ProFormText
          name="targetLink"
          label="跳转链接"
          rules={[
            {
              required: true,
            },
          ]}
        ></ProFormText>
        <ProFormSelect
          name="cloakConfigId"
          label="拦截配置"
          request={api.cloakConfig.list}
          rules={[{ required: true }]}
          fieldProps={{
            fieldNames: { label: 'name', value: 'id' },
          }}
        />

        {/*<ProFormSelect*/}
        {/*  name="orders"*/}
        {/*  mode="multiple"*/}
        {/*  label="工单"*/}
        {/*  request={api.order.list}*/}
        {/*  transform={(value) => ({ orders: value.map((id) => ({ id })) })}*/}
        {/*  fieldProps={{*/}
        {/*    fieldNames: { label: 'businessName', value: 'id' },*/}
        {/*  }}*/}
        {/*/>*/}
      </ModalForm>
    </>
  );
};

export default WebsiteEditModal;
