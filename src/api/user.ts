// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 通过ID删除用户 POST /user/deleteById */
export async function deleteById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteByIdParams,
  options?: { [key: string]: any },
) {
  return request<boolean>(`/api/user/deleteById`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据ID获取用户 GET /user/getById */
export async function getById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.UserDto>(`/api/user/getById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取当前用户信息 GET /user/getUserinfo */
export async function getUserinfo(options?: { [key: string]: any }) {
  return request<API.Userinfo>(`/api/user/getUserinfo`, {
    method: 'GET',
    ...(options || {}),
  });
}

/** 用户列表 GET /user/list */
export async function list(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listParams,
  options?: { [key: string]: any },
) {
  return request<API.UserDto[]>(`/api/user/list`, {
    method: 'GET',
    params: {
      ...params,
      queryDTO: undefined,
      ...params['queryDTO'],
    },
    ...(options || {}),
  });
}

/** 分页查询用户 GET /user/page */
export async function page(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.pageParams,
  options?: { [key: string]: any },
) {
  return request<API.PageDTOUserDto>(`/api/user/page`, {
    method: 'GET',
    params: {
      ...params,
      queryDTO: undefined,
      ...params['queryDTO'],
    },
    ...(options || {}),
  });
}

/** 保存用户 POST /user/save */
export async function save(body: API.UserDto, options?: { [key: string]: any }) {
  return request<API.UserDto>(`/api/user/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 设置用户角色 POST /user/setRoles */
export async function setRoles(body: API.SetRoleDTO, options?: { [key: string]: any }) {
  return request<boolean>(`/api/user/setRoles`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
