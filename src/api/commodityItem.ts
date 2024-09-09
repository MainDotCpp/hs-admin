// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 批量保存商品库存 POST /commodityItem/batchSave */
export async function batchSave(body: API.CommodityItemDTO[], options?: { [key: string]: any }) {
  return request<boolean>(`/api/commodityItem/batchSave`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 通过ID删除商品库存 POST /commodityItem/deleteById */
export async function deleteById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delete18Params,
  options?: { [key: string]: any },
) {
  return request<boolean>(`/api/commodityItem/deleteById`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据ID获取商品库存 GET /commodityItem/getById */
export async function getById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.get18Params,
  options?: { [key: string]: any },
) {
  return request<API.CommodityItemDTO>(`/api/commodityItem/getById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 商品库存列表 GET /commodityItem/list */
export async function list(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.list17Params,
  options?: { [key: string]: any },
) {
  return request<API.CommodityItemDTO[]>(`/api/commodityItem/list`, {
    method: 'GET',
    params: {
      ...params,
      queryDTO: undefined,
      ...params['queryDTO'],
    },
    ...(options || {}),
  });
}

/** 分页查询商品库存 GET /commodityItem/page */
export async function page(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.page18Params,
  options?: { [key: string]: any },
) {
  return request<API.PageDTOCommodityItemDTO>(`/api/commodityItem/page`, {
    method: 'GET',
    params: {
      ...params,
      queryDTO: undefined,
      ...params['queryDTO'],
    },
    ...(options || {}),
  });
}

/** 保存商品库存 POST /commodityItem/save */
export async function save(body: API.CommodityItemDTO, options?: { [key: string]: any }) {
  return request<API.CommodityItemDTO>(`/api/commodityItem/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
