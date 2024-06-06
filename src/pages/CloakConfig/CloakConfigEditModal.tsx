import { ModalForm, ProFormDependency, ProFormSelect, ProFormSwitch, ProFormText } from '@ant-design/pro-form';
import React from 'react';
import api from '@/api';
import { message, Tabs } from 'antd';
import { countriesGroup } from '@/constants/countries';


const TabTitle = ({ title, enable }) => {
  return <div>
    <span>{title}</span>
    {enable && <span style={{ color: 'green' }}> ✔</span>}
    {!enable && <span style={{ color: 'gray' }}> ✖</span>}
  </div>;
};
type CloakConfigEditModalProps = {
  id?: string;
  children?: React.ReactNode;
  onFinished?: () => void;
}
const CloakConfigEditModal = (props: CloakConfigEditModalProps) => {
  const onFinish = async (formData: any) => {
    await api.cloakConfig.save(formData);
    message.success('保存成功');
    props.onFinished?.();
    return true;
  };
  return <ModalForm
    width="80%"
    request={async () => {
      if (!props.id) return {};
      let config = await api.cloakConfig.getById({ id: props.id });
      return {
        ...config,
        allowRegion: config.allowRegion?.split(','),
      };
    }}
    modalProps={{
      destroyOnClose: true,
    }}
    trigger={props.children}
    onFinish={onFinish}

  >
    <ProFormDependency
      name={['enableRegionDetection', 'enableSpiderDetection', 'enableLanguageDetection', 'enableProxyDetection', 'enableUaDetection', 'useCloakProvider']}>
      {({
          enableRegionDetection,
          enableSpiderDetection,
          enableLanguageDetection,
          enableProxyDetection,
          enableUaDetection,
          useCloakProvider,
        }) => <Tabs>
        <Tabs.TabPane key="1" tab="基本配置">
          <ProFormText name="id" label="ID" hidden />
          <ProFormText name="name" label="配置名称" rules={[{ required: true }]} />
          <ProFormSwitch name="enableBlacklistIpDetection" label="开启黑名单检测" hidden />
          <ProFormSwitch name="enableBlacklistIpCollection" label="开启黑名单检测" hidden />
        </Tabs.TabPane>
        <Tabs.TabPane key="2" tab={<TabTitle title="地区检测" enable={enableRegionDetection} />}>
          <ProFormSwitch name="enableRegionDetection" label="启用地区检测" />
          {enableRegionDetection &&
            <ProFormSelect
              mode="multiple"
              transform={(value) => value.join(',')}
              showSearch name="allowRegion" label="允许地区" rules={[{ required: true }]}
              options={countriesGroup} />}
        </Tabs.TabPane>
        <Tabs.TabPane key="3" tab={<TabTitle title="爬虫检测" enable={enableSpiderDetection} />}>
          <ProFormSwitch name="enableSpiderDetection" label="启用爬虫检测" />
        </Tabs.TabPane>
        <Tabs.TabPane key="4" tab={<TabTitle title="访客语言检测" enable={enableLanguageDetection} />}>
          <ProFormSwitch name="enableLanguageDetection" label="启用语言检测" />
        </Tabs.TabPane>
        <Tabs.TabPane key="5" tab={<TabTitle title="代理检测" enable={enableProxyDetection} />}>
          <ProFormSwitch name="enableProxyDetection" label="启用代理检测" />
        </Tabs.TabPane>

        <Tabs.TabPane key="6" tab={<TabTitle title="客户端检测" enable={enableUaDetection} />}>
          <ProFormSwitch name="enableUaDetection" label="启用客户端检测" />
        </Tabs.TabPane>
        <Tabs.TabPane key="7" tab={<TabTitle title="第三方斗篷检测" enable={useCloakProvider} />}>
          <ProFormSwitch name="useCloakProvider" label="启用第三方斗篷检测" />
          {useCloakProvider &&
            <>
              <ProFormSelect name="cloakProvider"
                             rules={[{ required: true }]}
                             label="提供商"
                             valueEnum={{
                               SHENG_DUN: '圣盾',
                             }} />
              <ProFormText name="cloakProviderApiUrl" label="API" rules={[{ required: true }]} />
              <ProFormText.Password name="cloakProviderApiSecret" label="密钥" rules={[{ required: true }]} />
            </>
          }
        </Tabs.TabPane>

      </Tabs>}
    </ProFormDependency>

  </ModalForm>;
};

export default CloakConfigEditModal;