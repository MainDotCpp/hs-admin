import api from '@/api';
import { ModalForm, ProFormText } from '@ant-design/pro-form';
import { message } from 'antd';
import React from 'react';

type LandingEditModalProps = {
  id?: number;
  children?: React.ReactNode;
  onFinished?: () => void;
};
const LandingEditModal = (props: LandingEditModalProps) => {
  const onFinish = async (formData: any) => {
    await api.landing.save(formData);
    message.success('保存成功');
    props.onFinished?.();
    return true;
  };

  const getInitialValues = async () => {
    let landing: API.LandingDTO = {};
    if (props.id) {
      landing = await api.landing.getById({ id: props.id });
    }
    return landing;
  };
  return (
    <ModalForm
      title={props.id ? '编辑落地页' : '新建落地页'}
      modalProps={{
        destroyOnClose: true,
      }}
      request={getInitialValues}
      params={{ id: props.id }}
      trigger={props.children}
      onFinish={onFinish}
    >
      <ProFormText name="id" label="ID" hidden />
      <ProFormText
        name="name"
        label="落地页名称"
        rules={[{ required: true }]}
      />
      <ProFormText
        name="description"
        label="描述"
        rules={[{ required: true }]}
      />
    </ModalForm>
  );
};

export default LandingEditModal;
