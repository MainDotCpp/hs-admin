import api from '@/api';
import { useQuery } from 'react-query';

export const useLandingListQuery = () =>
  useQuery('landingList', async () => api.landing.list({}), {
    cacheTime: 1000 * 60 * 5,
    staleTime: 1000 * 60 * 5,
  });
