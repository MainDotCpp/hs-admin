import api from '@/api';
import {
  ModalForm,
  ProFormRadio,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-form';
import { message } from 'antd';
import React from 'react';

type DomainEditModalProps = {
  id?: number;
  children?: React.ReactNode;
  onFinished?: () => void;
};
const DomainEditModal = (props: DomainEditModalProps) => {
  const onFinish = async (formData: any) => {
    await api.domain.save(formData);
    message.success('保存成功');
    props.onFinished?.();
    return true;
  };

  const getInitialValues = async () => {
    return props.id
      ? await api.domain.getById({ id: props.id })
      : {
          status: 'UNUSED',
        };
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
      <ProFormText name="domain" label="域名" rules={[{ required: true }]} />
      <ProFormSelect
        name="ownerId"
        label="拥有人"
        request={api.user.list}
        fieldProps={{ fieldNames: { label: 'nickname', value: 'id' } }}
      />
      <ProFormSelect
        name="serverId"
        label="服务器"
        request={api.server.list}
        rules={[{ required: true }]}
        fieldProps={{ fieldNames: { label: 'name', value: 'id' } }}
      />
      <ProFormRadio.Group
        name="status"
        valueEnum={{
          UNUSED: '未使用',
          USED: '已使用',
        }}
      ></ProFormRadio.Group>
    </ModalForm>
  );
};

export default DomainEditModal;
