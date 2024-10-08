// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 通过ID删除黑名单 ip POST /blacklistIp/deleteById */
export async function deleteById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delete22Params,
  options?: { [key: string]: any },
) {
  return request<boolean>(`/api/blacklistIp/deleteById`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取黑名单 ip GET /blacklistIp/getBlacklistIp */
export async function getBlacklistIp(options?: { [key: string]: any }) {
  return request<string>(`/api/blacklistIp/getBlacklistIp`, {
    method: 'GET',
    ...(options || {}),
  });
}

/** 根据ID获取黑名单 ip GET /blacklistIp/getById */
export async function getById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.get23Params,
  options?: { [key: string]: any },
) {
  return request<API.BlacklistIp>(`/api/blacklistIp/getById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 黑名单 ip列表 GET /blacklistIp/list */
export async function list(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.list21Params,
  options?: { [key: string]: any },
) {
  return request<API.BlacklistIp[]>(`/api/blacklistIp/list`, {
    method: 'GET',
    params: {
      ...params,
      queryDTO: undefined,
      ...params['queryDTO'],
    },
    ...(options || {}),
  });
}

/** 分页查询黑名单 ip GET /blacklistIp/page */
export async function page(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.page23Params,
  options?: { [key: string]: any },
) {
  return request<API.PageDTOBlacklistIp>(`/api/blacklistIp/page`, {
    method: 'GET',
    params: {
      ...params,
      queryDTO: undefined,
      ...params['queryDTO'],
    },
    ...(options || {}),
  });
}

/** 保存黑名单 ip POST /blacklistIp/save */
export async function save(body: API.BlacklistIp, options?: { [key: string]: any }) {
  return request<API.BlacklistIp>(`/api/blacklistIp/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 设置黑名单 ip POST /blacklistIp/setBlacklistIp */
export async function setBlacklistIp(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.setBlacklistIpParams,
  options?: { [key: string]: any },
) {
  return request<boolean>(`/api/blacklistIp/setBlacklistIp`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
