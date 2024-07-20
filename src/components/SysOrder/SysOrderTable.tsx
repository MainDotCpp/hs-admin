import api from '@/api';
import { ActionType, ProColumns, ProTable } from '@ant-design/pro-components';
import { Button, Popconfirm, message } from 'antd';
import { useRef } from 'react';

import SysOrderEditModal from '@/components/SysOrder/SysOrderEditModal';
import { useAccess } from '@@/plugin-access';

export default function SysOrderTable() {
  const access = useAccess();
  const actionRef = useRef<ActionType>();
  const columns: ProColumns<API.SysOrder>[] = [
    { dataIndex: 'id', title: 'ID', search: false, hidden: true },
    { dataIndex: 'id', title: 'ID', width: 100, search: false },
    {
      dataIndex: 'id',
      title: '操作',
      valueType: 'option',
      fixed: 'right',
      width: 100,
      render: (text, record, _, action) => {
        return [
          access.SYS_ORDER__EDIT && (
            <SysOrderEditModal
              id={record.id}
              key="edit"
              onFinished={() => actionRef.current?.reload()}
            >
              <a>编辑</a>
            </SysOrderEditModal>
          ),
          access.SYS_ORDER__DELETE && (
            <Popconfirm
              key="delete"
              title={`确定删除吗？`}
              onConfirm={async () => {
                await api.sysOrder.deleteById({ id: record.id });
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
    <ProTable<API.SysOrder>
      rowKey="id"
      search={false}
      actionRef={actionRef}
      toolbar={ {
        actions: [
          access.SYS_ORDER__EDIT && (
            <SysOrderEditModal
              key="create"
              onFinished={() => actionRef.current?.reload()}
            >
              <Button type="primary">新建系统订单</Button>
            </SysOrderEditModal>
          ),
        ],
      }}
      size="small"
      scroll={ { x: 1000 }}
      columns={columns}
      request={api.sysOrder.page}
    ></ProTable>
  );
}
