import api from '@/api';
import { Spin } from 'antd';
import { useQuery } from 'react-query';

const SystemUser = ({ id }: { id?: number }) => {
  const { data: userList, isLoading } = useQuery('systemUserList', async () =>
    api.user.listUserIdAndNickName(),
  );
  const user = userList?.find((user) => user.id === id);
  if (isLoading) return <Spin />;
  return <div>{user?.nickname}</div>;
};

export default SystemUser;
