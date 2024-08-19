import api from '@/api';
import { ActionType, ProColumns, ProTable } from '@ant-design/pro-components';
import { Button, Popconfirm, message } from 'antd';
import { useRef } from 'react';

import OrderGroupEditModal from '@/components/OrderGroup/OrderGroupEditModal';
import { auditorField } from '@/constants/auditor';
import { orderGroupStatus } from '@/enums/orderGroup';
import { useAccess } from '@@/plugin-access';
import { Link } from '@umijs/max';

export default function OrderGroupTable() {
  const access = useAccess();
  const actionRef = useRef<ActionType>();
  const columns: ProColumns<API.OrderGroup>[] = [
    { dataIndex: 'id', title: 'ID', search: false, hidden: true },
    { dataIndex: 'name', title: '名称', width: 100, search: false },
    {
      dataIndex: 'status',
      title: '状态',
      width: 100,
      valueEnum: orderGroupStatus,
    },
    ...auditorField,
    {
      dataIndex: 'id',
      title: '操作',
      valueType: 'option',
      fixed: 'right',
      width: 100,
      render: (text, record, _, action) => {
        return [
          access.ORDER__VIEW && (
            <Link to={`order?groupId=${record.id}&groupName=${record.name}`}>
              查看工单
            </Link>
          ),
          access.ORDER_GROUP__EDIT && (
            <OrderGroupEditModal
              id={record.id}
              key="edit"
              onFinished={() => actionRef.current?.reload()}
            >
              <a>编辑</a>
            </OrderGroupEditModal>
          ),
          access.ORDER_GROUP__DELETE && (
            <Popconfirm
              key="delete"
              title={`确定删除吗？`}
              onConfirm={async () => {
                await api.orderGroup.deleteById({ id: record.id });
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
    <ProTable<API.OrderGroup>
      rowKey="id"
      search={false}
      actionRef={actionRef}
      toolbar={{
        actions: [
          access.ORDER_GROUP__EDIT && (
            <OrderGroupEditModal
              key="create"
              onFinished={() => actionRef.current?.reload()}
            >
              <Button type="primary">新建工单组</Button>
            </OrderGroupEditModal>
          ),
        ],
      }}
      size="small"
      scroll={{ x: 1000 }}
      columns={columns}
      request={api.orderGroup.page}
    ></ProTable>
  );
}
