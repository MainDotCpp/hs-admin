// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 通过ID删除权限 POST /permission/deleteById */
export async function deleteById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.HttpResultBoolean>(`/api/permission/deleteById`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据ID获取权限 GET /permission/getById */
export async function getById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.HttpResultPermission>(`/api/permission/getById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 权限列表 GET /permission/list */
export async function list(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listParams,
  options?: { [key: string]: any },
) {
  return request<API.HttpResultListPermission>(`/api/permission/list`, {
    method: 'GET',
    params: {
      ...params,
      queryDTO: undefined,
      ...params['queryDTO'],
    },
    ...(options || {}),
  });
}

/** 分页查询权限 GET /permission/page */
export async function page(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.pageParams,
  options?: { [key: string]: any },
) {
  return request<API.HttpResultPageDTOPermission>(`/api/permission/page`, {
    method: 'GET',
    params: {
      ...params,
      queryDTO: undefined,
      ...params['queryDTO'],
    },
    ...(options || {}),
  });
}

/** 保存权限 POST /permission/save */
export async function save(body: API.Permission, options?: { [key: string]: any }) {
  return request<API.HttpResultPermission>(`/api/permission/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
