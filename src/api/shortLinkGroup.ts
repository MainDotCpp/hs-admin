// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 通过ID删除短链接组 POST /shortLinkGroup/deleteById */
export async function deleteById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delete5Params,
  options?: { [key: string]: any },
) {
  return request<boolean>(`/api/shortLinkGroup/deleteById`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据ID获取短链接组 GET /shortLinkGroup/getById */
export async function getById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.get5Params,
  options?: { [key: string]: any },
) {
  return request<API.ShortLinkGroup>(`/api/shortLinkGroup/getById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 短链接组列表 GET /shortLinkGroup/list */
export async function list(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.list4Params,
  options?: { [key: string]: any },
) {
  return request<API.ShortLinkGroup[]>(`/api/shortLinkGroup/list`, {
    method: 'GET',
    params: {
      ...params,
      queryDTO: undefined,
      ...params['queryDTO'],
    },
    ...(options || {}),
  });
}

/** 分页查询短链接组 GET /shortLinkGroup/page */
export async function page(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.page5Params,
  options?: { [key: string]: any },
) {
  return request<API.PageDTOShortLinkGroup>(`/api/shortLinkGroup/page`, {
    method: 'GET',
    params: {
      ...params,
      queryDTO: undefined,
      ...params['queryDTO'],
    },
    ...(options || {}),
  });
}

/** 保存短链接组 POST /shortLinkGroup/save */
export async function save(body: API.ShortLinkGroup, options?: { [key: string]: any }) {
  return request<API.ShortLinkGroup>(`/api/shortLinkGroup/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
