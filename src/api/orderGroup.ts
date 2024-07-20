// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 通过ID删除工单组 POST /orderGroup/deleteById */
export async function deleteById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delete9Params,
  options?: { [key: string]: any },
) {
  return request<boolean>(`/api/orderGroup/deleteById`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据ID获取工单组 GET /orderGroup/getById */
export async function getById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.get9Params,
  options?: { [key: string]: any },
) {
  return request<API.OrderGroupDTO>(`/api/orderGroup/getById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 工单组列表 GET /orderGroup/list */
export async function list(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.list8Params,
  options?: { [key: string]: any },
) {
  return request<API.OrderGroupDTO[]>(`/api/orderGroup/list`, {
    method: 'GET',
    params: {
      ...params,
      queryDTO: undefined,
      ...params['queryDTO'],
    },
    ...(options || {}),
  });
}

/** 分页查询工单组 GET /orderGroup/page */
export async function page(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.page9Params,
  options?: { [key: string]: any },
) {
  return request<API.PageDTOOrderGroupDTO>(`/api/orderGroup/page`, {
    method: 'GET',
    params: {
      ...params,
      queryDTO: undefined,
      ...params['queryDTO'],
    },
    ...(options || {}),
  });
}

/** 保存工单组 POST /orderGroup/save */
export async function save(body: API.OrderGroupDTO, options?: { [key: string]: any }) {
  return request<API.OrderGroupDTO>(`/api/orderGroup/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
