import api from '@/api';
import { ModalForm, ProFormText } from '@ant-design/pro-form';
import { message } from 'antd';
import React from 'react';

type OrderEditModalProps = {
  id?: number;
  groupId: number;
  children?: React.ReactNode;
  onFinished?: () => void;
};
const OrderEditModal = (props: OrderEditModalProps) => {
  const onFinish = async (formData: any) => {
    await api.order.save(formData);
    message.success('保存成功');
    props.onFinished?.();
    return true;
  };

  const getInitialValues = async () => {
    let order = {
      orderGroupId: props.groupId,
    };
    if (props.id) {
      order = await api.order.getById({ id: props });
    }
    return order;
  };
  return (
    <ModalForm
      title={props.id ? '编辑工单' : '新建工单'}
      modalProps={{
        destroyOnClose: true,
      }}
      request={getInitialValues}
      params={{ id: props.id }}
      trigger={props.children}
      onFinish={onFinish}
    >
      <ProFormText name="id" label="ID" hidden />
      <ProFormText name="orderGroupId" label="groupId" />
      <ProFormText name="businessId" label="业务id" />
      <ProFormText name="businessName" label="业务名称" />
      <ProFormText name="operatorId" label="运营id" />
      <ProFormText name="operatorNickname" label="运营昵称" />
      <ProFormText name="link" label="链接" />
    </ModalForm>
  );
};

export default OrderEditModal;
