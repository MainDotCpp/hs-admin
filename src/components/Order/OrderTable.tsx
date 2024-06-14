import api from '@/api';
import { ActionType, ProColumns, ProTable } from '@ant-design/pro-components';
import { Button, Popconfirm, message } from 'antd';
import { useRef } from 'react';

import OrderEditModal from '@/components/Order/OrderEditModal';
import { auditorField } from '@/constants/auditor';
import { useAccess } from '@@/plugin-access';

type OrderTableProps = {
  orderGroupId?: number;
  orderGroupName?: string;
};
export default function OrderTable(props: OrderTableProps) {
  const access = useAccess();
  const actionRef = useRef<ActionType>();
  const columns: ProColumns<API.Order>[] = [
    { dataIndex: 'id', title: 'ID', search: false, hidden: true },
    { dataIndex: 'link', title: '链接', width: 100, search: false },
    {
      dataIndex: 'operatorNickname',
      title: '运营昵称',
      width: 100,
      search: false,
    },
    { dataIndex: 'businessName', title: '业务名称', width: 100, search: false },
    ...auditorField,
    {
      dataIndex: 'id',
      title: '操作',
      valueType: 'option',
      fixed: 'right',
      width: 100,
      render: (text, record, _, action) => {
        return [
          access.ORDER__EDIT && (
            <OrderEditModal
              id={record.id}
              groupId={props.orderGroupId}
              key="edit"
              onFinished={() => actionRef.current?.reload()}
            >
              <a>编辑</a>
            </OrderEditModal>
          ),
          access.ORDER__DELETE && (
            <Popconfirm
              key="delete"
              title={`确定删除吗？`}
              onConfirm={async () => {
                await api.order.deleteById({ id: record.id });
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
    <ProTable<API.Order>
      rowKey="id"
      search={false}
      actionRef={actionRef}
      params={{ orderGroupId: props.orderGroupId }}
      toolbar={{
        actions: [
          access.ORDER__EDIT && (
            <OrderEditModal
              key="create"
              groupId={props.orderGroupId}
              onFinished={() => actionRef.current?.reload()}
            >
              <Button type="primary">新建工单</Button>
            </OrderEditModal>
          ),
        ],
      }}
      size="small"
      scroll={{ x: 1000 }}
      columns={columns}
      request={api.order.page}
    ></ProTable>
  );
}
