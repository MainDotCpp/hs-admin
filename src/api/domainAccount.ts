// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 通过ID删除域名账户 POST /domainAccount/deleteById */
export async function deleteById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delete14Params,
  options?: { [key: string]: any },
) {
  return request<boolean>(`/api/domainAccount/deleteById`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取域名账户列表 GET /domainAccount/domainList */
export async function domainList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.domainListParams,
  options?: { [key: string]: any },
) {
  return request<API.GoddyDomainDTO[]>(`/api/domainAccount/domainList`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据ID获取域名账户 GET /domainAccount/getById */
export async function getById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.get14Params,
  options?: { [key: string]: any },
) {
  return request<API.DomainAccountDTO>(`/api/domainAccount/getById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 域名账户列表 GET /domainAccount/list */
export async function list(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.list13Params,
  options?: { [key: string]: any },
) {
  return request<API.DomainAccountDTO[]>(`/api/domainAccount/list`, {
    method: 'GET',
    params: {
      ...params,
      queryDTO: undefined,
      ...params['queryDTO'],
    },
    ...(options || {}),
  });
}

/** 分页查询域名账户 GET /domainAccount/page */
export async function page(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.page14Params,
  options?: { [key: string]: any },
) {
  return request<API.PageDTODomainAccountDTO>(`/api/domainAccount/page`, {
    method: 'GET',
    params: {
      ...params,
      queryDTO: undefined,
      ...params['queryDTO'],
    },
    ...(options || {}),
  });
}

/** 保存域名账户 POST /domainAccount/save */
export async function save(body: API.DomainAccountDTO, options?: { [key: string]: any }) {
  return request<API.DomainAccountDTO>(`/api/domainAccount/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
