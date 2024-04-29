import React, { useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ActionType, ProColumns, ProTable } from '@ant-design/pro-components';
import api from '@/api';
import { Button, message, Popconfirm } from 'antd';
import CloakConfigEditModal from '@/pages/CloakConfig/CloakConfigEditModal';

export default function Page() {
  const actionRef = useRef<ActionType>();
  const getTableData = async (params: any) => {
    return api.cloakConfig.page(params);
  };
  const columns: ProColumns<API.CloakConfig>[] = [
    { dataIndex: 'id', title: 'ID', search: false, hidden: true },
    { dataIndex: 'name', title: '配置名称', width: 100, search: false },
    { dataIndex: 'allowRegion', title: '允许地区', width: 100, search: false },
    { dataIndex: 'useCloakProvider', title: '双重检测', valueType: 'switch', width: 100, search: false },
    { dataIndex: 'cloakProvider', title: '第三方 CLOAK', width: 100, search: false },
    { dataIndex: 'cloakProviderApiUrl', title: '第三方 CLOAK API', width: 100, search: false },
    { dataIndex: 'cloakProviderApiSecret', title: '第三方 CLOAK 密钥', width: 100, search: false },
    {
      dataIndex: 'id',
      title: '操作',
      valueType: 'option',
      align: 'center',
      fixed: 'right',
      width: 100,
      render: (text, record, _, action) => {
        return [
          <CloakConfigEditModal id={record.id} key="edit">
            <a>编辑</a>
          </CloakConfigEditModal>,
          <Popconfirm
            key="delete"
            title={`确定删除吗？`} onConfirm={async () => {
            await api.cloakConfig.deleteById(record.id);
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
        rowKey="id"
        actionRef={actionRef}
        toolbar={{
          actions: [
            <CloakConfigEditModal key="create" onFinished={() => actionRef.current?.reload()}>
              <Button type="primary">新建</Button>
            </CloakConfigEditModal>,
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