import CommodityTable from '@/components/Commodity/CommodityTable';
import { PageContainer } from '@ant-design/pro-layout';

export default function CommodityPage() {
  return (
    <PageContainer
      subTitle={
        <>
          <div>
            地址:{' '}
            <a href="https://danyka62.xyz/" target="_blank">
              https://danyka62.xyz
            </a>
          </div>
        </>
      }
    >
      <CommodityTable />
    </PageContainer>
  );
}
