import api from '@/api';
import { useAccess } from '@@/exports';
import {
  ModalForm,
  ProFormItem,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-form';
import { useLocalStorageState } from 'ahooks';
import { Form, Input, message } from 'antd';
import React from 'react';
import styled from 'styled-components';

type ShortLinkEditModalProps = {
  id?: number;
  children?: React.ReactNode;
  onFinished?: () => void;
};
const InputAfter = styled.div`
  color: #1890ff;
  user-select: none;
  cursor: pointer;
`;
const ShortLinkEditModal = (props: ShortLinkEditModalProps) => {
  const access = useAccess();
  const [form] = Form.useForm();
  const [defaultGroup, setDefaultGroup] = useLocalStorageState('default-group');
  const onFinish = async (formData: any) => {
    await api.shortlink.save(formData);
    message.success('保存成功');
    props.onFinished?.();
    return true;
  };

  const getInitialValues = async () => {
    return props.id
      ? await api.shortlink.getById({ id: props.id })
      : { groupId: defaultGroup?.value || 1 };
  };
  return (
    <ModalForm
      modalProps={{
        destroyOnClose: true,
      }}
      title="编辑短链"
      request={getInitialValues}
      trigger={props.children}
      onFinish={onFinish}
      form={form}
    >
      <ProFormText name="id" label="ID" hidden />
      <ProFormItem name="key" label="代号" rules={[{ required: true }]}>
        <Input
          addonAfter={
            <InputAfter
              onClick={() => {
                form.setFieldsValue({
                  key: Math.random().toString(36).substr(2, 3),
                });
              }}
            >
              生成
            </InputAfter>
          }
        />
      </ProFormItem>

      <ProFormSelect
        name="cloakId"
        request={api.cloakConfig.list}
        label="斗篷"
        rules={[{ required: true }]}
        fieldProps={{
          fieldNames: {
            label: 'name',
            value: 'id',
          },
        }}
      />
      <ProFormText
        name="targetUrl"
        label="跳转地址"
        rules={[{ required: true }]}
      />
      <ProFormText name="remark" label="备注" />
      <ProFormSelect
        hidden={!(access.DATA__ALL || access.DATA__DEPT_AND_CHILD)}
        name="createdBy"
        request={api.user.list}
        label="创建人"
        fieldProps={{
          fieldNames: {
            label: 'nickname',
            value: 'id',
          },
        }}
      />
    </ModalForm>
  );
};

export default ShortLinkEditModal;
