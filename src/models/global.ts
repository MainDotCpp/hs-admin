// 全局共享数据示例
import { DEFAULT_NAME } from '@/constants';
import { useEffect, useState } from 'react';
import { Geo } from '@/services';

export let ACCESS_TOKEN = '';
const useUser = () => {
  const [name, setName] = useState<string>(DEFAULT_NAME);
  const [geoList, setGeoList] = useState<Geo[]>([]);
  const [host, setHost] = useState(window.location.protocol + '//' + window.location.host);
  useEffect(() => {
    setGeoList([]);
  }, []);
  return {
    host,
    name,
    setName,
    geoList,
  };
};

export default useUser;
