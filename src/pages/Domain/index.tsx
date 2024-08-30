import type { ActionType, ProColumns } from '@ant-design/pro-components'
import { ModalForm, ProFormText, ProFormTextArea, ProTable } from '@ant-design/pro-components'
import { PageContainer } from '@ant-design/pro-layout'
import { Button, List, Popconfirm, Space, message, Tag } from 'antd';
import { useRef } from 'react'

import { Link } from '@@/exports'
import { useAccess } from '@@/plugin-access'
import AutoLoading from '@/components/AutoLoading'
import Modal from '@/components/Modal'
import WebsiteTable from '@/components/WebsiteTable'
import api from '@/api'
import YModal from '@/components/Modal'

function DomainLibModal({ onReceive }: { onReceive?: () => void }) {
  return (
    <Modal
      onOk={onReceive}
      title="域名库"
      footer={false}
      request={async () => api.domain.list({ queryDTO: { ownerId: 0 } })}
      trigger={(
        <Button shape="round" size="small" type="dashed">
          域名库
        </Button>
      )}
    >
      {(data, action) => (
        <List
          rowKey="id"
          dataSource={data}
          renderItem={item => (
            <List.Item
              actions={[
                <AutoLoading
                  callback={async () => {
                    await api.domain.receive({ id: item.id! })
                    message.success('领取成功')
                    action.refresh()
                    onReceive?.()
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
  )
}

export default function Page() {
  const access = useAccess()
  const actionRef = useRef<ActionType>()
  const getTableData = async (params: any) => {
    return api.domain.page(params)
  }

  const columns: ProColumns<API.DomainDTO>[] = [
    { dataIndex: 'id', title: 'ID', search: false, hidden: true },
    { dataIndex: 'serverName', title: '服务器', width: 100, search: false },
    { dataIndex: 'domain', title: '域名', width: 100, search: false },
    {dataIndex:'ssl',title:'类型',width:100,search:false,render:(_,record) => record.ssl ?  <Tag color="blue">HTTPS</Tag> :<Tag>HTTP</Tag>},
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
    {dataIndex:'remark',title:'备注',width:200,search:false},
    {
      dataIndex: 'id',
      title: '操作',
      valueType: 'option',
      fixed: 'right',
      render: (_text, record, _, action) => {
        return [
          <Button type={'link'}
            key="depoly"
            onClick={async () => {
              message.success('部署中，请稍后')
              await api.domain.deploy({ id: record.id! })
              message.success('部署成功')
            }}
          >
            部署
          </Button>,
          <ModalForm key="remark-edit" trigger={<a>备注</a>} request={api.domain.getById} params={{id:record.id!!}} onFinish={async (data) => {
              await api.domain.save(data)
              message.success('修改成功')
              action?.reload()
              return true;
          }}>
            <ProFormText name="id" label="ID" hidden />
            <ProFormTextArea name="remark" label="备注" />
          </ModalForm>,
          <Button type={'link'} ghost  key={'ssl'} onClick={async () => {
            message.loading({
              content: '申请中，请稍后',
              key: 'ssl',
              duration: 0,
            })
            await api.domain.configSsl({ id: record.id! })
            message.success({
              content: '申请成功',
              key: 'ssl',
            })
            action?.reload()
          } }>申请证书</Button>,
          access.DOMAIN__DELETE && (
            <Popconfirm
              key="delete"
              title="确定删除吗？"
              onConfirm={async () => {
                await api.domain.deleteById({ id: record.id! })
                message.success('删除成功')
                action?.reload()
              }}
            >
              <Button type={'link'} color={'red'} key="delete" >
                删除
              </Button>
            </Popconfirm>
          ),
        ]
      },
    },
  ]
  return (
    <PageContainer
      extra={(
        <Space>
          <DomainLibModal onReceive={() => actionRef.current?.reload()} />
          <Link to="/resource/landing">
            <Button shape="round" size="small" type="dashed">
              网站库
            </Button>
          </Link>
        </Space>
      )}
    >
      <ProTable<API.DomainDTO>
        rowKey="id"
        search={false}
        actionRef={actionRef}
        expandable={{
          expandedRowRender: record => <WebsiteTable domain={record} />,
        }}
        size="small"
        scroll={{ x: 1000 }}
        columns={columns}
        request={getTableData}
      >
      </ProTable>
    </PageContainer>
  )
}
