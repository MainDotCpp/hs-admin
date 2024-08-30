import api from '@/api';
import { ActionType, ProColumns, ProTable } from '@ant-design/pro-components';
import { Button, Popconfirm, Tag, message } from 'antd';
import { useRef } from 'react';

import CloakLogTable from '@/components/CloakLog/CloakLogTable';
import YModal from '@/components/Modal';
import WebsiteEditModal from '@/components/WebsiteTable/WebsiteEditModal';
import { useLandingListQuery } from '@/querys/landingQuery';
import { useAccess } from '@@/plugin-access';
import { useQuery } from 'react-query';

export default function WebsiteTable({ domain }: { domain: API.DomainDTO }) {
  const access = useAccess();
  const actionRef = useRef<ActionType>();
  const getTableData = async (params: any) => {
    return api.website.page({ ...params, domainId: domain.id });
  };

  const { data: cloakConfigList } = useQuery('cloakConfigList', async () =>
    api.cloakConfig.list({}),
  );

  const { data: landingList } = useLandingListQuery();
  const columns: ProColumns<API.WebsiteDTO>[] = [
    { dataIndex: 'id', title: 'ID', search: false, hidden: true },
    {
      dataIndex: 'path',
      title: '路径',
      width: 100,
      search: false,
      render: (text) => {
        const url = `${domain.ssl ? 'https':'http'}://${domain.domain}${text}`;
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
      render: (_, record) => {
        return record.type === 'LINK' ? (
          <Tag color="geekblue">跳转</Tag>
        ) : (
          <Tag color="success">落地页({record.landingName})</Tag>
        );
      },
      valueEnum: {
        LINK: { text: '跳转', status: 'Default' },
        LANDING: { text: '落地页', status: 'Success' },
      },
    },
    {
      dataIndex: 'targetLink',
      title: '跳转链接',
      width: 100,
      search: false,
      render: (text, record) => {
        return (
          <a href={record.targetLink} target="_blank">
            {record.targetLink}
          </a>
        );
      },
    },
    // {
    //   dataIndex: 'orders',
    //   title: '工单',
    //   width: 100,
    //   search: false,
    //   render: (_, record) => {
    //     return (
    //       <Space>
    //         {record.orders.map((order) => (
    //           <Tag>{order.businessName}</Tag>
    //         ))}
    //       </Space>
    //     );
    //   },
    // },
    {
      dataIndex: 'cloakConfigName',
      title: '拦截配置',
      width: 100,
      search: false,
      render: (text, record) => record.cloakConfigName || '❎ 未开启',
    },
    {
      dataIndex: 'id',
      title: '操作',
      valueType: 'option',
      fixed: 'right',
      width: 100,
      render: (text, record, _, action) => {
        return [
          <YModal
            trigger={<a>查看记录</a>}
            width={'80vw'}
            footer={false}
            destroyOnClose
          >
            {() => <CloakLogTable relatedId={record.id} scene={'WEBSITE'} />}
          </YModal>,
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
              <a key="delete" className="text-red-500" style={{ color: 'red' }}>
                删除
              </a>
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
              domainId={domain.id!!}
              onFinished={() => actionRef.current?.reload()}
            >
              <Button type="primary">添加站点</Button>
            </WebsiteEditModal>
          ),
        ],
      }}
      size="small"
      scroll={{ x: 1000 }}
      columns={columns}
      request={getTableData}
    ></ProTable>
  );
}
