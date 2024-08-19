// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 通过ID删除商品分组 POST /commodityGroup/deleteById */
export async function deleteById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delete18Params,
  options?: { [key: string]: any },
) {
  return request<boolean>(`/api/commodityGroup/deleteById`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据ID获取商品分组 GET /commodityGroup/getById */
export async function getById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.get18Params,
  options?: { [key: string]: any },
) {
  return request<API.CommodityGroupDTO>(`/api/commodityGroup/getById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 商品分组列表 GET /commodityGroup/list */
export async function list(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.list17Params,
  options?: { [key: string]: any },
) {
  return request<API.CommodityGroupDTO[]>(`/api/commodityGroup/list`, {
    method: 'GET',
    params: {
      ...params,
      queryDTO: undefined,
      ...params['queryDTO'],
    },
    ...(options || {}),
  });
}

/** 分页查询商品分组 GET /commodityGroup/page */
export async function page(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.page18Params,
  options?: { [key: string]: any },
) {
  return request<API.PageDTOCommodityGroupDTO>(`/api/commodityGroup/page`, {
    method: 'GET',
    params: {
      ...params,
      queryDTO: undefined,
      ...params['queryDTO'],
    },
    ...(options || {}),
  });
}

/** 保存商品分组 POST /commodityGroup/save */
export async function save(body: API.CommodityGroupDTO, options?: { [key: string]: any }) {
  return request<API.CommodityGroupDTO>(`/api/commodityGroup/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
