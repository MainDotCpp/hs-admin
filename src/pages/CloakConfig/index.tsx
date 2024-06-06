import React, { useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ActionType, ProColumns, ProTable } from '@ant-design/pro-components';
import api from '@/api';
import { Button, message, Popconfirm, Tag } from 'antd';
import CloakConfigEditModal from '@/pages/CloakConfig/CloakConfigEditModal';
import { useAccess } from '@@/plugin-access';
import { countriesEnum } from '@/constants/countries';

export default function Page() {
  const access = useAccess();
  const actionRef = useRef<ActionType>();
  const getTableData = async (params: any) => {
    return api.cloakConfig.page(params);
  };

  const columns: ProColumns<API.CloakConfig>[] = [
    { dataIndex: 'id', title: 'ID', search: false, hidden: true, width: 100, ellipsis: true },
    { dataIndex: 'name', title: '配置名称', width: 100, search: false, width: 100, ellipsis: true },
    {
      dataIndex: 'allowRegion',
      title: '地区检测',
      search: false,
      width: 100,
      align: 'center',
      ellipsis: true,
      renderText: (text, record) => <>
        {record.enableRegionDetection ? text?.split(',').map(code => {
          return <Tag>{countriesEnum[code]}</Tag>;
        }) : '✖'}
      </>,
    },
    {
      dataIndex: 'enableSpiderDetection',
      title: '爬虫检测',
      search: false,
      width: 50,
      align: 'center',
      ellipsis: true,
      render: (_, record) => <>
        {record.enableSpiderDetection ? '✅' : '✖'}
      </>,
    },
    {
      dataIndex: 'enableLanguageDetection',
      title: '访客语言检测',
      search: false,
      width: 50,
      align: 'center',
      ellipsis: true,
      render: (_, record) => <>
        {record.enableLanguageDetection ? '✅' : '✖'}
      </>,
    },
    {
      dataIndex: 'enableProxyDetection',
      title: '代理检测',
      search: false,
      width: 50,
      align: 'center',
      ellipsis: true,
      render: (_, record) => <>
        {record.enableProxyDetection ? '✅' : '✖'}
      </>,
    },
    {
      dataIndex: 'enableUaDetection',
      title: '客户端检测',
      search: false,
      width: 50,
      align: 'center',
      ellipsis: true,
      render: (_, record) => <>
        {record.enableUaDetection ? '✅' : '✖'}
      </>,
    },
    {
      dataIndex: 'useCloakProvider',
      title: '第三方 CLOAK 检测',
      width: 50,
      align: 'center',
      search: false,
      ellipsis: true,
      renderText: (text) => text ? '✔' : '✖',
    },
    {
      dataIndex: 'cloakProvider', title: '第三方 CLOAK', width: 100, search: false, width: 100, ellipsis: true,
      align: 'center',
      valueEnum: {
        SHENG_DUN: '圣盾',
      },
    },
    {
      dataIndex: 'id',
      title: '操作',
      valueType: 'option',
      align: 'center',
      fixed: 'right',
      width: 100,
      render: (text, record, _, action) => {
        return [
          access.CLOAK__EDIT && <CloakConfigEditModal id={record.id} key="edit" onFinished={action?.reload}>
            <a>编辑</a>
          </CloakConfigEditModal>,
          access.CLOAK__DELETE && <Popconfirm
            key="delete"
            title={`确定删除吗？`} onConfirm={async () => {
            await api.cloakConfig.deleteById({ id: record.id });
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
            access.CLOAK__EDIT && <CloakConfigEditModal key="create" onFinished={() => actionRef.current?.reload()}>
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