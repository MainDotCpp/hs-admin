// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 短链接口  GET /l/${param0} */
export async function l(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.lParams,
  options?: { [key: string]: any },
) {
  const { key: param0, ...queryParams } = params;
  return request<Record<string, any>>(`/api/l/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}
