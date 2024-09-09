import { ModalForm, ProFormText } from '@ant-design/pro-form'
import { Alert, message } from 'antd'
import React from 'react'
import api from '@/api'

interface DomainAccountEditModalProps {
  id?: number
  children?: React.ReactNode
  onFinished?: () => void
}
function DomainAccountEditModal(props: DomainAccountEditModalProps) {
  const onFinish = async (formData: any) => {
    await api.domainAccount.save(formData)
    message.success('保存成功')
    props.onFinished?.()
    return true
  }

  const getInitialValues = async () => {
    let domainAccount: API.DomainAccountDTO = {}
    if (props.id) {
      domainAccount = await api.domainAccount.getById({ id: props.id })
    }
    return domainAccount
  }
  return (
    <ModalForm
      title={props.id ? '编辑域名账户' : '新建域名账户'}
      modalProps={{
        destroyOnClose: true,
      }}
      request={getInitialValues}
      params={{ id: props.id }}
      trigger={props.children}
      onFinish={onFinish}
    >
      <Alert
        className="mb-4"
        message={(
          <div>
            API账号密钥申请地址：
            <a href="https://developer.godaddy.com/keys" target="_blank">https://developer.godaddy.com/keys</a>
          </div>
        )}
        type="info"
        showIcon
      />
      <ProFormText name="id" label="ID" hidden />
      <ProFormText name="name" label="名称" rules={[{ required: true }]} />
      <ProFormText name="key" label="key" rules={[{ required: true }]} />
      <ProFormText name="secret" label="secret" rules={[{ required: true }]} />
    </ModalForm>
  )
}

export default DomainAccountEditModal
