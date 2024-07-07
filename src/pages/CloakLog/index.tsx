import CloakLogTable from '@/components/CloakLog/CloakLogTable';
import { useSearchParams } from '@@/exports';
import { ActionType } from '@ant-design/pro-components';
import { PageContainer } from '@ant-design/pro-layout';
import { useRef } from 'react';

export default function Page() {
  const actionRef = useRef<ActionType>();
  const [searchParams] = useSearchParams();

  return (
    <PageContainer>
      <CloakLogTable
        scene={searchParams.get('scene')}
        relatedId={searchParams.get('relatedId')}
      />
    </PageContainer>
  );
}
