import React, { useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ActionType, ProColumns, ProTable } from '@ant-design/pro-components';
import api from '@/api';
import { Button, message, Popconfirm } from 'antd';
import RoleEditModal from '@/pages/Role/RoleEditModal';

export default function Page() {
  const actionRef = useRef<ActionType>();
  const getTableData = async (params: any) => {
    return api.role.page(params);
  };
  const columns: ProColumns<API.Role>[] = [
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
          <RoleEditModal id={record.id} key="edit">
            <a>编辑</a>
          </RoleEditModal>,
          <Popconfirm
            key="delete"
            title={`确定删除吗？`} onConfirm={async () => {
            await api.role.deleteById(record.id);
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
            <RoleEditModal key="create" onFinished={() => actionRef.current?.reload()}>
              <Button type="primary">新建</Button>
            </RoleEditModal>,
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