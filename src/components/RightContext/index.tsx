import styled from 'styled-components';
import { Avatar, Dropdown } from 'antd';
import api from '@/api';

const Wrapper = styled.div`
    width: 100%;
    display: grid;
`;

const RightContext = (
  { initialState }: { initialState: { userinfo?: API.Userinfo } },
) => {
  const { userinfo } = initialState;
  return (
    <>
      <Dropdown menu={{
        items: [
          { label: '个人中心', key: 'center', disabled: true },
          { label: '退出登录', key: 'logout' },
        ],
        onClick: ({ key }) => {
          if (key === 'logout') {
            api.auth.logout().then();
            window.location = '/login';
          }
        },
      }}>
        <Avatar style={{ cursor: 'pointer' }}>{userinfo?.nickname}</Avatar>
      </Dropdown>
    </>
  );
};

export default RightContext;