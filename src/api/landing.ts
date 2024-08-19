// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 通过ID删除落地页 POST /landing/deleteById */
export async function deleteById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delete13Params,
  options?: { [key: string]: any },
) {
  return request<boolean>(`/api/landing/deleteById`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据ID获取落地页 GET /landing/getById */
export async function getById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.get13Params,
  options?: { [key: string]: any },
) {
  return request<API.LandingDTO>(`/api/landing/getById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 落地页列表 GET /landing/list */
export async function list(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.list12Params,
  options?: { [key: string]: any },
) {
  return request<API.LandingDTO[]>(`/api/landing/list`, {
    method: 'GET',
    params: {
      ...params,
      queryDTO: undefined,
      ...params['queryDTO'],
    },
    ...(options || {}),
  });
}

/** 分页查询落地页 GET /landing/page */
export async function page(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.page13Params,
  options?: { [key: string]: any },
) {
  return request<API.PageDTOLandingDTO>(`/api/landing/page`, {
    method: 'GET',
    params: {
      ...params,
      queryDTO: undefined,
      ...params['queryDTO'],
    },
    ...(options || {}),
  });
}

/** 保存落地页 POST /landing/save */
export async function save(body: API.LandingDTO, options?: { [key: string]: any }) {
  return request<API.LandingDTO>(`/api/landing/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 通过URL保存落地页 POST /landing/saveByUrl */
export async function saveByUrl(body: API.SaveLandingByUrlDTO, options?: { [key: string]: any }) {
  return request<boolean>(`/api/landing/saveByUrl`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
