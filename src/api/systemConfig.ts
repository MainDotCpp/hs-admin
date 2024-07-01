// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 通过ID删除系统设置 POST /systemConfig/deleteById */
export async function deleteById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delete2Params,
  options?: { [key: string]: any },
) {
  return request<boolean>(`/api/systemConfig/deleteById`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据ID获取系统设置 GET /systemConfig/getById */
export async function getById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.get2Params,
  options?: { [key: string]: any },
) {
  return request<API.SystemConfigDTO>(`/api/systemConfig/getById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 系统设置列表 GET /systemConfig/list */
export async function list(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.list2Params,
  options?: { [key: string]: any },
) {
  return request<API.SystemConfigDTO[]>(`/api/systemConfig/list`, {
    method: 'GET',
    params: {
      ...params,
      queryDTO: undefined,
      ...params['queryDTO'],
    },
    ...(options || {}),
  });
}

/** 分页查询系统设置 GET /systemConfig/page */
export async function page(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.page2Params,
  options?: { [key: string]: any },
) {
  return request<API.PageDTOSystemConfigDTO>(`/api/systemConfig/page`, {
    method: 'GET',
    params: {
      ...params,
      queryDTO: undefined,
      ...params['queryDTO'],
    },
    ...(options || {}),
  });
}

/** 保存系统设置 POST /systemConfig/save */
export async function save(body: API.SystemConfigDTO, options?: { [key: string]: any }) {
  return request<API.SystemConfigDTO>(`/api/systemConfig/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
