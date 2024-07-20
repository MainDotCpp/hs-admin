// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 通过ID删除域名 POST /domain/deleteById */
export async function deleteById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delete14Params,
  options?: { [key: string]: any },
) {
  return request<boolean>(`/api/domain/deleteById`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 部署域名 POST /domain/deploy */
export async function deploy(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deployParams,
  options?: { [key: string]: any },
) {
  return request<string>(`/api/domain/deploy`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取AGENT域名配置文件 GET /domain/getAgentConfig */
export async function getAgentConfig(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAgentConfigParams,
  options?: { [key: string]: any },
) {
  return request<API.DomainAgentConfig>(`/api/domain/getAgentConfig`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据ID获取域名 GET /domain/getById */
export async function getById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.get14Params,
  options?: { [key: string]: any },
) {
  return request<API.DomainDTO>(`/api/domain/getById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 域名列表 GET /domain/list */
export async function list(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.list13Params,
  options?: { [key: string]: any },
) {
  return request<API.DomainDTO[]>(`/api/domain/list`, {
    method: 'GET',
    params: {
      ...params,
      queryDTO: undefined,
      ...params['queryDTO'],
    },
    ...(options || {}),
  });
}

/** 分页查询域名 GET /domain/page */
export async function page(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.page14Params,
  options?: { [key: string]: any },
) {
  return request<API.PageDTODomainDTO>(`/api/domain/page`, {
    method: 'GET',
    params: {
      ...params,
      queryDTO: undefined,
      ...params['queryDTO'],
    },
    ...(options || {}),
  });
}

/** 领取域名 POST /domain/receive */
export async function receive(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.receiveParams,
  options?: { [key: string]: any },
) {
  return request<string>(`/api/domain/receive`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 保存域名 POST /domain/save */
export async function save(body: API.DomainDTO, options?: { [key: string]: any }) {
  return request<API.DomainDTO>(`/api/domain/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
