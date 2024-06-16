import api from '@/api';
import LandingWall from '@/components/Landing/LandingWall';
import { useLandingListQuery } from '@/querys/landingQuery';
import { ModalForm, ProFormText } from '@ant-design/pro-form';
import { PageContainer } from '@ant-design/pro-layout';
import { Button } from 'antd';

export default function LandingPage() {
  const { refetch: refetchList } = useLandingListQuery();
  return (
    <PageContainer
      content={
        <>
          <ModalForm
            trigger={<Button>下载落地页</Button>}
            onFinish={async (values) => {
              await api.landing.saveByUrl(values);
              await refetchList();
              return true;
            }}
          >
            <ProFormText
              name="url"
              label="链接地址"
              rules={[{ required: true }, { type: 'url' }]}
            />
          </ModalForm>
        </>
      }
    >
      <LandingWall />
    </PageContainer>
  );
}
