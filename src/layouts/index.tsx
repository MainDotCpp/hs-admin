import { Outlet } from 'umi';
import { QueryClient, QueryClientProvider, useQueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const client = new QueryClient({});
const Layout = () => {
  return <>
    <QueryClientProvider client={client}>
      <Outlet />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </>;
};

export default Layout;