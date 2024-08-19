import api from '@/api';
import RoleEditModal from '@/pages/Role/RoleEditModal';
import { useAccess } from '@@/plugin-access';
import { ActionType, ProColumns, ProTable } from '@ant-design/pro-components';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Popconfirm, message } from 'antd';
import { useRef } from 'react';

export default function Page() {
  const access = useAccess();
  const actionRef = useRef<ActionType>();
  const getTableData = async (params: any) => {
    return api.role.page(params);
  };
  const columns: ProColumns<API.Role>[] = [
    { dataIndex: 'id', title: 'ID', search: false, hidden: true },
    { dataIndex: 'name', title: '名称', width: 100, search: false },
    { dataIndex: 'code', title: '代码', width: 100, search: false },
    {
      dataIndex: 'id',
      title: '操作',
      valueType: 'option',
      fixed: 'right',
      width: 100,
      render: (text, record, _, action) => {
        return [
          access.ROLE__EDIT && (
            <RoleEditModal id={record.id} key="edit">
              <a>编辑</a>
            </RoleEditModal>
          ),
          access.ROLE__DELETE && (
            <Popconfirm
              key="delete"
              title={`确定删除吗？`}
              onConfirm={async () => {
                await api.role.deleteById({ id: record.id });
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
        actionRef={actionRef}
        toolbar={{
          actions: [
            access.ROLE__EDIT && (
              <RoleEditModal
                key="create"
                onFinished={() => actionRef.current?.reload()}
              >
                <Button type="primary">新建</Button>
              </RoleEditModal>
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
