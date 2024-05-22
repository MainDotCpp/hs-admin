import { ModalForm, ProFormSelect, ProFormText, ProFormTextArea } from '@ant-design/pro-form';
import React from 'react';
import api from '@/api';
import { message } from 'antd';

type LoadingConfigEditModalProps = {
  id?: number;
  children?: React.ReactNode;
  onFinished?: () => void;
}
const LoadingConfigEditModal = (props: LoadingConfigEditModalProps) => {

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
    modalProps={{
      destroyOnClose: true,
    }}
    request={getInitialValues}
    params={{ id: props.id }}
    trigger={props.children}
    onFinish={onFinish}
  >
    <ProFormText name="id" label="ID" hidden />
    <ProFormText name="domain" label="域名" />
    <ProFormText name="path" label="子路径" />
    <ProFormSelect label="落地页" name="templatePath"
                   request={api.landingTemplate.list}
                   fieldProps={{
                     fieldNames: { label: 'name', value: 'path' },
                   }}
    />
    <ProFormSelect name="cloakId" request={api.cloakConfig.list} label="斗篷" rules={[{ required: true }]} fieldProps={{
      fieldNames: {
        label: 'name',
        value: 'id',
      },
    }} />
    <ProFormText name="targetLink" label="跳转链接" />
    <ProFormTextArea name="pixelCode" label="像素代码" proFieldProps={{
      rows: 8,
    }} />
  </ModalForm>;
};

export default LoadingConfigEditModal;