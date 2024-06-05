import { request as umiRequest } from '@umijs/max';
import { message } from 'antd';

export const request = async <T>(url: any, params?: any, options?: any) => {
  const resp = await umiRequest(url, {
    ...params,
    headers: {
      'Access-Token': window.localStorage.getItem('accessToken'),
    },
  });
  // if (resp.code === 1004) {
  //   window.localStorage.removeItem('accessToken');
  //   window.location = '/login';
  // }
  if (resp.code !== 200) {
    message.error(resp.message);
    throw new Error(resp.message);
  }
  return resp.data as T;
};
