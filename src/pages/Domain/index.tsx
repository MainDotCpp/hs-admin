import api from '@/api';
import DomainEditModal from '@/pages/Domain/DomainEditModal';
import { ActionType, ProColumns, ProTable } from '@ant-design/pro-components';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, List, Popconfirm, Space, message } from 'antd';
import { useRef } from 'react';

import AutoLoading from '@/components/AutoLoading';
import Modal from '@/components/Modal';
import WebsiteTable from '@/components/WebsiteTable';
import { Link } from '@@/exports';
import { useAccess } from '@@/plugin-access';

function DomainLibModal({ onReceive }: { onReceive?: () => void }) {
  return (
    <Modal
      onOk={onReceive}
      title="域名库"
      footer={false}
      request={async () => api.domain.list({ queryDTO: { ownerId: 0 } })}
      trigger={
        <Button shape="round" size="small" type="dashed">
          域名库
        </Button>
      }
    >
      {(data, action) => (
        <List
          rowKey="id"
          dataSource={data}
          renderItem={(item) => (
            <List.Item
              actions={[
                <AutoLoading
                  callback={async () => {
                    await api.domain.receive({ id: item.id!! });
                    message.success('领取成功');
                    action.refresh();
                    onReceive?.();
                  }}
                >
                  {(loading, call) => (
                    <Button loading={loading} onClick={call}>
                      领取
                    </Button>
                  )}
                </AutoLoading>,
              ]}
            >
              <List.Item.Meta
                title={item.domain}
                description={item.serverName}
              />
            </List.Item>
          )}
        />
      )}
    </Modal>
  );
}

export default function Page() {
  const access = useAccess();
  const actionRef = useRef<ActionType>();
  const getTableData = async (params: any) => {
    return api.domain.page(params);
  };

  /**
   * 开启作为短链域名
   * @param id 域名ID
   */
  const openProxyShortlink = async (id: number) => {
    await api.domain.save({ id });
    message.success('开启成功');
    actionRef.current?.reload();
  };

  const columns: ProColumns<API.DomainDTO>[] = [
    { dataIndex: 'id', title: 'ID', search: false, hidden: true },
    { dataIndex: 'serverName', title: '服务器', width: 100, search: false },
    { dataIndex: 'domain', title: '域名', width: 100, search: false },

    {
      dataIndex: 'status',
      title: '状态',
      width: 100,
      search: false,
      valueEnum: {
        UNUSED: { text: '未使用', status: 'Default' },
        USED: { text: '已使用', status: 'Success' },
      },
    },
    {
      dataIndex: 'ownerNickname',
      title: '拥有人',
      width: 100,
      search: false,
    },
    {
      dataIndex: 'id',
      title: '操作',
      valueType: 'option',
      fixed: 'right',
      width: 100,
      render: (_text, record, _, action) => {
        return [
          access.DOMAIN__EDIT && (
            <DomainEditModal
              id={record.id}
              key="edit"
              onFinished={() => actionRef.current?.reload()}
            >
              <a>编辑</a>
            </DomainEditModal>
          ),
          access.DOMAIN__EDIT && (
            <DomainEditModal
              id={record.id}
              key="edit"
              onFinished={() => actionRef.current?.reload()}
            >
              <a>配置</a>
            </DomainEditModal>
          ),
          <a
            key="depoly"
            onClick={async () => {
              message.success('部署中，请稍后');
              await api.domain.deploy({ id: record.id!! });
              message.success('部署成功');
            }}
          >
            部署
          </a>,
          access.DOMAIN__DELETE && (
            <Popconfirm
              key="delete"
              title={`确定删除吗？`}
              onConfirm={async () => {
                await api.domain.deleteById({ id: record.id!! });
                message.success('删除成功');
                action?.reload();
              }}
            >
              <a key="delete" style={{ color: 'red' }}>
                删除
              </a>
            </Popconfirm>
          ),
        ];
      },
    },
  ];
  return (
    <PageContainer
      extra={
        <Space>
          <DomainLibModal onReceive={() => actionRef.current?.reload()} />
          <Link to="/resource/landing">
            <Button shape="round" size="small" type="dashed">
              网站库
            </Button>
          </Link>
        </Space>
      }
    >
      <ProTable<API.DomainDTO>
        rowKey="id"
        search={false}
        actionRef={actionRef}
        expandable={{
          expandedRowRender: (record) => <WebsiteTable domain={record} />,
        }}
        toolbar={{
          actions: [
            access.DOMAIN__EDIT && (
              <DomainEditModal
                key="create"
                onFinished={() => actionRef.current?.reload()}
              >
                <Button type="primary">新建</Button>
              </DomainEditModal>
            ),
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
