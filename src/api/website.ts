// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 检查站点斗篷 POST /website/check */
export async function check(body: API.WebsiteCloakCheckDTO, options?: { [key: string]: any }) {
  return request<API.CloakCheckResult>(`/api/website/check`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 通过ID删除网站 POST /website/deleteById */
export async function deleteById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteParams,
  options?: { [key: string]: any },
) {
  return request<boolean>(`/api/website/deleteById`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据ID获取网站 GET /website/getById */
export async function getById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getParams,
  options?: { [key: string]: any },
) {
  return request<API.WebsiteDTO>(`/api/website/getById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 网站列表 GET /website/list */
export async function list(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listParams,
  options?: { [key: string]: any },
) {
  return request<API.WebsiteDTO[]>(`/api/website/list`, {
    method: 'GET',
    params: {
      ...params,
      queryDTO: undefined,
      ...params['queryDTO'],
    },
    ...(options || {}),
  });
}

/** 分页查询网站 GET /website/page */
export async function page(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.pageParams,
  options?: { [key: string]: any },
) {
  return request<API.PageDTOWebsiteDTO>(`/api/website/page`, {
    method: 'GET',
    params: {
      ...params,
      queryDTO: undefined,
      ...params['queryDTO'],
    },
    ...(options || {}),
  });
}

/** 保存网站 POST /website/save */
export async function save(body: API.WebsiteDTO, options?: { [key: string]: any }) {
  return request<API.WebsiteDTO>(`/api/website/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
