import { PageContainer } from '@ant-design/pro-layout';
import React, { useRef } from 'react';
import { ActionType, ProColumns, ProTable } from '@ant-design/pro-components';
import api from '@/api';
import { Button, message, Popconfirm } from 'antd';
import ShortLinkEditModal from '@/pages/ShortLink/ShortLinkEditModal';
import { useRequest } from 'ahooks';

export default function Page() {
  const actionRef = useRef<ActionType>();
  const { data: cloakConfigList } = useRequest(api.cloakConfig.list, {
    defaultParams: [{}],
  });

  const getTableData = async (params: any) => {
    return api.shortlink.page(params);
  };
  const columns: ProColumns<API.ShortLinkConfig>[] = [
    { dataIndex: 'id', title: 'ID', search: false, hidden: true },
    { dataIndex: 'key', title: '编号', search: false, width: 200 },
    {
      dataIndex: 'cloakId', title: '斗篷', search: false, width: 200, renderText: (text) => {
        const cloakConfig = cloakConfigList?.find((item) => item.id === text);
        return cloakConfig?.name;
      },
    },
    { dataIndex: 'targetUrl', title: '跳转地址', search: false, width: 200 },
    { dataIndex: 'remark', title: '备注', search: false, width: 200 },
    {
      dataIndex: 'id',
      title: '操作',
      valueType: 'option',
      fixed: 'right',
      width: 100,
      render: (text, record, _, action) => {
        return [
          <ShortLinkEditModal id={record.id} key="edit" onFinished={action?.reload}>
            <a>编辑</a>
          </ShortLinkEditModal>,
          <Popconfirm
            key="delete"
            title={`确定删除吗？`} onConfirm={async () => {
            await api.shortlink.delete(record.id);
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
            <ShortLinkEditModal key="create" onFinished={() => actionRef.current?.reload()}>
              <Button type="primary">新建</Button>
            </ShortLinkEditModal>,
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
