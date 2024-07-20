import api from '@/api';
import { ModalForm, ProFormText } from '@ant-design/pro-form';
import { message } from 'antd';
import React from 'react';

type CommodityItemEditModalProps = {
  id?: number;
  children?: React.ReactNode;
  onFinished?: () => void;
};
const CommodityItemEditModal = (props: CommodityItemEditModalProps) => {
  const onFinish = async (formData: any) => {
    await api.commodityItem.save(formData);
    message.success('保存成功');
    props.onFinished?.();
    return true;
  };

  const getInitialValues = async () => {
    let commodityItem: API.CommodityItemDTO = {};
    if (props.id) {
      commodityItem = await api.commodityItem.getById({ id: props.id });
    }
    return commodityItem;
  };
  return (
    <ModalForm
      title={props.id ? '编辑库存' : '新建库存'}
      modalProps={ {
        destroyOnClose: true,
      }}
      request={getInitialValues}
      params={ { id: props.id }}
      trigger={props.children}
      onFinish={onFinish}
    >
      <ProFormText name="id" label="ID" hidden />
    </ModalForm>
  );
};

export default CommodityItemEditModal;
