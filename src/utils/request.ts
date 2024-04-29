import { request as umiRequest } from '@umijs/max';

export const request = async <T>(url: any, params?: any, options?: any) => {
  const resp = await umiRequest(url, params, options);
  return resp.data as T;
};
