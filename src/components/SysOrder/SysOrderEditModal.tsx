import api from '@/api';
import { ModalForm, ProFormText } from '@ant-design/pro-form';
import { message } from 'antd';
import React from 'react';

type SysOrderEditModalProps = {
  id?: number;
  children?: React.ReactNode;
  onFinished?: () => void;
};
const SysOrderEditModal = (props: SysOrderEditModalProps) => {
  const onFinish = async (formData: any) => {
    await api.sysOrder.save(formData);
    message.success('保存成功');
    props.onFinished?.();
    return true;
  };

  const getInitialValues = async () => {
    let sysOrder: API.SysOrderDTO = {};
    if (props.id) {
      sysOrder = await api.sysOrder.getById({ id: props.id });
    }
    return sysOrder;
  };
  return (
    <ModalForm
      title={props.id ? '编辑系统订单' : '新建系统订单'}
      modalProps={ {
        destroyOnClose: true,
      }}
      request={getInitialValues}
      params={ { id: props.id }}
      trigger={props.children}
      onFinish={onFinish}
    >
      <ProFormText name="id" label="ID" hidden />
    </ModalForm>
  );
};

export default SysOrderEditModal;
