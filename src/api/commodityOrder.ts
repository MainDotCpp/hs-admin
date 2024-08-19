// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 通过ID删除商品订单 POST /commodityOrder/deleteById */
export async function deleteById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delete16Params,
  options?: { [key: string]: any },
) {
  return request<boolean>(`/api/commodityOrder/deleteById`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据ID获取商品订单 GET /commodityOrder/getById */
export async function getById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.get16Params,
  options?: { [key: string]: any },
) {
  return request<API.CommodityOrderDTO>(`/api/commodityOrder/getById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 商品订单列表 GET /commodityOrder/list */
export async function list(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.list15Params,
  options?: { [key: string]: any },
) {
  return request<API.CommodityOrderDTO[]>(`/api/commodityOrder/list`, {
    method: 'GET',
    params: {
      ...params,
      queryDTO: undefined,
      ...params['queryDTO'],
    },
    ...(options || {}),
  });
}

/** 分页查询商品订单 GET /commodityOrder/page */
export async function page(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.page16Params,
  options?: { [key: string]: any },
) {
  return request<API.PageDTOCommodityOrderDTO>(`/api/commodityOrder/page`, {
    method: 'GET',
    params: {
      ...params,
      queryDTO: undefined,
      ...params['queryDTO'],
    },
    ...(options || {}),
  });
}

/** 购买商品 POST /commodityOrder/pay */
export async function pay(body: API.CommodityOrderDTO, options?: { [key: string]: any }) {
  return request<API.CreateCommodityOrderResponse>(`/api/commodityOrder/pay`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询订单内容 POST /commodityOrder/queryOrder */
export async function queryOrder(body: API.CommodityOrderDTO, options?: { [key: string]: any }) {
  return request<API.CommodityOrderDTO[]>(`/api/commodityOrder/queryOrder`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询订单支付状态 GET /commodityOrder/queryPayStatus */
export async function queryPayStatus(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryPayStatusParams,
  options?: { [key: string]: any },
) {
  return request<boolean>(`/api/commodityOrder/queryPayStatus`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 保存商品订单 POST /commodityOrder/save */
export async function save(body: API.CommodityOrderDTO, options?: { [key: string]: any }) {
  return request<API.CommodityOrderDTO>(`/api/commodityOrder/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
