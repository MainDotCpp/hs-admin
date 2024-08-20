import React from 'react';
import { Outlet } from 'umi';
import { QueryClient, QueryClientProvider } from 'react-query';
import styled from 'styled-components';
import { Helmet } from '@@/exports';

const LayoutWrapper = styled.div`
    @unocss;
    font-family: "Noto Sans SC", sans-serif !important;
    font-optical-sizing: auto;
    font-style: normal;
`;

const client = new QueryClient({});
const Layout = () => {
  return <LayoutWrapper>
    <QueryClientProvider client={client}>
      <Outlet />
      {/*<ReactQueryDevtools initialIsOpen={false} />*/}
    </QueryClientProvider>
  </LayoutWrapper>;
};

export default Layout;