// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 通过ID删除斗篷配置  POST /cloakConfig/deleteById */
export async function deleteById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delete20Params,
  options?: { [key: string]: any },
) {
  return request<boolean>(`/api/cloakConfig/deleteById`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据ID获取斗篷配置  GET /cloakConfig/getById */
export async function getById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.get21Params,
  options?: { [key: string]: any },
) {
  return request<API.CloakConfig>(`/api/cloakConfig/getById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 斗篷配置列表 GET /cloakConfig/list */
export async function list(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.list19Params,
  options?: { [key: string]: any },
) {
  return request<API.CloakConfig[]>(`/api/cloakConfig/list`, {
    method: 'GET',
    params: {
      ...params,
      queryDTO: undefined,
      ...params['queryDTO'],
    },
    ...(options || {}),
  });
}

/** 分页查询斗篷配置  GET /cloakConfig/page */
export async function page(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.page21Params,
  options?: { [key: string]: any },
) {
  return request<API.PageDTOCloakConfig>(`/api/cloakConfig/page`, {
    method: 'GET',
    params: {
      ...params,
      queryDTO: undefined,
      ...params['queryDTO'],
    },
    ...(options || {}),
  });
}

/** 保存斗篷配置  POST /cloakConfig/save */
export async function save(body: API.CloakConfigUpdateDTO, options?: { [key: string]: any }) {
  return request<API.CloakConfig>(`/api/cloakConfig/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
