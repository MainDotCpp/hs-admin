// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 删除短链接配置 POST /shortlink/deleteById */
export async function deleteById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delete4Params,
  options?: { [key: string]: any },
) {
  return request<boolean>(`/api/shortlink/deleteById`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据ID获取短链接配置 GET /shortlink/getById */
export async function getById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.get4Params,
  options?: { [key: string]: any },
) {
  return request<API.ShortLinkConfig>(`/api/shortlink/getById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据KEY获取短链接 GET /shortlink/getByKey */
export async function getByKey(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getByKeyParams,
  options?: { [key: string]: any },
) {
  return request<API.ShortLinkConfig>(`/api/shortlink/getByKey`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分页查询短链接配置 GET /shortlink/page */
export async function page(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.page4Params,
  options?: { [key: string]: any },
) {
  return request<API.PageDTOShortLinkConfig>(`/api/shortlink/page`, {
    method: 'GET',
    params: {
      ...params,
      pageDTO: undefined,
      ...params['pageDTO'],
    },
    ...(options || {}),
  });
}

/** 保存短链接配置 POST /shortlink/save */
export async function save(body: API.ShortLinkConfig, options?: { [key: string]: any }) {
  return request<API.ShortLinkConfig>(`/api/shortlink/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
