// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 通过ID删除工单 POST /order/deleteById */
export async function deleteById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delete9Params,
  options?: { [key: string]: any },
) {
  return request<boolean>(`/api/order/deleteById`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据ID获取工单 GET /order/getById */
export async function getById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.get9Params,
  options?: { [key: string]: any },
) {
  return request<API.OrderDTO>(`/api/order/getById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 工单列表 GET /order/list */
export async function list(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.list8Params,
  options?: { [key: string]: any },
) {
  return request<API.OrderDTO[]>(`/api/order/list`, {
    method: 'GET',
    params: {
      ...params,
      queryDTO: undefined,
      ...params['queryDTO'],
    },
    ...(options || {}),
  });
}

/** 分页查询工单 GET /order/page */
export async function page(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.page9Params,
  options?: { [key: string]: any },
) {
  return request<API.PageDTOOrderDTO>(`/api/order/page`, {
    method: 'GET',
    params: {
      ...params,
      queryDTO: undefined,
      ...params['queryDTO'],
    },
    ...(options || {}),
  });
}

/** 保存工单 POST /order/save */
export async function save(body: API.OrderDTO, options?: { [key: string]: any }) {
  return request<API.OrderDTO>(`/api/order/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
