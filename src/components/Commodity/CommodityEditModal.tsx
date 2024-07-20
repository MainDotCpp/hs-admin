import api from '@/api';
import { ModalForm, ProFormSelect, ProFormText } from '@ant-design/pro-form';
import { message } from 'antd';
import React from 'react';

type CommodityEditModalProps = {
  id?: number;
  children?: React.ReactNode;
  onFinished?: () => void;
};
const CommodityEditModal = (props: CommodityEditModalProps) => {
  const onFinish = async (formData: any) => {
    await api.commodity.save(formData);
    message.success('保存成功');
    props.onFinished?.();
    return true;
  };

  const getInitialValues = async () => {
    let commodity: API.CommodityDTO = {};
    if (props.id) {
      commodity = await api.commodity.getById({ id: props.id });
      commodity.price = commodity.price / 100;
    }
    return commodity;
  };
  return (
    <ModalForm
      title={props.id ? '编辑商品' : '新建商品'}
      modalProps={{
        destroyOnClose: true,
      }}
      request={getInitialValues}
      params={{ id: props.id }}
      trigger={props.children}
      onFinish={onFinish}
    >
      <ProFormText name="id" label="ID" hidden />
      <ProFormSelect
        name="groupId"
        label="分组"
        request={api.commodityGroup.list}
        fieldProps={{ fieldNames: { label: 'groupName', value: 'id' } }}
      />
      <ProFormText name="name" label="商品名" />
      <ProFormText name="description" label="商品描述" />
      <ProFormSelect
        name="cover"
        label="图标"
        valueEnum={{
          TK: '图标1',
          TK2: '图标2',
        }}
      />
      <ProFormText
        name="price"
        label="价格"
        transform={(v) => ({ price: v * 100 })}
      />
    </ModalForm>
  );
};

export default CommodityEditModal;
