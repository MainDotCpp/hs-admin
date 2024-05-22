// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 检查落地页斗篷 POST /landing/cloak/check */
export async function check(body: API.LandingCloakCheckDTO, options?: { [key: string]: any }) {
  return request<API.HttpResultCloakCheckResult>(`/api/landing/cloak/check`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
