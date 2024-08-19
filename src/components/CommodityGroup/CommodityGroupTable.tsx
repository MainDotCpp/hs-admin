import api from '@/api';
import { ActionType, ProColumns, ProTable } from '@ant-design/pro-components';
import { Button, Popconfirm, message } from 'antd';
import { useRef } from 'react';

import CommodityGroupEditModal from '@/components/CommodityGroup/CommodityGroupEditModal';
import { useAccess } from '@@/plugin-access';

export default function CommodityGroupTable() {
  const access = useAccess();
  const actionRef = useRef<ActionType>();
  const columns: ProColumns<API.CommodityGroup>[] = [
    { dataIndex: 'id', title: 'ID', search: false, hidden: true },
    { dataIndex: 'groupName', title: '分组名', width: 100, search: false },
    {
      dataIndex: 'id',
      title: '操作',
      valueType: 'option',
      fixed: 'right',
      width: 50,
      render: (text, record, _, action) => {
        return [
          access.COMMODITY_GROUP__EDIT && (
            <CommodityGroupEditModal
              id={record.id}
              key="edit"
              onFinished={() => actionRef.current?.reload()}
            >
              <a>编辑</a>
            </CommodityGroupEditModal>
          ),
          access.COMMODITY_GROUP__DELETE && (
            <Popconfirm
              key="delete"
              title={`确定删除吗？`}
              onConfirm={async () => {
                await api.commodityGroup.deleteById({ id: record.id });
                message.success('删除成功');
                action.reload();
              }}
            >
              <a key="delete" className="text-red-500">
                删除
              </a>
            </Popconfirm>
          ),
        ];
      },
    },
  ];
  return (
    <ProTable<API.CommodityGroup>
      rowKey="id"
      search={false}
      ghost
      actionRef={actionRef}
      toolbar={{
        actions: [
          access.COMMODITY_GROUP__EDIT && (
            <CommodityGroupEditModal
              key="create"
              onFinished={() => actionRef.current?.reload()}
            >
              <Button type="primary">新建商品组</Button>
            </CommodityGroupEditModal>
          ),
        ],
      }}
      size="small"
      scroll={{ x: 1000 }}
      columns={columns}
      request={api.commodityGroup.page}
    ></ProTable>
  );
}
