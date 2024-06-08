import api from '@/api';
import { useAccess } from '@@/plugin-access';
import { ProFormCheckbox } from '@ant-design/pro-components';
import {
  ModalForm,
  ProFormRadio,
  ProFormText,
  ProFormTreeSelect,
} from '@ant-design/pro-form';
import { message } from 'antd';
import React from 'react';

type UserEditModalProps = {
  id?: number;
  children?: React.ReactNode;
  onFinished?: () => void;
};
const UserEditModal = (props: UserEditModalProps) => {
  const access = useAccess();
  const onFinish = async (formData: any) => {
    await api.user.save(formData);
    message.success('保存成功');
    props.onFinished?.();
    return true;
  };

  const getInitialValues = async () => {
    if (!props.id)
      return {
        status: 1,
        roleIds: [],
        dataPermission: 'SELF',
      };
    let user = await api.user.getById({ id: props.id });
    return user;
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
      <ProFormText
        name="username"
        label="用户名"
        rules={[
          { required: true, message: '请输入用户名' },
          {
            pattern: /^[a-zA-Z0-9_]{2,20}$/,
            message: '用户名只能包含字母、数字、下划线，长度2-20位',
          },
        ]}
      />
      <ProFormText
        name="nickname"
        label="昵称"
        rules={[{ required: true, message: '请输入昵称' }]}
      />
      <ProFormText.Password
        name="password"
        label="密码"
        rules={[
          {
            pattern: /^[a-zA-Z0-9_@$]{6,20}$/,
            message: '密码只能包含字母、数字、下划线，长度6-20位',
          },
        ]}
      />
      <ProFormRadio.Group
        name="status"
        rules={[{ required: true, message: '请选择状态' }]}
        label="状态"
        options={[
          { label: '正常', value: 1 },
          { label: '禁用', value: 0 },
        ]}
      />

      <ProFormCheckbox.Group
        name="roleIds"
        rules={[{ required: true, message: '请选择角色' }]}
        label="角色"
        request={async () =>
          (await api.role.list({})).map((role) => ({
            label: role.name,
            value: role.id,
            disabled:
              !access.SUPER_ADMIN &&
              (role.code === 'SUPER_ADMIN' || role.code === 'ADMIN'),
          }))
        }
      />
      <ProFormTreeSelect
        name="deptId"
        rules={[{ required: true, message: '请选择部门' }]}
        label="部门"
        request={async () => {
          const tree = await api.dept.getDeptTree();
          return tree.children;
        }}
        fieldProps={{
          fieldNames: { label: 'name', value: 'id', children: 'children' },
        }}
      />
      <ProFormRadio.Group
        name="dataPermission"
        label="数据权限"
        rules={[{ required: true, message: '请选择数据权限' }]}
        options={[
          { label: '全部', value: 'ALL' },
          { label: '本人', value: 'SELF' },
          { label: '本部门', value: 'DEPT' },
          { label: '本部门及子部门', value: 'DEPT_AND_CHILD' },
        ]}
      />
    </ModalForm>
  );
};

export default UserEditModal;
