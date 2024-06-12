import api from '@/api';
import { ModalForm, ProFormText } from '@ant-design/pro-form';
import { message } from 'antd';
import React from 'react';

type OrderGroupEditModalProps = {
  id?: number;
  children?: React.ReactNode;
  onFinished?: () => void;
};
const OrderGroupEditModal = (props: OrderGroupEditModalProps) => {
  const onFinish = async (formData: any) => {
    await api.orderGroup.save(formData);
    message.success('保存成功');
    props.onFinished?.();
    return true;
  };

  const getInitialValues = async () => {
    let orderGroup = {};
    if (props.id) {
      orderGroup = await api.orderGroup.getById({ id: props.id });
    }
    return orderGroup;
  };
  return (
    <ModalForm
      title={props.id ? '编辑工单组' : '新建工单组'}
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
    </ModalForm>
  );
};

export default OrderGroupEditModal;
