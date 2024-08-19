import api from '@/api';
import { ModalForm, ProFormText, ProFormTextArea } from '@ant-design/pro-form';
import { message } from 'antd';
import React from 'react';

type CommodityItemEditModalProps = {
  id?: number;
  commodityId?: number;
  children?: React.ReactNode;
  onFinished?: () => void;
};
const CommodityItemEditModal = (props: CommodityItemEditModalProps) => {
  const onEditFinish = async (formData: any) => {
    await api.commodityItem.save(formData);
    message.success('保存成功');
    props.onFinished?.();
    return true;
  };

  const onAddFinish = async (formData: any) => {
    let commodityList: any = formData.content.split('\n');
    // 过滤掉空行
    commodityList = commodityList.filter((item: string) => item.trim());
    commodityList = commodityList.map((item: string) => ({
      commodityId: props.commodityId,
      payed: false,
      content: item,
    }));
    await api.commodityItem.batchSave(commodityList);
    message.success('保存成功');
    props.onFinished?.();
    return true;
  };

  const getInitialValues = async () => {
    let commodityItem: API.CommodityItemDTO = {
      commodityId: props.commodityId,
    };
    if (props.id) {
      commodityItem = await api.commodityItem.getById({ id: props.id });
    }
    return commodityItem;
  };
  return (
    <ModalForm
      title={props.id ? '编辑库存' : '新建库存'}
      modalProps={{
        destroyOnClose: true,
      }}
      request={getInitialValues}
      params={{ id: props.id }}
      trigger={props.children}
      onFinish={props.id ? onEditFinish : onAddFinish}
    >
      <ProFormText name="id" label="ID" hidden />
      <ProFormText name="commodityId" hidden />
      <ProFormTextArea
        name="content"
        label="内容"
        tooltip="一行一个库存"
        fieldProps={{
          rows: 20,
        }}
        rules={[{ required: true }]}
      />
    </ModalForm>
  );
};

export default CommodityItemEditModal;
