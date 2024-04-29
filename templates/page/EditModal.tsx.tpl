import { ModalForm, ProFormText } from '@ant-design/pro-form';
import React from 'react';
import api from '@/api';
import { message } from 'antd';

type {{{biz}}}EditModalProps = {
  id?: number;
  children?: React.ReactNode;
  onFinished?: () => void;
}
const {{{biz}}}EditModal = (props: {{{biz}}}EditModalProps) => {

  const onFinish = async (formData: any) => {
    await api.{{{service}}}.save(formData);
    message.success('保存成功');
    props.onFinished?.();
    return true;
  };
  return <ModalForm
    request={api.{{{service}}}.get}
    params={ { id: props.id } }
    trigger={props.children}
    onFinish={onFinish}
  >
    <ProFormText name="id" label="ID" />
  </ModalForm>;
};

export default {{{biz}}}EditModal;