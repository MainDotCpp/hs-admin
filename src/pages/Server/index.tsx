import api from '@/api';
import ServerEditModal from '@/pages/Server/ServerEditModal';
import { ActionType, ProColumns, ProTable } from '@ant-design/pro-components';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Popconfirm, message } from 'antd';
import { useRef } from 'react';

import { useAccess } from '@@/plugin-access';

export default function Page() {
  const access = useAccess();
  const actionRef = useRef<ActionType>();
  const getTableData = async (params: any) => {
    return api.server.page(params);
  };
  const columns: ProColumns<API.Server>[] = [
    { dataIndex: 'id', title: 'ID', search: false, hidden: true },
    { dataIndex: 'name', title: '服务器名称', width: 100, search: false },
    {
      dataIndex: 'id',
      title: '操作',
      valueType: 'option',
      fixed: 'right',
      width: 100,
      render: (text, record, _, action) => {
        return [
          access.SERVER__EDIT && (
            <ServerEditModal
              id={record.id}
              key="edit"
              onFinished={() => actionRef.current?.reload()}
            >
              <a>编辑</a>
            </ServerEditModal>
          ),
          access.SERVER__DELETE && (
            <Popconfirm
              key="delete"
              title={`确定删除吗？`}
              onConfirm={async () => {
                await api.server.deleteById({ id: record.id });
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
    <PageContainer>
      <ProTable
        rowKey="id"
        search={false}
        actionRef={actionRef}
        toolbar={{
          actions: [
            access.SERVER__EDIT && (
              <ServerEditModal
                key="create"
                onFinished={() => actionRef.current?.reload()}
              >
                <Button type="primary">新建</Button>
              </ServerEditModal>
            ),
          ],
        }}
        size="small"
        scroll={{ x: 1000 }}
        columns={columns}
        request={getTableData}
      ></ProTable>
    </PageContainer>
  );
}
