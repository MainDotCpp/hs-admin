import { ModalForm, ProFormText } from '@ant-design/pro-form';
import React from 'react';
import api from '@/api';
import { message } from 'antd';

type PermissionEditModalProps = {
  id?: number;
  children?: React.ReactNode;
  onFinished?: () => void;
}
const PermissionEditModal = (props:PermissionEditModalProps) => {

  const onFinish = async (formData: any) => {
    await api.permission.save(formData);
    message.success('保存成功');
    props.onFinished?.();
    return true;
  };

  const getInitialValues = async () => {
    return props.id ? await api.permission.getById({ id: props.id }) : {};
  };
  return <ModalForm
    modalProps={ {
      destroyOnClose:true
    }}
    request={getInitialValues}
    params={ { id: props.id }}
    trigger={props.children}
    onFinish={onFinish}
  >
    <ProFormText name="id" label="ID" />
  </ModalForm>;
};

export default PermissionEditModal;