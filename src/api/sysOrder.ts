// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 通过ID删除系统订单 POST /sysOrder/deleteById */
export async function deleteById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delete3Params,
  options?: { [key: string]: any },
) {
  return request<boolean>(`/api/sysOrder/deleteById`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据ID获取系统订单 GET /sysOrder/getById */
export async function getById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.get3Params,
  options?: { [key: string]: any },
) {
  return request<API.SysOrderDTO>(`/api/sysOrder/getById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 系统订单列表 GET /sysOrder/list */
export async function list(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.list3Params,
  options?: { [key: string]: any },
) {
  return request<API.SysOrderDTO[]>(`/api/sysOrder/list`, {
    method: 'GET',
    params: {
      ...params,
      queryDTO: undefined,
      ...params['queryDTO'],
    },
    ...(options || {}),
  });
}

/** 分页查询系统订单 GET /sysOrder/page */
export async function page(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.page3Params,
  options?: { [key: string]: any },
) {
  return request<API.PageDTOSysOrderDTO>(`/api/sysOrder/page`, {
    method: 'GET',
    params: {
      ...params,
      queryDTO: undefined,
      ...params['queryDTO'],
    },
    ...(options || {}),
  });
}

/** 支付回调  GET /sysOrder/payCallback */
export async function payCallback(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.payCallbackParams,
  options?: { [key: string]: any },
) {
  return request<string>(`/api/sysOrder/payCallback`, {
    method: 'GET',
    params: {
      ...params,
      notifyDTO: undefined,
      ...params['notifyDTO'],
    },
    ...(options || {}),
  });
}

/** 支付回调  PUT /sysOrder/payCallback */
export async function payCallback2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.payCallback3Params,
  options?: { [key: string]: any },
) {
  return request<string>(`/api/sysOrder/payCallback`, {
    method: 'PUT',
    params: {
      ...params,
      notifyDTO: undefined,
      ...params['notifyDTO'],
    },
    ...(options || {}),
  });
}

/** 支付回调  POST /sysOrder/payCallback */
export async function payCallback3(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.payCallback2Params,
  options?: { [key: string]: any },
) {
  return request<string>(`/api/sysOrder/payCallback`, {
    method: 'POST',
    params: {
      ...params,
      notifyDTO: undefined,
      ...params['notifyDTO'],
    },
    ...(options || {}),
  });
}

/** 支付回调  DELETE /sysOrder/payCallback */
export async function payCallback4(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.payCallback5Params,
  options?: { [key: string]: any },
) {
  return request<string>(`/api/sysOrder/payCallback`, {
    method: 'DELETE',
    params: {
      ...params,
      notifyDTO: undefined,
      ...params['notifyDTO'],
    },
    ...(options || {}),
  });
}

/** 支付回调  PATCH /sysOrder/payCallback */
export async function payCallback5(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.payCallback4Params,
  options?: { [key: string]: any },
) {
  return request<string>(`/api/sysOrder/payCallback`, {
    method: 'PATCH',
    params: {
      ...params,
      notifyDTO: undefined,
      ...params['notifyDTO'],
    },
    ...(options || {}),
  });
}

/** 保存系统订单 POST /sysOrder/save */
export async function save(body: API.SysOrderDTO, options?: { [key: string]: any }) {
  return request<API.SysOrderDTO>(`/api/sysOrder/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
