import { Outlet } from 'umi';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient({});
const Layout = () => {
  return <>
    <QueryClientProvider client={client}>
      <Outlet />
      {/*<ReactQueryDevtools initialIsOpen={false} />*/}
    </QueryClientProvider>
  </>;
};

export default Layout;