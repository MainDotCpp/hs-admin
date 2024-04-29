import { useQuery, UseQueryOptions } from 'react-query';
import api from '@/api';
import { ParamsType } from '@ant-design/pro-provider';


export const useGetCloakConfigById = (id?: string, options?: UseQueryOptions) => {
  return useQuery({
    queryKey: ['cloakConfig', id],
    queryFn: () => api.cloakConfig.getById({ id }),
    ...options,
  });
};

export const useCloakConfigListQuery = (params: API.CloakConfigQueryDTO, options?: UseQueryOptions) => {
  return useQuery({
    queryKey: ['cloakConfig', 'list', params],
    queryFn: () => api.cloakConfig.list({ params }), ...options,
  });
};

export const useCloakConfigPageQuery = (params: ParamsType<API.CloakConfigQueryDTO>, options?: UseQueryOptions) => {
  return useQuery({
    queryKey: ['cloakConfig', 'page', params],
    queryFn: () => api.cloakConfig.page({ params }), ...options,
  });
};

export const useSaveCloakConfig = (body: API.CloakConfig) => {
  return useQuery({
    queryKey: ['cloakConfig', 'save', body],
    queryFn: () => api.cloakConfig.save(body),
    onSuccess: () => {
    },
  });
};