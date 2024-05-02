import { ModalForm, ProFormText } from '@ant-design/pro-form';
import React from 'react';
import api from '@/api';
import { message } from 'antd';

type LoadingConfigEditModalProps = {
  id?: number;
  children?: React.ReactNode;
  onFinished?: () => void;
}
const LoadingConfigEditModal = (props:LoadingConfigEditModalProps) => {

  const onFinish = async (formData: any) => {
    await api.loadingConfig.save(formData);
    message.success('保存成功');
    props.onFinished?.();
    return true;
  };

  const getInitialValues = async () => {
    return props.id ? await api.loadingConfig.getById({ id: props.id }) : {};
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

export default LoadingConfigEditModal;