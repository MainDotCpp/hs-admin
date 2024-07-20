// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 通过ID删除部门 POST /dept/deleteById */
export async function deleteById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delete15Params,
  options?: { [key: string]: any },
) {
  return request<boolean>(`/api/dept/deleteById`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据ID获取部门 GET /dept/getById */
export async function getById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.get15Params,
  options?: { [key: string]: any },
) {
  return request<API.Dept>(`/api/dept/getById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取部门树 GET /dept/getDeptTree */
export async function getDeptTree(options?: { [key: string]: any }) {
  return request<{
    name?: { empty?: boolean };
    id?: string;
    parentId?: string;
    config?: API.TreeNodeConfig;
    weight?: Record<string, any>;
    empty?: boolean;
  }>(`/api/dept/getDeptTree`, {
    method: 'GET',
    ...(options || {}),
  });
}

/** 部门列表 GET /dept/list */
export async function list(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.list14Params,
  options?: { [key: string]: any },
) {
  return request<API.Dept[]>(`/api/dept/list`, {
    method: 'GET',
    params: {
      ...params,
      queryDTO: undefined,
      ...params['queryDTO'],
    },
    ...(options || {}),
  });
}

/** 分页查询部门 GET /dept/page */
export async function page(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.page15Params,
  options?: { [key: string]: any },
) {
  return request<API.PageDTODept>(`/api/dept/page`, {
    method: 'GET',
    params: {
      ...params,
      queryDTO: undefined,
      ...params['queryDTO'],
    },
    ...(options || {}),
  });
}

/** 保存部门 POST /dept/save */
export async function save(body: API.Dept, options?: { [key: string]: any }) {
  return request<API.Dept>(`/api/dept/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
