import api from '@/api';
import LandingEditModal from '@/components/Landing/LandingEditModal';
import { useLandingListQuery } from '@/querys/landingQuery';
import { Button, message, Popconfirm } from 'antd';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 300px;
  background-color: white;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.3s;
    scale: 1.05;
  }

  .action {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.12);
    opacity: 0;

    &:hover {
      opacity: 1;
      transition: all 0.3s;
    }
  }

  .footer {
    display: grid;
    flex-grow: 0;
    grid-template-columns: 1fr;
    align-items: center;
    padding: 10px;

    .title {
      overflow: hidden;
      color: #333;
      font-weight: 500;
      font-size: 16px;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  .cover {
    flex-shrink: 0;
    width: 100%;
    height: auto;
    overflow: hidden;
    border: none;
    border-radius: 10px;

    // 隐藏滚动条

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .cover iframe {
    width: 100%;
  }
`;

type LandingCardProps = {
  landing: API.LandingDTO;
};
const LandingCard = ({ landing }: LandingCardProps) => {
  const {
    data: landingList,
    isLoading: fetchListLoading,
    refetch: refetchList,
  } = useLandingListQuery();
  return (
    <Wrapper>
      <div className="action">
        <Button
          type="link"
          onClick={() => {
            window.open(
              `https://console.d-l.ink/preview/${landing.uuid}`,
              '_blank',
            );
          }}
        >
          预览
        </Button>
        <LandingEditModal id={landing.id} onFinished={refetchList}>
          <Button type="link">编辑</Button>
        </LandingEditModal>

        <Popconfirm
          key="delete"
          title={`确定删除吗？`}
          onConfirm={async () => {
            await api.landing.deleteById({ id: landing.id });
            message.success('删除成功');
            refetchList().then();
          }}
        >
          <Button type="link" danger>
            删除
          </Button>
        </Popconfirm>
      </div>
      <div className="cover"></div>
      <div className="footer">
        <div className="title">{landing.name}</div>
      </div>
    </Wrapper>
  );
};

export default LandingCard;
