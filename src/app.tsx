// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
import api from '@/api';
import RightContent from '@/components/RightContext';
import { RuntimeConfig } from '@@/core/defineApp';
import { RequestConfig } from '@@/plugin-request/request';
import { Link } from '@umijs/max';

const initialState = {
  name: '短链平台22',
};

export async function getInitialState(): Promise<{ name: string }> {
  if (window.location.pathname === '/login') {
    return initialState;
  }
  try {
    let userinfo = await api.user.getUserinfo();
    return { ...initialState, userinfo };
  } catch (error) {
    window.localStorage.removeItem('accessToken');
    window.location = '/login';
  }
}

export const layout = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    logout: () => {
      return (window.location = '/login');
    },
    layout: 'mix',

    menuItemRender: (menuItemProps, defaultDom) => {
      // 支持二级菜单显示icon
      return (
        <Link to={menuItemProps.path}>
          <div style={{ display: 'flex' }}>
            {menuItemProps.pro_layout_parentKeys &&
              menuItemProps.pro_layout_parentKeys.length > 0 &&
              menuItemProps.icon}
            <span style={{ paddingRight: 8 }}>{defaultDom}</span>
          </div>
        </Link>
      );
    },

    rightRender: (initialState) => <RightContent initialState={initialState} />,
    menu: {
      locale: false,
    },
    request: {
      errorConfig: {
        errorHandler: (error) => {
          console.log('errorHandler');
          console.log(error);
        },
        errorThrower: (error) => {
          console.log('errorThrower');
          console.log(error);
        },
      },
    } as RequestConfig,
  } as RuntimeConfig;
};
