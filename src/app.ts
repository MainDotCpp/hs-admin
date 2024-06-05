// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
import { RequestConfig } from '@@/plugin-request/request';

export async function getInitialState(): Promise<{ name: string }> {
  return { name: '短链平台' };
}

export const layout = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
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
        }
      },
    } as RequestConfig,
  };
};
