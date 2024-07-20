import api from '@/api';
import { ActionType, ProColumns, ProTable } from '@ant-design/pro-components';
import { Button, Popconfirm, message } from 'antd';
import { useRef } from 'react';

import CommodityEditModal from '@/components/Commodity/CommodityEditModal';
import CommodityGroupTable from '@/components/CommodityGroup/CommodityGroupTable';
import CommodityItemTable from '@/components/CommodityItem/CommodityItemTable';
import YModal from '@/components/Modal';
import { useAccess } from '@@/plugin-access';

export default function CommodityTable() {
  const access = useAccess();
  const actionRef = useRef<ActionType>();
  const columns: ProColumns<API.Commodity>[] = [
    { dataIndex: 'id', title: 'ID', search: false, hidden: true },
    {
      dataIndex: 'groupName',
      title: '分组',
      width: 100,
      search: false,
    },
    { dataIndex: 'name', title: '商品', width: 100, search: false },
    { dataIndex: 'description', title: '描述', width: 100, search: false },
    {
      dataIndex: 'price',
      title: '价格',
      width: 100,
      search: false,
      valueType: 'money',
      renderText: (text) => text / 100,
    },
    { dataIndex: 'stock', title: '库存', width: 100, search: false },
    {
      dataIndex: 'id',
      title: '操作',
      valueType: 'option',
      fixed: 'right',
      width: 100,
      render: (text, record, _, action) => {
        return [
          <YModal trigger={<a>查看</a>} key="view">
            <CommodityItemTable commodityId={record.id} />
          </YModal>,
          access.COMMODITY__EDIT && (
            <CommodityEditModal
              id={record.id}
              key="edit"
              onFinished={() => actionRef.current?.reload()}
            >
              <a>编辑</a>
            </CommodityEditModal>
          ),
          access.COMMODITY__DELETE && (
            <Popconfirm
              key="delete"
              title={`确定删除吗？`}
              onConfirm={async () => {
                await api.commodity.deleteById({ id: record.id });
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
    <ProTable<API.Commodity>
      rowKey="id"
      search={false}
      actionRef={actionRef}
      toolbar={{
        actions: [
          <YModal
            width={700}
            footer={false}
            key="groupManager"
            trigger={<Button type="dashed">分组管理</Button>}
            onCancel={() => actionRef.current?.reload()}
          >
            <CommodityGroupTable />
          </YModal>,
          access.COMMODITY__EDIT && (
            <CommodityEditModal
              key="create"
              onFinished={() => actionRef.current?.reload()}
            >
              <Button type="primary">新建商品</Button>
            </CommodityEditModal>
          ),
        ],
      }}
      size="small"
      scroll={{ x: 1000 }}
      columns={columns}
      request={api.commodity.page}
    ></ProTable>
  );
}
