import { Outlet } from 'umi';
import { QueryClient, QueryClientProvider } from 'react-query';
import styled from 'styled-components';
import { Helmet } from '@@/exports';

const LayoutWrapper = styled.div`
    font-family: "Noto Sans SC", sans-serif !important;
    font-optical-sizing: auto;
    font-style: normal;
`;

const client = new QueryClient({});
const Layout = () => {
  return <LayoutWrapper>
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@100..900&display=swap" rel="stylesheet" />
    </Helmet>
    <QueryClientProvider client={client}>
      <Outlet />
      {/*<ReactQueryDevtools initialIsOpen={false} />*/}
    </QueryClientProvider>
  </LayoutWrapper>;
};

export default Layout;