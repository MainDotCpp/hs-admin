import api from '@/api';
import LandingSelectModal from '@/components/Landing/LandingSelectModal';
import {
  ModalForm,
  ProFormDependency,
  ProFormItem,
  ProFormSelect,
  ProFormText,
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
  const onFinish = async (formData: any) => {
    formData.path = formData.path ? `/${formData.path}` : '/';
    await api.website.save(formData);
    message.success('保存成功');
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
              <ProFormItem
                name="landingId"
                label="落地页"
                rules={[{ required: true }]}
              >
                <LandingSelectModal />
              </ProFormItem>
            );
          }
          return null;
        }}
      </ProFormDependency>
      <ProFormSelect
        name="cloakConfigId"
        label="拦截配置"
        request={api.cloakConfig.list}
        fieldProps={{
          fieldNames: { label: 'name', value: 'id' },
        }}
      />

      <ProFormSelect
        name="orders"
        mode="multiple"
        label="工单"
        request={api.order.list}
        transform={(value) => ({ orders: value.map((id) => ({ id })) })}
        fieldProps={{
          fieldNames: { label: 'businessName', value: 'id' },
        }}
      />
    </ModalForm>
  );
};

export default WebsiteEditModal;
