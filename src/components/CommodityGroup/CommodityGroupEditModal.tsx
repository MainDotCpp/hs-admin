import api from '@/api';
import { ModalForm, ProFormText } from '@ant-design/pro-form';
import { message } from 'antd';
import React from 'react';

type CommodityGroupEditModalProps = {
  id?: number;
  children?: React.ReactNode;
  onFinished?: () => void;
};
const CommodityGroupEditModal = (props: CommodityGroupEditModalProps) => {
  const onFinish = async (formData: any) => {
    await api.commodityGroup.save(formData);
    message.success('保存成功');
    props.onFinished?.();
    return true;
  };

  const getInitialValues = async () => {
    let commodityGroup: API.CommodityGroupDTO = {};
    if (props.id) {
      commodityGroup = await api.commodityGroup.getById({ id: props.id });
    }
    return commodityGroup;
  };
  return (
    <ModalForm
      title={props.id ? '编辑商品组' : '新建商品组'}
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
        name="groupName"
        label="分组名"
        rules={[{ required: true }]}
      />
    </ModalForm>
  );
};

export default CommodityGroupEditModal;
