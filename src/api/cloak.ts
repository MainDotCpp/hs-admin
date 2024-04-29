// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 调用斗篷 POST /cloak/check/${param0} */
export async function check(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.checkParams,
  body: API.CloakCheckDTO,
  options?: { [key: string]: any },
) {
  const { key: param0, ...queryParams } = params;
  return request<API.HttpResult>(`/api/cloak/check/${param0}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
