import api from '@/api';
import LoadingConfigEditModal from '@/pages/LoadingConfig/LoadingConfigEditModal';
import { ActionType, ProColumns, ProTable } from '@ant-design/pro-components';
import { PageContainer } from '@ant-design/pro-layout';
import { useRequest } from 'ahooks';
import { Button, Popconfirm, message } from 'antd';
import { useRef } from 'react';

export default function Page() {
  const actionRef = useRef<ActionType>();
  const { data: cloakConfigList } = useRequest(api.cloakConfig.list, {
    defaultParams: [{}],
  });
  const getTableData = async (params: any) => {
    return api.loadingConfig.page(params);
  };
  const columns: ProColumns<API.LoadingConfig>[] = [
    { dataIndex: 'id', title: 'ID', search: false, hidden: true },
    { dataIndex: 'domain', title: '域名', width: 100, search: false },
    { dataIndex: 'title', title: '标题', width: 100, search: false },
    { dataIndex: 'targetLink', title: '跳转链接', width: 100, search: false },
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
      dataIndex: 'id',
      title: '操作',
      valueType: 'option',
      fixed: 'right',
      width: 100,
      render: (text, record, _, action) => {
        return [
          <LoadingConfigEditModal id={record.id} key="edit">
            <a>编辑</a>
          </LoadingConfigEditModal>,
          <Popconfirm
            key="delete"
            title={`确定删除吗？`}
            onConfirm={async () => {
              await api.loadingConfig.deleteById(record.id);
              message.success('删除成功');
              action.reload();
            }}
          >
            <a key="delete" className="text-red-500">
              删除
            </a>
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
            <LoadingConfigEditModal
              key="create"
              onFinished={() => actionRef.current?.reload()}
            >
              <Button type="primary">新建</Button>
            </LoadingConfigEditModal>,
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
