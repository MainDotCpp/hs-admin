import type { ActionType, ProColumns } from '@ant-design/pro-components'
import { ProTable } from '@ant-design/pro-components'
import { Button, Popconfirm, message } from 'antd'
import { useRef } from 'react'

import { useAccess } from '@@/plugin-access'
import DomainAccountEditModal from '@/components/DomainAccount/DomainAccountEditModal'
import api from '@/api'

export default function DomainAccountTable() {
  const access = useAccess()
  const actionRef = useRef<ActionType>()
  const columns: ProColumns<API.DomainAccountDTO>[] = [
    { dataIndex: 'id', title: 'ID', search: false, hidden: true },
    { dataIndex: ['name'], title: '名称', width: 100, search: false },
    { dataIndex: ['key'], title: 'key', width: 100, search: false },
    { dataIndex: ['secret'], title: 'secret', width: 100, search: false },
    {
      dataIndex: 'id',
      title: '操作',
      valueType: 'option',
      fixed: 'right',
      width: 100,
      render: (text, record, _, action) => {
        return [
          access.DOMAIN_ACCOUNT__EDIT && (
            <DomainAccountEditModal
              id={record.id}
              key="edit"
              onFinished={() => actionRef.current?.reload()}
            >
              <a>编辑</a>
            </DomainAccountEditModal>
          ),
          access.DOMAIN_ACCOUNT__DELETE && (
            <Popconfirm
              key="delete"
              title="确定删除吗？"
              onConfirm={async () => {
                await api.domainAccount.deleteById({ id: record.id })
                message.success('删除成功')
                action?.reload()
              }}
            >
              <a key="delete" className="text-red-500">删除</a>
            </Popconfirm>
          ),
        ]
      },
    },
  ]
  return (
    <ProTable<API.DomainAccountDTO>
      rowKey="id"
      search={false}
      actionRef={actionRef}
      toolbar={{
        actions: [
          access.DOMAIN_ACCOUNT__EDIT && (
            <DomainAccountEditModal
              key="create"
              onFinished={() => actionRef.current?.reload()}
            >
              <Button type="primary">新建域名账户</Button>
            </DomainAccountEditModal>
          ),
        ],
      }}
      size="small"
      scroll={{ x: 1000 }}
      columns={columns}
      request={api.domainAccount.page}
    >
    </ProTable>
  )
}
