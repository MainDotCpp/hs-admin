import React, { useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ActionType, ProColumns, ProTable } from '@ant-design/pro-components';
import api from '@/api';
import { Button, message, Popconfirm } from 'antd';
import PermissionEditModal from '@/pages/Permission/PermissionEditModal';

export default function Page() {
  const actionRef = useRef<ActionType>();
  const getTableData = async (params: any) => {
    return api.permission.page(params);
  };
  const columns: ProColumns<API.Permission>[] = [
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
          <PermissionEditModal id={record.id} key="edit">
            <a>编辑</a>
          </PermissionEditModal>,
          <Popconfirm
            key="delete"
            title={`确定删除吗？`} onConfirm={async () => {
            await api.permission.deleteById(record.id);
            message.success('删除成功');
            action.reload();
          }}>
            <a key="delete">删除</a>
          </Popconfirm>,
        ];
      },
    },
  ];
  return (
    <PageContainer>
      <ProTable
        rowKey='id'
        actionRef={actionRef}
        toolbar={ {
          actions: [
            <PermissionEditModal key="create" onFinished={() => actionRef.current?.reload()}>
              <Button type="primary">新建</Button>
            </PermissionEditModal>,
          ],
        }}
        size="small"
        scroll={ { x: 1000 }}
        columns={columns}
        request={getTableData}
      ></ProTable>
    </PageContainer>
  );
}