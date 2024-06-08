import api from '@/api';
import UserEditModal from '@/pages/User/UserEditModal';
import { ActionType, ProColumns, ProTable } from '@ant-design/pro-components';
import { PageContainer } from '@ant-design/pro-layout';
import { useRequest } from 'ahooks';
import { Button, message, Popconfirm, Space, Tag } from 'antd';
import { useRef } from 'react';

export default function Page() {
  const actionRef = useRef<ActionType>();
  const getTableData = async (params: any) => {
    return api.user.page(params);
  };

  const { data: deptList } = useRequest(api.dept.list, {
    defaultParams: [{}],
  });
  const columns: ProColumns<API.User>[] = [
    { dataIndex: 'id', title: 'ID', search: false, hidden: true },
    { dataIndex: 'nickname', title: '昵称', width: 100, search: false },
    { dataIndex: 'username', title: '用户名', width: 100, search: false },
    {
      dataIndex: 'status',
      title: '状态',
      valueEnum: {
        0: { color: 'red', text: '禁用' },
        1: { color: 'blue', text: '正常' },
      },
      width: 100,
      search: false,
    },
    {
      dataIndex: 'roles',
      title: '角色',
      width: 200,
      search: false,
      render: (text, record) => (
        <Space>
          {record.roleNames.map((role) => (
            <Tag key={role}>{role}</Tag>
          ))}
        </Space>
      ),
    },
    {
      dataIndex: 'deptId',
      title: '部门',
      width: 100,
      renderText: (text) => {
        const dept = deptList?.find((item) => item.id === text);
        return dept?.name;
      },
    },
    {
      dataIndex: 'dataPermission',
      title: '数据权限',
      width: 100,
      search: false,
      valueEnum: {
        SELF: { text: '仅本人' },
        DEPT: { text: '本部门' },
        DEPT_AND_CHILD: { text: '本部门及子部门' },
        ALL: { text: '全部' },
      },
    },
    {
      dataIndex: 'id',
      title: '操作',
      valueType: 'option',
      fixed: 'right',
      width: 100,
      render: (text, record, _, action) => {
        return [
          <UserEditModal
            id={record.id}
            key="edit"
            onFinished={() => actionRef.current?.reload()}
          >
            <a>编辑</a>
          </UserEditModal>,
          <Popconfirm
            key="delete"
            title={`确定删除吗？`}
            onConfirm={async () => {
              await api.user.deleteById({ id: record.id });
              message.success('删除成功');
              action.reload();
            }}
          >
            <a key="delete">删除</a>
          </Popconfirm>,
        ];
      },
    },
  ];
  return (
    <PageContainer>
      <ProTable
        search={false}
        rowKey="id"
        actionRef={actionRef}
        toolbar={{
          actions: [
            <UserEditModal
              key="create"
              onFinished={() => actionRef.current?.reload()}
            >
              <Button type="primary">新建</Button>
            </UserEditModal>,
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
