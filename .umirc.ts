import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '短链平台',
  },
  proxy: {
    '/': {
      'target': 'https://a2site.xyz/',
      'changeOrigin': true,
    },
  },
  routes: [
    {
      path: '/',
      redirect: '/short-link',
    },
    {
      name: '短链列表',
      path: '/short-link',
      component: './Home',
    },
    {
      name: '编辑配置',
      hideInMenu: true,
      path: '/edit/:id',
      component: './Edit',
    },
    {
      name: '编辑配置',
      hideInMenu: true,
      path: '/log/:id',
      component: './VisitLog',
    },
  ],
  npmClient: 'pnpm',
});

