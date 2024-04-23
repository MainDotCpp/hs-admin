import React from 'react';
import styles from './index.less';
import { useParams } from '@@/exports';
import { DefaultApi } from '@/services';
import {
  ProForm,
  ProFormGroup,
  ProFormSelect,
  ProFormSwitch,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-form';
import api from '@/services/api';
import { useModel, useNavigate } from '@umijs/max';
import { convertJoin } from '@/utils/format';
import { randomStr } from '@/utils/random';
import useFormInstance = ProForm.useFormInstance;
import useForm = ProForm.useForm;
import { Card, message } from 'antd';
import { PageContainer } from '@ant-design/pro-components';

export default function Page() {
  const params = useParams();
  const { geoList } = useModel('global');
  const navigate = useNavigate();
  const getSchemaById = async () => {
    if (params.id === '0') return {};
    const api = new DefaultApi();
    const schema = await api.schemaIdGet({
      id: params.id!!,
    });
    return schema.data;
  };
  const handleFinish = async (formData: any) => {
    await api.schemaSavePost({
      inlineObject: formData,
    });
    message.success('保存成功');
    navigate('/short-link');
    return true;
  };
  const [form] = useForm();
  return (
    <PageContainer>
      <Card className={styles.card}>
        <ProForm
          form={form}
          request={getSchemaById} onFinish={handleFinish}
          initialValues={{
            no: randomStr(5),
            allow_region: 'KR',
            allow_device: 'PC,Mobile,Pad',
          }}>
          <ProFormText name="id" label="id" hidden></ProFormText>
          <ProFormText
            rules={[{ required: true }]}
            name="no" label="编号" fieldProps={{
            suffix: <a onClick={() => {
              form.setFieldValue('no', randomStr(5));
            }}>随机</a>,
          }}></ProFormText>
          <ProFormSelect
            rules={[{ required: true }]}
            name="allow_region"
            label="允许访问的国家"
            options={geoList}
            mode="multiple"
            {...convertJoin}
            fieldProps={{
              fieldNames: {
                label: 'name',
                value: 'iso',
              },
            }}></ProFormSelect>
          <ProFormSelect
            disabled
            name="allow_device"
            label="允许访问的设备"
            mode="multiple"
            {...convertJoin}
            options={[
              { label: '电脑', value: 'PC' },
              { label: '手机', value: 'Mobile' },
              { label: '平板', value: 'Pad' },
            ]}
          ></ProFormSelect>
          <ProFormGroup>
            <ProFormSwitch disabled label="阻止黑名单IP库" name="ban_blacklist"></ProFormSwitch>
            <ProFormSwitch disabled label="阻止代理访问" name="ban_proxy"></ProFormSwitch>
            <ProFormSwitch disabled label="阻止空来源访问" name="ban_empty_referer"></ProFormSwitch>
          </ProFormGroup>
          <ProFormGroup >
            <ProFormSwitch disabled label="使用第三方Cloak" name="use_cloak"></ProFormSwitch>
            <ProFormSelect disabled label="第三方服务" name="cloak_servicea"></ProFormSelect>
            <ProFormText disabled label="app_id" name="cloak_app_id" ></ProFormText>
            <ProFormText disabled label="app_secret" name="cloak_app_secret"></ProFormText>
          </ProFormGroup>
          <ProFormText
            rules={[{ required: true }]}
            name="dest_link" label="跳转链接"></ProFormText>
          <ProFormTextArea label="备注" name="remark"></ProFormTextArea>
        </ProForm>
      </Card>
    </PageContainer>
  );
}
