import {
  ModalForm,
  ProFormRadio,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-form'
import { Segmented, message } from 'antd'
import React from 'react'
import { ProFormDependency, ProFormList, ProFormSegmented } from '@ant-design/pro-components'
import api from '@/api'

interface DomainEditModalProps {
  id?: number
  children?: React.ReactNode
  onFinished?: () => void
}
function DomainEditModal(props: DomainEditModalProps) {
  const onFinish = async (formData: any) => {
    await api.domain.save(formData)
    message.success('保存成功')
    props.onFinished?.()
    return true
  }

  const getInitialValues = async () => {
    return props.id
      ? await api.domain.getById({ id: props.id })
      : {
          status: 'UNUSED',
          source: 'MANUAL',
        }
  }
  return (
    <ModalForm
      title="添加域名"
      modalProps={{
        destroyOnClose: true,
      }}
      request={getInitialValues}
      params={{ id: props.id }}
      trigger={props.children}
      onFinish={onFinish}
    >
      <ProFormSegmented
        name="source"
        fieldProps={{
          block: true,
        }}
        valueEnum={{
          MANUAL: '手动添加',
          GODADDY: 'GODADDY',
        }}
      />
      <ProFormText name="id" label="ID" hidden />
      <ProFormDependency name={['source', 'accountId']}>
        {({ source, accountId }) => {
          if (source === 'MANUAL') {
            return (
              <>
                <ProFormText name="domain" label="域名" rules={[{ required: true }]} />
              </>
            )
          }
          if (source === 'GODADDY') {
            return (
              <>
                <ProFormSelect name="accountId" label="账号" request={api.domainAccount.list} fieldProps={{ fieldNames: { label: 'name', value: 'id' } }} />
                {accountId && <ProFormSelect name="domain" label="域名" request={api.domainAccount.domainList} fieldProps={{ fieldNames: { label: 'domain', value: 'domain' } }} dependencies={['accountId']} />}
              </>
            )
          }
          return <></>
        }}
      </ProFormDependency>
      <ProFormSelect
        name="ownerId"
        label="拥有人"
        request={api.user.list}
        fieldProps={{ fieldNames: { label: 'nickname', value: 'id' } }}
      />
      <ProFormSelect
        name="serverId"
        label="服务器"
        request={api.server.list}
        rules={[{ required: true }]}
        fieldProps={{ fieldNames: { label: 'name', value: 'id' } }}
      />
      <ProFormRadio.Group
        name="status"
        valueEnum={{
          UNUSED: '未使用',
          USED: '已使用',
        }}
      >
      </ProFormRadio.Group>
    </ModalForm>
  )
}

export default DomainEditModal
