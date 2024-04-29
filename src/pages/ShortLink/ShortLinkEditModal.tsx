import { ModalForm, ProForm, ProFormItem, ProFormSelect, ProFormText } from '@ant-design/pro-form';
import React from 'react';
import api from '@/api';
import { Form, Input, message } from 'antd';
import styled from 'styled-components';
import useFormInstance = ProForm.useFormInstance;

type ShortLinkEditModalProps = {
  id?: number;
  children?: React.ReactNode;
  onFinished?: () => void;
}
const InputAfter = styled.div`
    color: #1890ff;
    user-select: none;
    cursor: pointer;
`;
const ShortLinkEditModal = (props: ShortLinkEditModalProps) => {
  const [form] = Form.useForm();

  const onFinish = async (formData: any) => {
    await api.shortlink.save(formData);
    message.success('保存成功');
    props.onFinished?.();
    return true;
  };
  return <ModalForm
    modalProps={{
      destroyOnClose: true,
    }}
    title="编辑短链"
    request={api.shortlink.getById}
    params={{ id: props.id }}
    trigger={props.children}
    onFinish={onFinish}
    form={form}
  >
    <ProFormText name="id" label="ID" hidden />
    <ProFormItem name="key" label="代号">
      <Input addonAfter={<InputAfter onClick={() => {
        form.setFieldsValue({
          key: Math.random().toString(36).substr(2, 3),
        });
      }}>生成</InputAfter>} />
    </ProFormItem>
    <ProFormSelect name="cloakId" request={api.cloakConfig.list} label="斗篷" fieldProps={{
      fieldNames: {
        label: 'name',
        value: 'id',
      },
    }} />
    <ProFormText name="targetUrl" label="跳转地址" />
    <ProFormText name="remark" label="备注" />
  </ModalForm>;
};

export default ShortLinkEditModal;