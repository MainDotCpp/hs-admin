import LandingCard from '@/components/Landing/LandingCard';
import { useLandingListQuery } from '@/querys/landingQuery';
import { Spin } from 'antd';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;
type LandingWallProps = {
  mode?: 'select';
  onSelect?: (id: number) => void;
};
const LandingWall = (props: LandingWallProps) => {
  const {
    data: landingList,
    isLoading: fetchListLoading,
    refetch: refetchList,
  } = useLandingListQuery();

  if (fetchListLoading) {
    return <Spin />;
  }
  return (
    <Wrapper>
      {landingList?.map((landing) => (
        <LandingCard
          landing={landing}
          onSelect={
            props.mode === 'select' &&
            ((id) => {
              props.onSelect?.(id);
            })
          }
        />
      ))}
    </Wrapper>
  );
};

export default LandingWall;
