import { ModalForm, ProFormRadio, ProFormText } from '@ant-design/pro-form';
import React from 'react';
import api from '@/api';
import { message } from 'antd';
import { ProFormCheckbox } from '@ant-design/pro-components';

type UserEditModalProps = {
  id?: number;
  children?: React.ReactNode;
  onFinished?: () => void;
}
const UserEditModal = (props: UserEditModalProps) => {

  const onFinish = async (formData: any) => {
    await api.user.save(formData);
    message.success('保存成功');
    props.onFinished?.();
    return true;
  };

  const getInitialValues = async () => {
    return props.id ? await api.user.getById({ id: props.id }) : {};
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
    <ProFormText name="username" label="用户名"
                 rules={[
                   { required: true, message: '请输入用户名' },
                   { pattern: /^[a-zA-Z0-9_]{2,20}$/, message: '用户名只能包含字母、数字、下划线，长度2-20位' },
                 ]} />
    <ProFormText name="nickname" label="昵称" rules={[
      { required: true, message: '请输入昵称' },
    ]} />
    <ProFormText.Password name="password" label="密码" rules={[
      { pattern: /^[a-zA-Z0-9_]{6,20}$/, message: '密码只能包含字母、数字、下划线，长度6-20位' },
    ]} />
    <ProFormRadio.Group name="status" label="状态" options={[
      { label: '正常', value: 1 },
      { label: '禁用', value: 0 },
    ]} />

    <ProFormCheckbox.Group name="roleIds"
                           label="角色"
                           request={async () => (await api.role.list({})).map(role => ({
                             label: role.name,
                             value: role.id,
                           }))}
    />
  </ModalForm>;
};

export default UserEditModal;