import { PageContainer } from '@ant-design/pro-layout';
import { useGetCloakConfigById, useCloakConfigListQuery } from '@/querys/cloakConfigQuery';
import { Button } from 'antd';

const Demo = () => {
  const { data, mutateAsync } = useGetCloakConfigById('d21ea79d-3063-4028-acef-e143ff60557f');
  useCloakConfigListQuery({});
  return <PageContainer>
    <Button onClick={async () => {
      const res = await mutateAsync();
      console.log(res);
    }}>点击</Button>
  </PageContainer>;
};
export default Demo;