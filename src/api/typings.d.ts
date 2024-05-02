declare namespace API {
  type checkParams = {
    key: string;
  };

  type CloakCheckDTO = {
    ip: string;
    userAgent?: string;
    referer?: string;
    language?: string;
  };

  type CloakConfig = {
    /** ID */
    id?: string;
    /** 配置名称 */
    name?: string;
    /** 允许访问的地区 */
    allowRegion?: string;
    /** 是否使用Cloak服务 */
    useCloakProvider?: boolean;
    /** Cloak服务商 */
    cloakProvider?: 'SHENG_DUN';
    /** Cloak服务商接口地址 */
    cloakProviderApiUrl?: string;
    /** Cloak 服务商密钥 */
    cloakProviderApiSecret?: string;
    /** 预览密钥 */
    previewSecret?: string;
    /** 是否启用地区检测 */
    enableRegionDetection?: boolean;
    /** 是否启用爬虫检测 */
    enableSpiderDetection?: boolean;
    /** 是否启用语言检测 */
    enableLanguageDetection?: boolean;
    /** 是否启用代理检测 */
    enableProxyDetection?: boolean;
    /** 是否启用UA检测 */
    enableUaDetection?: boolean;
  };

  type CloakConfigQueryDTO = {
    /** 页码 */
    current?: number;
    /** 页面大小 */
    pageSize?: number;
    data?: CloakConfig[];
    /** 总数 */
    total?: number;
  };

  type CloakLog = {
    id?: number;
    /** 配置ID */
    configId?: string;
    /** 请求IP */
    ip?: string;
    /** user-agent */
    userAgent?: string;
    /** 平台 */
    platform?: string;
    /** 操作系统 */
    os?: string;
    /** 来源 */
    referer?: string;
    /** 浏览器 */
    browser?: string;
    /** 语言  */
    language?: string;
    /** 引擎 */
    engine?: string;
    /** 引擎版本 */
    engineVersion?: string;
    /** 是否移动端 */
    isMobile?: boolean;
    /** 国家代码 */
    countryCode?: string;
    /** 国家名称 */
    countryName?: string;
    /** 地区 */
    regionName?: string;
    /** 城市 */
    cityName?: string;
    /** 经度 */
    latitude?: number;
    /** 纬度 */
    longitude?: number;
    /** 邮编 */
    zipCode?: string;
    /** 时区 */
    timeZone?: string;
    /** ASN */
    asn?: string;
    /** AS */
    as?: string;
    /** 数据中心 */
    isp?: string;
    /** 是否代理 */
    isProxy?: boolean;
    /** 是否是爬虫 */
    isCrawler?: boolean;
    /** 状态 */
    status?:
      | 'PERMIT'
      | 'FORBID_BY_REGION'
      | 'FORBID_BY_IP'
      | 'FORBID_BY_PROXY'
      | 'FORBID_BY_SPIDER'
      | 'FORBID_BY_USER_AGENT'
      | 'FORBID_BY_REFERER'
      | 'FORBID_BY_THIRD_CLOAK';
    /** 访问时间 */
    accessTime?: number;
    /** 备注 */
    remark?: string;
    /** 第三方cloak返回 */
    thirdCloakResponse?: string;
    /** 关联ID */
    relatedId?: number;
    /** 访问 URL */
    accessUrl?: string;
    scene?: 'SHORT_LINK' | 'LANDING_PAGE' | 'API';
  };

  type CloakLogQueryDTO = {
    /** 页码 */
    current?: number;
    /** 页面大小 */
    pageSize?: number;
    data?: CloakLog[];
    /** 总数 */
    total?: number;
    configId?: string;
    ip?: string;
    platform?: string;
    os?: string;
    isMobile?: boolean;
    countryCode?: string;
    isProxy?: boolean;
    isCrawler?: boolean;
    status?:
      | 'PERMIT'
      | 'FORBID_BY_REGION'
      | 'FORBID_BY_IP'
      | 'FORBID_BY_PROXY'
      | 'FORBID_BY_SPIDER'
      | 'FORBID_BY_USER_AGENT'
      | 'FORBID_BY_REFERER'
      | 'FORBID_BY_THIRD_CLOAK';
    relatedId: number;
    scene?: 'SHORT_LINK' | 'LANDING_PAGE' | 'API';
  };

  type deleteByIdParams = {
    id: number;
  };

  type deleteByIdParams = {
    id: number;
  };

  type deleteByIdParams = {
    id: number;
  };

  type deleteByIdParams = {
    id: string;
  };

  type getByIdParams = {
    id: number;
  };

  type getByIdParams = {
    id: number;
  };

  type getByIdParams = {
    id: number;
  };

  type getByIdParams = {
    id: string;
  };

  type getByKeyParams = {
    key: string;
  };

  type HttpResult = {
    code?: number;
    message?: string;
    data?: Record<string, any>;
  };

  type listParams = {
    queryDTO: LoadingConfigQueryDTO;
  };

  type listParams = {
    queryDTO: CloakConfigQueryDTO;
  };

  type LoadingConfig = {
    id?: number;
    /** 落地页路径 */
    path?: string;
    /** 落地页id */
    templateId?: string;
    /** 斗篷配置 */
    cloakId?: string;
  };

  type LoadingConfigQueryDTO = {
    /** 页码 */
    current?: number;
    /** 页面大小 */
    pageSize?: number;
    data?: LoadingConfig[];
    /** 总数 */
    total?: number;
  };

  type lParams = {
    key: string;
    preview: boolean;
  };

  type PageDTOShortLinkConfig = {
    /** 页码 */
    current?: number;
    /** 页面大小 */
    pageSize?: number;
    data?: ShortLinkConfig[];
    /** 总数 */
    total?: number;
  };

  type pageParams = {
    pageDTO: PageDTOShortLinkConfig;
  };

  type pageParams = {
    queryDTO: LoadingConfigQueryDTO;
  };

  type pageParams = {
    queryDTO: CloakLogQueryDTO;
  };

  type pageParams = {
    queryDTO: CloakConfigQueryDTO;
  };

  type ShortLinkConfig = {
    id?: number;
    /** 配置KEY */
    key?: string;
    /** 斗蓬ID */
    cloakId?: string;
    /** 目标URL */
    targetUrl?: string;
    /** 备注 */
    remark?: string;
    /** pv */
    pv?: number;
    /** uv */
    uv?: number;
  };
}
