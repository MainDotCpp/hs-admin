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
    background-color: rgba(255, 255, 255, 0.8);
    opacity: 0;

    &:hover {
      opacity: 1;
      backdrop-filter: blur(4px);
      transition: all 0.3s;
    }
  }

  .footer {
    position: absolute;
    bottom: 0;
    display: grid;
    flex-grow: 0;
    grid-template-columns: 1fr;
    align-items: center;
    width: 100%;
    padding: 10px;
    color: white;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(4px);

    .title {
      overflow: hidden;
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

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

type LandingCardProps = {
  landing: API.LandingDTO;
  onSelect?: (id: number) => void;
};
const LandingCard = ({ landing, onSelect }: LandingCardProps) => {
  const {
    data: landingList,
    isLoading: fetchListLoading,
    refetch: refetchList,
  } = useLandingListQuery();
  return (
    <Wrapper>
      <div className="action">
        {onSelect && (
          <Button
            type="link"
            onClick={() => {
              onSelect(landing.id!!);
            }}
          >
            选择
          </Button>
        )}
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
      <div className="cover">
        <img
          src={`https://console.d-l.ink/preview/${landing.uuid}.jpg`}
          alt=""
        />
      </div>
      <div className="footer">
        <div className="title">{landing.name}</div>
      </div>
    </Wrapper>
  );
};

export default LandingCard;
