// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 通过ID删除商品 POST /commodity/deleteById */
export async function deleteById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delete19Params,
  options?: { [key: string]: any },
) {
  return request<boolean>(`/api/commodity/deleteById`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据ID获取商品 GET /commodity/getById */
export async function getById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.get19Params,
  options?: { [key: string]: any },
) {
  return request<API.CommodityDTO>(`/api/commodity/getById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 商品列表 GET /commodity/list */
export async function list(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.list18Params,
  options?: { [key: string]: any },
) {
  return request<API.CommodityDTO[]>(`/api/commodity/list`, {
    method: 'GET',
    params: {
      ...params,
      queryDTO: undefined,
      ...params['queryDTO'],
    },
    ...(options || {}),
  });
}

/** 分页查询商品 GET /commodity/page */
export async function page(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.page19Params,
  options?: { [key: string]: any },
) {
  return request<API.PageDTOCommodityDTO>(`/api/commodity/page`, {
    method: 'GET',
    params: {
      ...params,
      queryDTO: undefined,
      ...params['queryDTO'],
    },
    ...(options || {}),
  });
}

/** 保存商品 POST /commodity/save */
export async function save(body: API.CommodityDTO, options?: { [key: string]: any }) {
  return request<API.CommodityDTO>(`/api/commodity/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
