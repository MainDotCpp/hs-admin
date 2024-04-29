import { ModalForm, ProFormText } from '@ant-design/pro-form';
import React from 'react';
import api from '@/api';
import { message } from 'antd';

type ShortLinkEditModalProps = {
  id?: number;
  children?: React.ReactNode;
  onFinished?: () => void;
}
const ShortLinkEditModal = (props: ShortLinkEditModalProps) => {

  const onFinish = async (formData: any) => {
    await api.shortlink.save(formData);
    message.success('保存成功');
    props.onFinished?.();
    return true;
  };
  return <ModalForm
    request={api.shortlink.get}
    params={{ id: props.id }}
    trigger={props.children}
    onFinish={onFinish}
  >
    <ProFormText name="id" label="ID" />
    <ProFormText name="key" label="编号" />
    <ProFormText name="cloakId" label="斗篷id" />
    <ProFormText name="targetUrl" label="跳转地址" />
    <ProFormText name="remark" label="备注" />
  </ModalForm>;
};

export default ShortLinkEditModal;