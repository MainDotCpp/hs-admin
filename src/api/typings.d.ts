declare namespace API {
  type BlacklistIp = {
    id?: number;
    ip: {
      multicastAddress?: boolean;
      loopbackAddress?: boolean;
      siteLocalAddress?: boolean;
      mcglobal?: boolean;
      mcnodeLocal?: boolean;
      mclinkLocal?: boolean;
      mcsiteLocal?: boolean;
      mcorgLocal?: boolean;
      linkLocalAddress?: boolean;
      hostAddress?: string;
      address?: string[];
      hostName?: string;
      canonicalHostName?: string;
      anyLocalAddress?: boolean;
    };
  };

  type BlacklistIpQueryDTO = {
    /** 页码 */
    current?: number;
    /** 页面大小 */
    pageSize?: number;
    data?: BlacklistIp[];
    /** 总数 */
    total?: number;
  };

  type checkParams = {
    key: string;
  };

  type CloakCheckDTO = {
    ip: string;
    userAgent?: string;
    referer?: string;
    language?: string;
  };

  type CloakCheckResult = {
    /** 是否允许访问 */
    permit?: boolean;
    /** 状态 */
    status?:
      | 'PERMIT'
      | 'FORBID_BY_REGION'
      | 'FORBID_BY_IP'
      | 'FORBID_BY_PROXY'
      | 'FORBID_BY_SPIDER'
      | 'FORBID_BY_USER_AGENT'
      | 'FORBID_BY_REFERER'
      | 'FORBID_BY_THIRD_CLOAK'
      | 'FORBID_BY_BLACKLIST_IP';
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
    /** 是否启用黑名单IP检测 */
    enableBlacklistIpDetection?: boolean;
    /** 是否启用黑名单IP收集 */
    enableBlacklistIpCollection?: boolean;
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
      | 'FORBID_BY_THIRD_CLOAK'
      | 'FORBID_BY_BLACKLIST_IP';
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
      | 'FORBID_BY_THIRD_CLOAK'
      | 'FORBID_BY_BLACKLIST_IP';
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
    id: number;
  };

  type deleteByIdParams = {
    id: string;
  };

  type deleteByIdParams = {
    id: number;
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
    id: number;
  };

  type getByIdParams = {
    id: string;
  };

  type getByIdParams = {
    id: number;
  };

  type getByKeyParams = {
    key: string;
  };

  type getByPathParams = {
    domain: string;
    path: string;
  };

  type HttpResultBlacklistIp = {
    code?: number;
    message?: string;
    data?: BlacklistIp;
  };

  type HttpResultBoolean = {
    code?: number;
    message?: string;
    data?: boolean;
  };

  type HttpResultCloakCheckResult = {
    code?: number;
    message?: string;
    data?: CloakCheckResult;
  };

  type HttpResultCloakConfig = {
    code?: number;
    message?: string;
    data?: CloakConfig;
  };

  type HttpResultCloakLog = {
    code?: number;
    message?: string;
    data?: CloakLog;
  };

  type HttpResultLandingTemplate = {
    code?: number;
    message?: string;
    data?: LandingTemplate;
  };

  type HttpResultListBlacklistIp = {
    code?: number;
    message?: string;
    data?: BlacklistIp[];
  };

  type HttpResultListCloakConfig = {
    code?: number;
    message?: string;
    data?: CloakConfig[];
  };

  type HttpResultListLandingTemplate = {
    code?: number;
    message?: string;
    data?: LandingTemplate[];
  };

  type HttpResultListLoadingConfig = {
    code?: number;
    message?: string;
    data?: LoadingConfig[];
  };

  type HttpResultLoadingConfig = {
    code?: number;
    message?: string;
    data?: LoadingConfig;
  };

  type HttpResultPageDTOBlacklistIp = {
    code?: number;
    message?: string;
    data?: PageDTOBlacklistIp;
  };

  type HttpResultPageDTOCloakConfig = {
    code?: number;
    message?: string;
    data?: PageDTOCloakConfig;
  };

  type HttpResultPageDTOCloakLog = {
    code?: number;
    message?: string;
    data?: PageDTOCloakLog;
  };

  type HttpResultPageDTOLandingTemplate = {
    code?: number;
    message?: string;
    data?: PageDTOLandingTemplate;
  };

  type HttpResultPageDTOLoadingConfig = {
    code?: number;
    message?: string;
    data?: PageDTOLoadingConfig;
  };

  type HttpResultPageDTOShortLinkConfig = {
    code?: number;
    message?: string;
    data?: PageDTOShortLinkConfig;
  };

  type HttpResultShortLinkConfig = {
    code?: number;
    message?: string;
    data?: ShortLinkConfig;
  };

  type LandingTemplate = {
    id?: number;
    /** 模板名称 */
    name?: string;
    /** 模板路径 */
    path?: string;
  };

  type LandingTemplateQueryDTO = {
    /** 页码 */
    current?: number;
    /** 页面大小 */
    pageSize?: number;
    data?: LandingTemplate[];
    /** 总数 */
    total?: number;
  };

  type listParams = {
    queryDTO: LoadingConfigQueryDTO;
  };

  type listParams = {
    queryDTO: LandingTemplateQueryDTO;
  };

  type listParams = {
    queryDTO: CloakConfigQueryDTO;
  };

  type listParams = {
    queryDTO: BlacklistIpQueryDTO;
  };

  type LoadingConfig = {
    id?: number;
    /** 落地页路径 */
    path?: string;
    /** 落地页id */
    templatePath?: string;
    /** 斗篷配置 */
    cloakId?: string;
    /** 标题 */
    title?: string;
    /** 目标链接 */
    targetLink?: string;
    /** 域名 */
    domain?: string;
    /** 像素代码 */
    pixelCode?: string;
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

  type PageDTOBlacklistIp = {
    /** 页码 */
    current?: number;
    /** 页面大小 */
    pageSize?: number;
    data?: BlacklistIp[];
    /** 总数 */
    total?: number;
  };

  type PageDTOCloakConfig = {
    /** 页码 */
    current?: number;
    /** 页面大小 */
    pageSize?: number;
    data?: CloakConfig[];
    /** 总数 */
    total?: number;
  };

  type PageDTOCloakLog = {
    /** 页码 */
    current?: number;
    /** 页面大小 */
    pageSize?: number;
    data?: CloakLog[];
    /** 总数 */
    total?: number;
  };

  type PageDTOLandingTemplate = {
    /** 页码 */
    current?: number;
    /** 页面大小 */
    pageSize?: number;
    data?: LandingTemplate[];
    /** 总数 */
    total?: number;
  };

  type PageDTOLoadingConfig = {
    /** 页码 */
    current?: number;
    /** 页面大小 */
    pageSize?: number;
    data?: LoadingConfig[];
    /** 总数 */
    total?: number;
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
    queryDTO: LandingTemplateQueryDTO;
  };

  type pageParams = {
    queryDTO: CloakLogQueryDTO;
  };

  type pageParams = {
    queryDTO: CloakConfigQueryDTO;
  };

  type pageParams = {
    queryDTO: BlacklistIpQueryDTO;
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
