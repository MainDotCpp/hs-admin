import OrderTable from '@/components/Order/OrderTable';
import { useSearchParams } from '@@/exports';
import { PageContainer } from '@ant-design/pro-layout';

export default function OrderPage() {
  const [params] = useSearchParams();
  return (
    <PageContainer title={params.get('groupName')}>
      <OrderTable
        orderGroupId={params.get('groupId')}
        orderGroupName={params.get('groupName')}
      />
    </PageContainer>
  );
}
