import api from '@/api';
import { ActionType, ProColumns, ProTable } from '@ant-design/pro-components';
import { Button, Popconfirm, message } from 'antd';
import { useRef } from 'react';

import CommodityItemEditModal from '@/components/CommodityItem/CommodityItemEditModal';
import { useAccess } from '@@/plugin-access';

export default function CommodityItemTable(props: { commodityId: number }) {
  const access = useAccess();
  const actionRef = useRef<ActionType>();
  const columns: ProColumns<API.CommodityItem>[] = [
    { dataIndex: 'id', title: 'ID', search: false, hidden: true },
    { dataIndex: 'content', title: '内容', width: 100, search: false },
    {
      dataIndex: 'payed',
      title: '是否售出',
      width: 100,
      search: false,
      renderText: (text) => (text ? '✅' : '❎'),
    },
    {
      dataIndex: 'id',
      title: '操作',
      valueType: 'option',
      fixed: 'right',
      width: 100,
      render: (text, record, _, action) => {
        return [
          access.COMMODITY_ITEM__EDIT && (
            <CommodityItemEditModal
              id={record.id}
              key="edit"
              onFinished={() => actionRef.current?.reload()}
            >
              <a>编辑</a>
            </CommodityItemEditModal>
          ),
          access.COMMODITY_ITEM__DELETE && (
            <Popconfirm
              key="delete"
              title={`确定删除吗？`}
              onConfirm={async () => {
                await api.commodityItem.deleteById({ id: record.id });
                message.success('删除成功');
                action.reload();
              }}
            >
              <a key="delete">删除</a>
            </Popconfirm>
          ),
        ];
      },
    },
  ];
  return (
    <ProTable<API.CommodityItem>
      rowKey="id"
      search={false}
      actionRef={actionRef}
      toolbar={{
        actions: [
          access.COMMODITY_ITEM__EDIT && (
            <CommodityItemEditModal
              key="create"
              onFinished={() => actionRef.current?.reload()}
            >
              <Button type="primary">新建库存</Button>
            </CommodityItemEditModal>
          ),
        ],
      }}
      size="small"
      scroll={{ x: 1000 }}
      columns={columns}
      params={{ commodityId: props.commodityId }}
      request={api.commodityItem.page}
    ></ProTable>
  );
}
