import { defineConfig } from '@umijs/max';
import * as process from 'process';

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
    },
  },
  routes: [
    {
      path: '/',
      redirect: '/shortlink',
    },
    {
      name: '斗篷管理',
      icon: 'LinkOutlined',
      hideInMenu: process.env.NODE_ENV === 'production',
      path: '/cloak',
      component: './CloakConfig',
    },
    {
      name: '短链管理',
      icon: 'LinkOutlined',
      path: '/shortlink',
      component: './ShortLink',
    },
    {
      name: '斗篷日志',
      icon: 'ClockCircleOutlined',
      path: '/cloakLog',
      component: './CloakLog',
    },
    {
      name: '测试 ',
      icon: 'LinkOutlined',
      hideInMenu: process.env.NODE_ENV === 'production',
      path: '/demo',
      component: './Demo',
    },
  ],
  npmClient: 'pnpm',
});

