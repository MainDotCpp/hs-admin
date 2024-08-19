// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 通过ID删除落地页配置 POST /loadingConfig/deleteById */
export async function deleteById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delete11Params,
  options?: { [key: string]: any },
) {
  return request<boolean>(`/api/loadingConfig/deleteById`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据ID获取落地页配置 GET /loadingConfig/getById */
export async function getById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.get11Params,
  options?: { [key: string]: any },
) {
  return request<API.LoadingConfig>(`/api/loadingConfig/getById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据key获取落地页配置 GET /loadingConfig/getByPath */
export async function getByPath(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getByKey1Params,
  options?: { [key: string]: any },
) {
  return request<API.LoadingConfig>(`/api/loadingConfig/getByPath`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 落地页配置列表 GET /loadingConfig/list */
export async function list(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.list10Params,
  options?: { [key: string]: any },
) {
  return request<API.LoadingConfig[]>(`/api/loadingConfig/list`, {
    method: 'GET',
    params: {
      ...params,
      queryDTO: undefined,
      ...params['queryDTO'],
    },
    ...(options || {}),
  });
}

/** 分页查询落地页配置 GET /loadingConfig/page */
export async function page(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.page11Params,
  options?: { [key: string]: any },
) {
  return request<API.PageDTOLoadingConfig>(`/api/loadingConfig/page`, {
    method: 'GET',
    params: {
      ...params,
      queryDTO: undefined,
      ...params['queryDTO'],
    },
    ...(options || {}),
  });
}

/** 保存落地页配置 POST /loadingConfig/save */
export async function save(body: API.LoadingConfig, options?: { [key: string]: any }) {
  return request<API.LoadingConfig>(`/api/loadingConfig/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
