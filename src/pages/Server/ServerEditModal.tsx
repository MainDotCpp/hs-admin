import api from '@/api';
import { ModalForm, ProFormText } from '@ant-design/pro-form';
import { message } from 'antd';
import React from 'react';

type ServerEditModalProps = {
  id?: number;
  children?: React.ReactNode;
  onFinished?: () => void;
};
const ServerEditModal = (props: ServerEditModalProps) => {
  const onFinish = async (formData: any) => {
    await api.server.save(formData);
    message.success('保存成功');
    props.onFinished?.();
    return true;
  };

  const getInitialValues = async () => {
    return props.id ? await api.server.getById({ id: props.id }) : {};
  };
  return (
    <ModalForm
      modalProps={{
        destroyOnClose: true,
      }}
      request={getInitialValues}
      params={{ id: props.id }}
      trigger={props.children}
      onFinish={onFinish}
    >
      <ProFormText name="id" label="ID" hidden />
      <ProFormText name="name" label="名称" />
      <ProFormText
        name="ip"
        label="ip"
        rules={[
          {
            required: true,
            message: '请输入ip',
          },
          {
            pattern: /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
            message: '请输入正确的ip',
          },
        ]}
      />
    </ModalForm>
  );
};

export default ServerEditModal;
