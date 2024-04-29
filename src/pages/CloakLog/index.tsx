import React, { useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ActionType, ProColumns, ProTable } from '@ant-design/pro-components';
import api from '@/api';
import { Button, message, Popconfirm } from 'antd';
import CloakLogEditModal from '@/pages/CloakLog/CloakLogEditModal';

export default function Page() {
  const actionRef = useRef<ActionType>();
  const getTableData = async (params: any) => {
    return api.cloakLog.page(params);
  };
  const columns: ProColumns<API.CloakLog>[] = [
    { dataIndex: 'id', title: 'ID', search: false, hidden: true },
    { dataIndex: 'ip', title: 'ip', width: 200, search: false },
    { dataIndex: 'status', title: '状态', width: 200, search: false },
    { dataIndex: 'remark', title: '拦截原因', width: 200, search: false },
    { dataIndex: 'countryName', title: '国家', width: 200, search: false },
    { dataIndex: 'cityName', title: '城市', width: 200, search: false },
    { dataIndex: 'regionName', title: '区域', width: 200, search: false },
    { dataIndex: 'platform', title: '平台', width: 200, search: false },
    { dataIndex: 'os', title: '操作系统', width: 200, search: false },
    { dataIndex: 'browser', title: '浏览器 ', width: 200, search: false },
    { dataIndex: 'engine', title: '浏览器引擎', width: 200, search: false },
    { dataIndex: 'engineVersion', title: '浏览器引擎版本', width: 200, search: false },
    { dataIndex: 'as', title: '网络', width: 200, search: false },
    {
      dataIndex: 'isMobile', title: '是否是移动设备', width: 200, search: false, valueEnum: {
        true: { text: '是' },
        false: { text: '否' },
      },
    },
    {
      dataIndex: 'isProxy',
      title: '是否使用代理',
      width: 200,
      search: false,
      valueEnum: { true: { text: '是' }, false: { text: '否' } },
    },
    {
      dataIndex: 'isCrawler',
      title: '是否是爬虫',
      width: 200,
      search: false,
      valueEnum: { true: { text: '是' }, false: { text: '否' } },
    },
    {
      dataIndex: 'id',
      title: '操作',
      valueType: 'option',
      fixed: 'right',
      width: 100,
      render: (text, record, _, action) => {
        return [
          <CloakLogEditModal id={record.id} key="edit">
            <a>编辑</a>
          </CloakLogEditModal>,
          <Popconfirm
            key="delete"
            title={`确定删除吗？`} onConfirm={async () => {
            await api.cloakLog.deleteById(record.id);
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
            <CloakLogEditModal key="create" onFinished={() => actionRef.current?.reload()}>
              <Button type="primary">新建</Button>
            </CloakLogEditModal>,
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