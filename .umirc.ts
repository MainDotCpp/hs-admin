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
      target: 'http://localhost:8888/',
      // 'target': 'https://console.d-l.ink/',
      changeOrigin: true,
    },
  },
  routes: [
    {
      path: '/',
      redirect: '/shortlink',
    },
    {
      name: '斗篷管理',
      icon: 'SafetyCertificateOutlined',
      access: 'CLOAK__VIEW',
      path: '/cloak',
      component: './CloakConfig',
    },
    {
      name: '短链管理',
      icon: 'LinkOutlined',
      access: 'SHORT_LINK__VIEW',
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
      name: '落地页',
      icon: 'ClockCircleOutlined',
      path: '/loading',
      component: './LoadingConfig',
    },
    {
      name: '测试 ',
      icon: 'LinkOutlined',
      hideInMenu: process.env.NODE_ENV === 'production',
      path: '/demo',
      component: './Demo',
    },
    {
      name: '资源管理',
      icon: 'ClockCircleOutlined',
      path: '/resource',
      routes: [
        {
          name: '服务器',
          icon: 'ClockCircleOutlined',
          path: '/resource/server',
          access: 'SERVER__VIEW',
          component: './Server',
        },
        {
          name: '域名',
          icon: 'ClockCircleOutlined',
          path: '/resource/domain',
          access: 'DOMAIN__VIEW',
          component: './Domain',
        },
        {
          name: '落地页',
          icon: 'ClockCircleOutlined',
          path: '/resource/landing',
          access: 'LANDING__VIEW',
          component: './Landing',
        },
        {
          name: '工单',
          icon: 'ClockCircleOutlined',
          path: '/resource/order',
          access: 'ORDER__VIEW',
          component: './Order',
        },
      ],
    },
    {
      path: '/system',
      name: '系统设置',
      access: 'SETTING__VIEW',
      icon: 'SettingOutlined',
      routes: [
        {
          path: '/system/user',
          name: '用户管理',
          icon: 'UserOutlined',
          access: 'USER__VIEW',
          component: './User',
        },
        {
          path: '/system/role',
          name: '角色管理',
          icon: 'UserOutlined',
          access: 'ROLE__VIEW',
          component: './Role',
        },
        {
          path: '/system/dept',
          name: '部门管理',
          icon: 'UserOutlined',
          access: 'ROLE__VIEW',
          component: './Dept',
        },
      ],
    },
    {
      path: '/login',
      layout: false,
      hideInMenu: true,
      component: './Login',
    },
  ],
  npmClient: 'pnpm',
});
