declare namespace API {
  type BlacklistIp = {
    id?: number;
    ip: {
      hostAddress?: string;
      address?: string[];
      hostName?: string;
      linkLocalAddress?: boolean;
      multicastAddress?: boolean;
      anyLocalAddress?: boolean;
      loopbackAddress?: boolean;
      siteLocalAddress?: boolean;
      mcglobal?: boolean;
      mcnodeLocal?: boolean;
      mclinkLocal?: boolean;
      mcsiteLocal?: boolean;
      mcorgLocal?: boolean;
      canonicalHostName?: string;
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
    hidden?: boolean;
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

  type CloakConfigUpdateDTO = {
    id?: string;
    name?: string;
    allowRegion?: string;
    useCloakProvider?: boolean;
    cloakProvider?: 'SHENG_DUN';
    cloakProviderApiUrl?: string;
    cloakProviderApiSecret?: string;
    previewSecret?: string;
    enableRegionDetection?: boolean;
    enableSpiderDetection?: boolean;
    enableLanguageDetection?: boolean;
    enableProxyDetection?: boolean;
    enableUaDetection?: boolean;
    enableBlacklistIpDetection?: boolean;
    enableBlacklistIpCollection?: boolean;
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

  type deployParams = {
    id: number;
  };

  type Dept = {
    /** ID */
    id?: string;
    /** 部门名称 */
    name?: string;
    /** 父部门ID */
    parentId?: string;
  };

  type DeptQueryDTO = {
    /** 页码 */
    current?: number;
    /** 页面大小 */
    pageSize?: number;
    data?: Dept[];
    /** 总数 */
    total?: number;
  };

  type DomainAgentConfig = {
    id?: number;
    domain?: string;
    server?: ServerDTO;
    websites?: WebsiteDTO[];
  };

  type DomainDTO = {
    id?: number;
    domain?: string;
    proxyShortlink?: boolean;
    ownerId?: number;
    ownerNickname?: string;
    serverId?: number;
    serverIp?: string;
    serverName?: string;
    status?: 'UNUSED' | 'USED';
  };

  type getAgentConfigParams = {
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

  type HttpResultDept = {
    code?: number;
    message?: string;
    data?: Dept;
  };

  type HttpResultDomainDTO = {
    code?: number;
    message?: string;
    data?: DomainDTO;
  };

  type HttpResultLandingDTO = {
    code?: number;
    message?: string;
    data?: LandingDTO;
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

  type HttpResultListDept = {
    code?: number;
    message?: string;
    data?: Dept[];
  };

  type HttpResultListDomainDTO = {
    code?: number;
    message?: string;
    data?: DomainDTO[];
  };

  type HttpResultListLandingDTO = {
    code?: number;
    message?: string;
    data?: LandingDTO[];
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

  type HttpResultListOrderDTO = {
    code?: number;
    message?: string;
    data?: OrderDTO[];
  };

  type HttpResultListOrderGroupDTO = {
    code?: number;
    message?: string;
    data?: OrderGroupDTO[];
  };

  type HttpResultListPermission = {
    code?: number;
    message?: string;
    data?: Permission[];
  };

  type HttpResultListRole = {
    code?: number;
    message?: string;
    data?: Role[];
  };

  type HttpResultListServerDTO = {
    code?: number;
    message?: string;
    data?: ServerDTO[];
  };

  type HttpResultListShortLinkGroup = {
    code?: number;
    message?: string;
    data?: ShortLinkGroup[];
  };

  type HttpResultListUserDto = {
    code?: number;
    message?: string;
    data?: UserDto[];
  };

  type HttpResultListUserIdAndNickNameDTO = {
    code?: number;
    message?: string;
    data?: UserIdAndNickNameDTO[];
  };

  type HttpResultListWebsiteDTO = {
    code?: number;
    message?: string;
    data?: WebsiteDTO[];
  };

  type HttpResultLoadingConfig = {
    code?: number;
    message?: string;
    data?: LoadingConfig;
  };

  type HttpResultOrderDTO = {
    code?: number;
    message?: string;
    data?: OrderDTO;
  };

  type HttpResultOrderGroupDTO = {
    code?: number;
    message?: string;
    data?: OrderGroupDTO;
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

  type HttpResultPageDTODept = {
    code?: number;
    message?: string;
    data?: PageDTODept;
  };

  type HttpResultPageDTODomainDTO = {
    code?: number;
    message?: string;
    data?: PageDTODomainDTO;
  };

  type HttpResultPageDTOLandingDTO = {
    code?: number;
    message?: string;
    data?: PageDTOLandingDTO;
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

  type HttpResultPageDTOOrderDTO = {
    code?: number;
    message?: string;
    data?: PageDTOOrderDTO;
  };

  type HttpResultPageDTOOrderGroupDTO = {
    code?: number;
    message?: string;
    data?: PageDTOOrderGroupDTO;
  };

  type HttpResultPageDTOPermission = {
    code?: number;
    message?: string;
    data?: PageDTOPermission;
  };

  type HttpResultPageDTORole = {
    code?: number;
    message?: string;
    data?: PageDTORole;
  };

  type HttpResultPageDTOServerDTO = {
    code?: number;
    message?: string;
    data?: PageDTOServerDTO;
  };

  type HttpResultPageDTOShortLinkConfig = {
    code?: number;
    message?: string;
    data?: PageDTOShortLinkConfig;
  };

  type HttpResultPageDTOShortLinkGroup = {
    code?: number;
    message?: string;
    data?: PageDTOShortLinkGroup;
  };

  type HttpResultPageDTOUserDto = {
    code?: number;
    message?: string;
    data?: PageDTOUserDto;
  };

  type HttpResultPageDTOWebsiteDTO = {
    code?: number;
    message?: string;
    data?: PageDTOWebsiteDTO;
  };

  type HttpResultPermission = {
    code?: number;
    message?: string;
    data?: Permission;
  };

  type HttpResultRole = {
    code?: number;
    message?: string;
    data?: Role;
  };

  type HttpResultServerDTO = {
    code?: number;
    message?: string;
    data?: ServerDTO;
  };

  type HttpResultShortLinkConfig = {
    code?: number;
    message?: string;
    data?: ShortLinkConfig;
  };

  type HttpResultShortLinkGroup = {
    code?: number;
    message?: string;
    data?: ShortLinkGroup;
  };

  type HttpResultString = {
    code?: number;
    message?: string;
    data?: string;
  };

  type HttpResultTreeString = {
    code?: number;
    message?: string;
    data?: {
      name?: { empty?: boolean };
      id?: string;
      parentId?: string;
      config?: TreeNodeConfig;
      weight?: Record<string, any>;
      empty?: boolean;
    };
  };

  type HttpResultUser = {
    code?: number;
    message?: string;
    data?: User;
  };

  type HttpResultUserDto = {
    code?: number;
    message?: string;
    data?: UserDto;
  };

  type HttpResultUserIdAndNickNameDTO = {
    code?: number;
    message?: string;
    data?: UserIdAndNickNameDTO;
  };

  type HttpResultUserinfo = {
    code?: number;
    message?: string;
    data?: Userinfo;
  };

  type HttpResultWebsiteDTO = {
    code?: number;
    message?: string;
    data?: WebsiteDTO;
  };

  type LandingCloakCheckDTO = {
    /** 斗篷ID */
    cloakKey?: string;
    /** 落地页ID */
    landingId?: number;
    clientInfo?: CloakCheckDTO;
  };

  type LandingDTO = {
    id?: number;
    createdBy?: number;
    createdDate?: string;
    lastModifiedBy?: number;
    lastModifiedDate?: string;
    deptId?: string;
    uuid?: string;
    name?: string;
    cover?: string;
    description?: string;
    version?: number;
    isPublic?: boolean;
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
    queryDTO: WebsiteDTO;
  };

  type listParams = {
    queryDTO: UserQueryDTO;
  };

  type listParams = {
    queryDTO: ShortLinkGroupQueryDTO;
  };

  type listParams = {
    queryDTO: ServerDTO;
  };

  type listParams = {
    queryDTO: RoleQueryDTO;
  };

  type listParams = {
    queryDTO: PermissionQueryDTO;
  };

  type listParams = {
    queryDTO: OrderGroupDTO;
  };

  type listParams = {
    queryDTO: OrderDTO;
  };

  type listParams = {
    queryDTO: LoadingConfigQueryDTO;
  };

  type listParams = {
    queryDTO: LandingTemplateQueryDTO;
  };

  type listParams = {
    queryDTO: LandingDTO;
  };

  type listParams = {
    queryDTO: DomainDTO;
  };

  type listParams = {
    queryDTO: DeptQueryDTO;
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

  type LoginReqDTO = {
    username?: string;
    password?: string;
    autoLogin?: boolean;
  };

  type lParams = {
    key: string;
    preview: boolean;
  };

  type OrderDTO = {
    id?: number;
    link?: string;
    businessName?: string;
  };

  type OrderGroupDTO = {
    id?: number;
    createdBy?: number;
    createdDate?: string;
    lastModifiedBy?: number;
    lastModifiedDate?: string;
    deptId?: string;
    name?: string;
    status?: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';
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

  type PageDTODept = {
    /** 页码 */
    current?: number;
    /** 页面大小 */
    pageSize?: number;
    data?: Dept[];
    /** 总数 */
    total?: number;
  };

  type PageDTODomainDTO = {
    /** 页码 */
    current?: number;
    /** 页面大小 */
    pageSize?: number;
    data?: DomainDTO[];
    /** 总数 */
    total?: number;
  };

  type PageDTOLandingDTO = {
    /** 页码 */
    current?: number;
    /** 页面大小 */
    pageSize?: number;
    data?: LandingDTO[];
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

  type PageDTOOrderDTO = {
    /** 页码 */
    current?: number;
    /** 页面大小 */
    pageSize?: number;
    data?: OrderDTO[];
    /** 总数 */
    total?: number;
  };

  type PageDTOOrderGroupDTO = {
    /** 页码 */
    current?: number;
    /** 页面大小 */
    pageSize?: number;
    data?: OrderGroupDTO[];
    /** 总数 */
    total?: number;
  };

  type PageDTOPermission = {
    /** 页码 */
    current?: number;
    /** 页面大小 */
    pageSize?: number;
    data?: Permission[];
    /** 总数 */
    total?: number;
  };

  type PageDTORole = {
    /** 页码 */
    current?: number;
    /** 页面大小 */
    pageSize?: number;
    data?: Role[];
    /** 总数 */
    total?: number;
  };

  type PageDTOServerDTO = {
    /** 页码 */
    current?: number;
    /** 页面大小 */
    pageSize?: number;
    data?: ServerDTO[];
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

  type PageDTOShortLinkGroup = {
    /** 页码 */
    current?: number;
    /** 页面大小 */
    pageSize?: number;
    data?: ShortLinkGroup[];
    /** 总数 */
    total?: number;
  };

  type PageDTOUserDto = {
    /** 页码 */
    current?: number;
    /** 页面大小 */
    pageSize?: number;
    data?: UserDto[];
    /** 总数 */
    total?: number;
  };

  type PageDTOWebsiteDTO = {
    /** 页码 */
    current?: number;
    /** 页面大小 */
    pageSize?: number;
    data?: WebsiteDTO[];
    /** 总数 */
    total?: number;
  };

  type pageParams = {
    queryDTO: WebsiteDTO;
    current: number;
    pageSize: number;
  };

  type pageParams = {
    queryDTO: UserQueryDTO;
  };

  type pageParams = {
    pageDTO: ShortLinkConfigQueryDTO;
  };

  type pageParams = {
    queryDTO: ShortLinkGroupQueryDTO;
  };

  type pageParams = {
    queryDTO: ServerDTO;
    current: number;
    pageSize: number;
  };

  type pageParams = {
    queryDTO: RoleQueryDTO;
  };

  type pageParams = {
    queryDTO: PermissionQueryDTO;
  };

  type pageParams = {
    queryDTO: OrderGroupDTO;
    current: number;
    pageSize: number;
  };

  type pageParams = {
    queryDTO: OrderDTO;
    current: number;
    pageSize: number;
  };

  type pageParams = {
    queryDTO: LoadingConfigQueryDTO;
  };

  type pageParams = {
    queryDTO: LandingTemplateQueryDTO;
  };

  type pageParams = {
    queryDTO: LandingDTO;
    current: number;
    pageSize: number;
  };

  type pageParams = {
    queryDTO: DomainDTO;
    current: number;
    pageSize: number;
  };

  type pageParams = {
    queryDTO: DeptQueryDTO;
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

  type Permission = {
    id?: number;
    name?: string;
    code?: string;
  };

  type PermissionQueryDTO = {
    /** 页码 */
    current?: number;
    /** 页面大小 */
    pageSize?: number;
    data?: Permission[];
    /** 总数 */
    total?: number;
  };

  type Role = {
    id?: number;
    name?: string;
    code?: string;
    description?: string;
    /** 权限 */
    permissions?: Permission[];
  };

  type RoleQueryDTO = {
    /** 页码 */
    current?: number;
    /** 页面大小 */
    pageSize?: number;
    data?: Role[];
    /** 总数 */
    total?: number;
  };

  type SaveByUrlDTO = {
    url?: string;
  };

  type ServerDTO = {
    id?: number;
    ip?: string;
    name?: string;
    port?: number;
    status?: 'CONNECTED' | 'DISCONNECTED';
  };

  type SetRoleDTO = {
    userId?: number;
    roleIds?: number[];
  };

  type ShortLinkConfig = {
    id?: number;
    createdBy?: number;
    createdDate?: string;
    lastModifiedBy?: number;
    lastModifiedDate?: string;
    deptId?: string;
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
    /** 分组ID */
    groupId?: number;
  };

  type ShortLinkConfigQueryDTO = {
    /** 页码 */
    current?: number;
    /** 页面大小 */
    pageSize?: number;
    data?: ShortLinkConfig[];
    /** 总数 */
    total?: number;
    groupId?: number;
    createdBy?: number;
  };

  type ShortLinkGroup = {
    id?: number;
    /** 分组名称 */
    name?: string;
  };

  type ShortLinkGroupQueryDTO = {
    /** 页码 */
    current?: number;
    /** 页面大小 */
    pageSize?: number;
    data?: ShortLinkGroup[];
    /** 总数 */
    total?: number;
  };

  type TreeNodeConfig = {
    idKey?: string;
    parentIdKey?: string;
    weightKey?: string;
    nameKey?: string;
    childrenKey?: string;
    deep?: number;
  };

  type User = {
    id?: number;
    /** 用户名 */
    username?: string;
    /** 密码 */
    password?: string;
    /** 昵称 */
    nickname?: string;
    /** 状态 */
    status?: number;
    /** 部门ID */
    deptId?: string;
    /** 创建时间 */
    createTime?: number;
    /** 更新时间 */
    updateTime?: number;
    /** 角色 */
    roles?: Role[];
    dataPermission?: 'ALL' | 'SELF' | 'DEPT' | 'DEPT_AND_CHILD';
    /** 访问令牌 */
    accessToken?: string;
  };

  type UserDto = {
    id?: number;
    username?: string;
    nickname?: string;
    password?: string;
    status?: number;
    createTime?: number;
    updateTime?: number;
    roleIds?: number[];
    roleNames?: string[];
    dataPermission?: 'ALL' | 'SELF' | 'DEPT' | 'DEPT_AND_CHILD';
    deptId?: string;
  };

  type UserIdAndNickNameDTO = {
    id?: number;
    nickname?: string;
  };

  type Userinfo = {
    id?: number;
    username?: string;
    nickname?: string;
    roles?: string[];
    permissions?: string[];
    deptId?: string;
  };

  type UserQueryDTO = {
    /** 页码 */
    current?: number;
    /** 页面大小 */
    pageSize?: number;
    data?: UserDto[];
    /** 总数 */
    total?: number;
    dataPermission?: 'ALL' | 'SELF' | 'DEPT' | 'DEPT_AND_CHILD';
    deptId?: string;
  };

  type WebsiteDTO = {
    id?: number;
    path?: string;
    type?: 'LANDING' | 'LINK';
    cloakConfigId?: string;
    cloakConfigName?: string;
    landingId?: number;
    landingUuid?: string;
    landingName?: string;
    landingCover?: string;
    landingDescription?: string;
    landingVersion?: number;
    orders?: OrderDTO[];
    domainId?: number;
  };
}
