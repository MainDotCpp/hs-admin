import api from '@/api';
import { countriesEnum } from '@/constants/countries';
import IpItem from '@/pages/CloakLog/IpItem';
import { ActionType, ProColumns, ProTable } from '@ant-design/pro-components';
import { useRequest } from 'ahooks';
import { useRef } from 'react';

interface CloakLogProps {
  scene?: 'LANDING' | 'WEBSITE' | 'API';
  relatedId?: number;
}

const CloakLogTable = (props: CloakLogProps) => {
  const actionRef = useRef<ActionType>();
  const { data: cloakConfigList } = useRequest(api.cloakConfig.list, {
    defaultParams: [{}],
  });
  const getTableData = async (params: any) => {
    return api.cloakLog.page({
      ...params,
      scene: props.scene,
      relatedId: props.relatedId,
    });
  };
  const columns: ProColumns<API.CloakLog>[] = [
    {
      ellipsis: true,
      dataIndex: 'id',
      title: 'ID',
      search: false,
      hidden: true,
    },
    {
      ellipsis: true,
      dataIndex: 'accessTime',
      title: '访问时间',
      valueType: 'dateTime',
      width: 200,
      search: false,
    },
    {
      ellipsis: true,
      dataIndex: 'accessUrl',
      title: '访问地址',
      width: 200,
      search: false,
    },
    {
      ellipsis: true,
      dataIndex: 'ip',
      title: 'ip',
      width: 200,
      search: false,
      render: (_, record) => (
        <IpItem ip={record.ip || ''} inBlackList={false} />
      ),
    },
    {
      dataIndex: 'countryCode',
      title: 'ip归属地',
      width: 200,
      valueEnum: countriesEnum,
    },
    {
      dataIndex: 'configId',
      title: '斗篷',
      width: 200,
      valueEnum: cloakConfigList?.reduce((acc, item) => {
        acc[item.id] = item.name;
        return acc;
      }, {}),
    },
    {
      ellipsis: true,
      dataIndex: 'status',
      title: '状态',
      width: 200,
      valueEnum: {
        PERMIT: '✅ 允许访问',
        FORBID_BY_REGION: '🚫 区域拦截',
        FORBID_BY_IP: '🚫 IP拦截',
        FORBID_BY_PROXY: '🚫 代理拦截',
        FORBID_BY_SPIDER: '🐞 爬虫拦截',
        FORBID_BY_USER_AGENT: '🐞 UA拦截',
        FORBID_BY_REFERER: '🚫 来源拦截',
        FORBID_BY_THIRD_CLOAK: '🚫 第三方CLOAK拦截',
        FORBID_BY_BLACKLIST_IP: '🚫 黑名单IP拦截',
      },
    },
    {
      ellipsis: true,
      dataIndex: 'remark',
      title: '拦截原因',
      width: 200,
      search: false,
    },
    {
      ellipsis: true,
      dataIndex: 'countryName',
      title: '国家',
      width: 200,
      search: false,
    },
    {
      ellipsis: true,
      dataIndex: 'regionName',
      title: '区域',
      width: 200,
      search: false,
    },
    {
      ellipsis: true,
      dataIndex: 'cityName',
      title: '城市',
      width: 200,
      search: false,
    },
    {
      ellipsis: true,
      dataIndex: 'platform',
      title: '平台',
      width: 200,
      search: false,
    },
    {
      ellipsis: true,
      dataIndex: 'os',
      title: '操作系统',
      width: 200,
      search: false,
    },
    {
      ellipsis: true,
      dataIndex: 'browser',
      title: '浏览器 ',
      width: 200,
      search: false,
    },
    {
      ellipsis: true,
      dataIndex: 'engine',
      title: '浏览器引擎',
      width: 200,
      search: false,
    },
    {
      ellipsis: true,
      dataIndex: 'engineVersion',
      title: '浏览器引擎版本',
      width: 200,
      search: false,
    },
    {
      ellipsis: true,
      dataIndex: 'as',
      title: '网络',
      width: 200,
      search: false,
    },
    {
      ellipsis: true,
      dataIndex: 'isMobile',
      title: '移动设备',
      width: 200,
      valueEnum: {
        true: '✅',
        false: '❌',
      },
    },
    {
      ellipsis: true,
      dataIndex: 'isProxy',
      title: '代理',
      width: 200,
      valueEnum: {
        true: '✅',
        false: '❌',
      },
    },
    {
      ellipsis: true,
      dataIndex: 'isCrawler',
      title: '爬虫',
      width: 200,
      valueEnum: {
        true: '✅',
        false: '❌',
      },
    },
  ];
  return (
    <ProTable
      rowKey="id"
      actionRef={actionRef}
      size="small"
      scroll={{ x: 1000 }}
      columns={columns}
      request={getTableData}
    ></ProTable>
  );
};

export default CloakLogTable;
