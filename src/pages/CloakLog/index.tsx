import React, { useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ActionType, ProColumns, ProTable } from '@ant-design/pro-components';
import api from '@/api';
import { Button, message, Popconfirm } from 'antd';
import CloakLogEditModal from '@/pages/CloakLog/CloakLogEditModal';
import { useParams, useSearchParams } from '@@/exports';
import { useRequest } from 'ahooks';

export default function Page() {
  const actionRef = useRef<ActionType>();
  const [searchParams] = useSearchParams();
  const { data: cloakConfigList } = useRequest(api.cloakConfig.list, {
    defaultParams: [{}],
  });
  const getTableData = async (params: any) => {
    return api.cloakLog.page({
      ...params,
      scene: searchParams.get('scene'),
      relatedId: searchParams.get('relatedId'),
    });
  };
  const columns: ProColumns<API.CloakLog>[] = [
    {
      ellipsis: true,
      dataIndex: 'id', title: 'ID', search: false, hidden: true,
    },
    {
      ellipsis: true,
      dataIndex: 'accessTime', title: '访问时间',valueType:'dateTime', width: 200, search: false,
    },
    {
      ellipsis: true,
      dataIndex: 'accessUrl', title: '访问地址',width: 200, search: false,
    },
    {
      ellipsis: true,
      dataIndex: 'ip', title: 'ip', width: 200, search: false,
    },
    {
      dataIndex: 'configId', title: '斗篷', search: false, width: 200, renderText: (text) => {
        const cloakConfig = cloakConfigList?.find((item) => item.id === text);
        return cloakConfig?.name;
      },
    },
    {
      ellipsis: true,
      dataIndex: 'status', title: '状态', width: 200, search: false,
      valueEnum: {
        PERMIT: '✅ 允许访问',
        FORBID_BY_REGION: '🚫 区域拦截',
        FORBID_BY_IP: '🚫 IP拦截',
        FORBID_BY_PROXY: '🚫 代理拦截',
        FORBID_BY_SPIDER: '🐞 爬虫拦截',
        FORBID_BY_USER_AGENT: '🐞 UA拦截',
        FORBID_BY_REFERER: '🚫 来源拦截',
        FORBID_BY_THIRD_CLOAK: '🚫 第三方CLOAK拦截',
      },
    },
    {
      ellipsis: true,
      dataIndex: 'remark', title: '拦截原因', width: 200, search: false,
    },
    {
      ellipsis: true,
      dataIndex: 'countryName', title: '国家', width: 200, search: false,
    },
    {
      ellipsis: true,
      dataIndex: 'regionName', title: '区域', width: 200, search: false,
    },
    {
      ellipsis: true,
      dataIndex: 'cityName', title: '城市', width: 200, search: false,
    },
    {
      ellipsis: true,
      dataIndex: 'platform', title: '平台', width: 200, search: false,
    },
    {
      ellipsis: true,
      dataIndex: 'os', title: '操作系统', width: 200, search: false,
    },
    {
      ellipsis: true,
      dataIndex: 'browser', title: '浏览器 ', width: 200, search: false,
    },
    {
      ellipsis: true,
      dataIndex: 'engine', title: '浏览器引擎', width: 200, search: false,
    },
    {
      ellipsis: true,
      dataIndex: 'engineVersion', title: '浏览器引擎版本', width: 200, search: false,
    },
    {
      ellipsis: true,
      dataIndex: 'as', title: '网络', width: 200, search: false,
    },
    {
      ellipsis: true,
      dataIndex: 'isMobile', title: '是否是移动设备', width: 200, search: false, valueEnum: {
        true: "✅",
        false: "❌"
      },
    },
    {
      ellipsis: true,
      dataIndex: 'isProxy',
      title: '是否使用代理',
      width: 200,
      search: false,
      valueEnum: {
        true: "✅",
        false: "❌"
      },
    },
    {
      ellipsis: true,
      dataIndex: 'isCrawler',
      title: '是否是爬虫',
      width: 200,
      search: false,
      valueEnum: {
        true: "✅",
        false: "❌"
      },
    },
  ];
  return (
    <PageContainer>
      <ProTable
        rowKey="id"
        actionRef={actionRef}
        size="small"
        scroll={{ x: 1000 }}
        columns={columns}
        request={getTableData}
      ></ProTable>
    </PageContainer>
  );
}