import { ModalForm, ProFormSelect, ProFormText } from '@ant-design/pro-form';
import React from 'react';
import api from '@/api';
import { message } from 'antd';

type RoleEditModalProps = {
  id?: number;
  children?: React.ReactNode;
  onFinished?: () => void;
}
const RoleEditModal = (props: RoleEditModalProps) => {

  const onFinish = async (formData: any) => {
    await api.role.save(formData);
    message.success('保存成功');
    props.onFinished?.();
    return true;
  };

  const getInitialValues = async () => {
    if (!props.id) return {};
    let role = await api.role.getById({ id: props.id });
    return {
      ...role,
      permission: role.permissions.map((item: API.Permission) => item.id),
    };
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
    <ProFormText name="name" label="名称" rules={[{ required: true }]} />
    <ProFormText name="code" label="代码" rules={[{ required: true }]} />
    <ProFormSelect
      name="permission"
      label="权限"
      mode="multiple"
      request={api.permission.list}
      transform={(value) => {
        return {
          permissions: value.map((item: API.Permission) => ({ id: item })),
        };
      }}
      fieldProps={{
        fieldNames: {
          label: 'name',
          value: 'id',
        },
      }} />
  </ModalForm>;
};

export default RoleEditModal;