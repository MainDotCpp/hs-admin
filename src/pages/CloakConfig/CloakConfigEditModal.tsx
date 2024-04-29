import { ModalForm, ProFormText } from '@ant-design/pro-form';
import React from 'react';
import api from '@/api';
import { message } from 'antd';
import { useGetCloakConfigById } from '@/querys/cloakConfigQuery';

type CloakConfigEditModalProps = {
  id?: string;
  children?: React.ReactNode;
  onFinished?: () => void;
}
const CloakConfigEditModal = (props: CloakConfigEditModalProps) => {
  const { data: cloakConfig, refetch: getCloakConfigById } = useGetCloakConfigById(props.id, {
    enabled: false,
  });

  const onFinish = async (formData: any) => {
    await api.cloakConfig.save(formData);
    message.success('保存成功');
    props.onFinished?.();
    return true;
  };
  return <ModalForm
    request={async () => {
      const result = await getCloakConfigById();
      return result.data;
    }}
    trigger={props.children}
    onFinish={onFinish}
  >
    <ProFormText name="id" label="ID" />
  </ModalForm>;
};

export default CloakConfigEditModal;