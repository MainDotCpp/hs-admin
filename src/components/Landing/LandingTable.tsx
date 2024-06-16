import api from '@/api';
import { ActionType, ProColumns, ProTable } from '@ant-design/pro-components';
import { Button, Popconfirm, message } from 'antd';
import { useRef } from 'react';

import LandingEditModal from '@/components/Landing/LandingEditModal';
import { useAccess } from '@@/plugin-access';

export default function LandingTable() {
  const access = useAccess();
  const actionRef = useRef<ActionType>();
  const columns: ProColumns<API.Landing>[] = [
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
          access.LANDING__EDIT && (
            <LandingEditModal
              id={record.id}
              key="edit"
              onFinished={() => actionRef.current?.reload()}
            >
              <a>编辑</a>
            </LandingEditModal>
          ),
          access.LANDING__DELETE && (
            <Popconfirm
              key="delete"
              title={`确定删除吗？`}
              onConfirm={async () => {
                await api.landing.deleteById({ id: record.id });
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
    <ProTable<API.Landing>
      rowKey="id"
      search={false}
      actionRef={actionRef}
      toolbar={ {
        actions: [
          access.LANDING__EDIT && (
            <LandingEditModal
              key="create"
              onFinished={() => actionRef.current?.reload()}
            >
              <Button type="primary">新建落地页</Button>
            </LandingEditModal>
          ),
        ],
      }}
      size="small"
      scroll={ { x: 1000 }}
      columns={columns}
      request={api.landing.page}
    ></ProTable>
  );
}