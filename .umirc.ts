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
      target: 'http://localhost:8888/',
      // target: 'https://console.d-l.ink/',
      changeOrigin: true,
    },
  },
  routes: [
    // ROUTES START(
    {
      path: '/login',
      layout: false,
      hideInMenu: true,
      component: './Login',
    },
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
      name: '网站',
      icon: 'AppstoreOutlined',
      path: '/site',
      access: 'DOMAIN__VIEW',
      component: './Domain',
    },
    {
      name: '在线商店',
      icon: 'ShopOutlined',
      path: '/store',
      access: 'COMMODITY__VIEW',
      component: './Commodity',
    },
    {
      name: '资源管理',
      icon: 'DatabaseOutlined',
      path: '/resource',
      routes: [
        {
          name: '网站库',
          icon: 'HddOutlined',
          path: '/resource/landing',
          access: 'LANDING__VIEW',
          component: './Landing',
        },
        {
          name: '工单组',
          icon: 'ClockCircleOutlined',
          path: '/resource/orderGroup',
          access: 'ORDER_GROUP__VIEW',
          component: './OrderGroup',
        },
        {
          name: '工单',
          hideInMenu: true,
          path: '/resource/orderGroup/order',
          access: 'ORDER__VIEW',
          component: './Order',
        },
        {
          name: '服务器',
          icon: 'ClockCircleOutlined',
          path: '/resource/server',
          access: 'SERVER__VIEW',
          component: './Server',
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
        {
          name: '系统订单',
          icon: 'ClockCircleOutlined',
          path: '/system/sysOrder',
          access: 'SYS_ORDER__VIEW',
          component: './SysOrder',
        },
      ],
    },

    // ROUTES END
  ],
  npmClient: 'yarn',
  plugins: [
    require.resolve('@umijs/plugins/dist/unocss'),
  ],
  unocss: {
    // 检测 className 的文件范围，若项目不包含 src 目录，可使用 `pages/**/*.tsx`
    watch: ['src/**/*.tsx'],
  },
});
