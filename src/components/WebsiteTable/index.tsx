import api from '@/api';
import { ActionType, ProColumns, ProTable } from '@ant-design/pro-components';
import { Button, Popconfirm, message } from 'antd';
import { useRef } from 'react';

import WebsiteEditModal from '@/components/WebsiteTable/WebsiteEditModal';
import { useAccess } from '@@/plugin-access';

export default function WebsiteTable({ domain }: { domain: API.DomainDTO }) {
  const access = useAccess();
  const actionRef = useRef<ActionType>();
  const getTableData = async (params: any) => {
    return api.website.page({ ...params, domainId: domain.id });
  };
  const columns: ProColumns<API.Website>[] = [
    { dataIndex: 'id', title: 'ID', search: false, hidden: true },
    {
      dataIndex: 'path',
      title: '路径',
      width: 100,
      search: false,
      render: (text) => {
        const url = `https://${domain.domain}${text}`;
        return (
          <a href={url} target="_blank">
            {url}
          </a>
        );
      },
    },
    {
      dataIndex: 'type',
      title: '类型',
      width: 100,
      search: false,
      valueEnum: {
        LINK: { text: '跳转', status: 'Default' },
        LANDING: { text: '落地页', status: 'Success' },
      },
    },
    {
      dataIndex: 'cloakConfigName',
      title: '拦截配置',
      width: 100,
      search: false,
      render: (text, record) => record.cloakConfigId || '❎ 未开启',
    },
    {
      dataIndex: 'id',
      title: '操作',
      valueType: 'option',
      fixed: 'right',
      width: 100,
      render: (text, record, _, action) => {
        return [
          access.WEBSITE__EDIT && (
            <WebsiteEditModal
              domainId={domain.id}
              id={record.id}
              key="edit"
              onFinished={() => actionRef.current?.reload()}
            >
              <a>编辑</a>
            </WebsiteEditModal>
          ),
          access.WEBSITE__DELETE && (
            <Popconfirm
              key="delete"
              title={`确定删除吗？`}
              onConfirm={async () => {
                await api.website.deleteById({ id: record.id });
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
    <ProTable
      rowKey="id"
      search={false}
      actionRef={actionRef}
      toolbar={{
        actions: [
          access.WEBSITE__EDIT && (
            <WebsiteEditModal
              domainId={domain.id}
              onFinished={() => actionRef.current?.reload()}
            >
              <Button type="primary">创建站点</Button>
            </WebsiteEditModal>
          ),
        ],
        settings: [],
      }}
      size="small"
      scroll={{ x: 1000 }}
      columns={columns}
      request={getTableData}
    ></ProTable>
  );
}
