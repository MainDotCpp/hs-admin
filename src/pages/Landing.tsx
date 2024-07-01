import api from '@/api';
import LandingWall from '@/components/Landing/LandingWall';
import { useLandingListQuery } from '@/querys/landingQuery';
import { ModalForm, ProFormSwitch, ProFormText } from '@ant-design/pro-form';
import { PageContainer } from '@ant-design/pro-layout';
import { Alert, Button, message } from 'antd';

export default function LandingPage() {
  const { refetch: refetchList } = useLandingListQuery();
  return (
    <PageContainer
      extra={
        <>
          <ModalForm
            title="下载落地页"
            trigger={
              <Button shape="round" size="small" type="dashed">
                下载落地页
              </Button>
            }
            onFinish={async (values) => {
              await api.landing.saveByUrl(values);
              message.success('下载成功');
              await refetchList();
              return true;
            }}
          >
            <Alert
              description={
                <div>
                  <div>
                    请在下方输入落地页链接地址，系统将自动下载并解析落地页内容。
                  </div>
                  <div>
                    动态页面或者需要代理的页面可能无法下载，请手动下载并上传或联系技术。
                  </div>
                </div>
              }
              type="warning"
              style={{ marginBottom: 24 }}
              closable
            />
            <ProFormText
              name="name"
              label="落地页名称"
              rules={[{ required: true }]}
            />
            <ProFormText
              name="url"
              label="链接地址"
              rules={[{ required: true }, { type: 'url' }]}
            />
            <ProFormSwitch name="isPublic" label="是否公开" />
          </ModalForm>
        </>
      }
    >
      <LandingWall />
    </PageContainer>
  );
}
