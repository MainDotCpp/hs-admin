import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '海狮管理后台',
  },
  proxy: {
    '/api': {
      'target': 'http://localhost:8888/',
      'changeOrigin': true,
      'pathRewrite': { '^/api': '' },
    },
  },
  routes: [
    {
      path: '/',
      redirect: '/shortlink',
    },
    {
      name: '短链管理',
      icon: 'LinkOutlined',
      path: '/shortlink',
      component: './ShortLink',
    },
    {
      name: '斗篷日志',
      icon: 'LinkOutlined',
      path: '/cloakLog',
      component: './CloakLog',
    },
  ],
  npmClient: 'pnpm',
});

