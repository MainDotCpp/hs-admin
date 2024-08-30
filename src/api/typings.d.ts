declare namespace API {
  type AlipayTradePrecreateResponse = {
    httpBody?: string;
    code?: string;
    msg?: string;
    subCode?: string;
    subMsg?: string;
    outTradeNo?: string;
    qrCode?: string;
  };

  type BlacklistIp = {
    id?: number;
    ip: {
      hostAddress?: string;
      address?: string;
      hostName?: string;
      linkLocalAddress?: boolean;
      anyLocalAddress?: boolean;
      multicastAddress?: boolean;
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

  type check2Params = {
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
    inBlacklist?: boolean;
    scene?: 'SHORT_LINK' | 'LANDING_PAGE' | 'WEBSITE' | 'API';
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
    scene?: 'SHORT_LINK' | 'LANDING_PAGE' | 'WEBSITE' | 'API';
  };

  type CommodityDto = {
    id?: number;
    name?: string;
    description?: string;
    cover?: string;
    price?: number;
    stock?: number;
  };

  type CommodityDTO = {
    id?: number;
    name?: string;
    description?: string;
    cover?: string;
    price?: number;
    stock?: number;
    groupId?: number;
    groupName?: string;
  };

  type CommodityGroupDTO = {
    id?: number;
    groupName?: string;
    commodities?: CommodityDto[];
  };

  type CommodityItemDto = {
    id?: number;
    content?: string;
    payed?: boolean;
  };

  type CommodityItemDTO = {
    id?: number;
    content?: string;
    payed?: boolean;
    commodityId?: number;
    commodityName?: string;
  };

  type CommodityOrderDTO = {
    id?: number;
    commodityId?: number;
    commodityName?: string;
    email?: string;
    password?: string;
    count?: number;
    status?: number;
    sysOrderId?: number;
    createTime?: string;
    commodityItems?: CommodityItemDto[];
  };

  type configSslParams = {
    id: number;
  };

  type CreateCommodityOrderResponse = {
    qrCode?: string;
    orderNo?: string;
    totalAmount?: number;
  };

  type delete10Params = {
    id: number;
  };

  type delete11Params = {
    id: number;
  };

  type delete12Params = {
    id: number;
  };

  type delete13Params = {
    id: number;
  };

  type delete14Params = {
    id: number;
  };

  type delete15Params = {
    id: number;
  };

  type delete16Params = {
    id: number;
  };

  type delete17Params = {
    id: number;
  };

  type delete18Params = {
    id: number;
  };

  type delete19Params = {
    id: number;
  };

  type delete1Params = {
    id: number;
  };

  type delete20Params = {
    id: string;
  };

  type delete21Params = {
    id: number;
  };

  type delete2Params = {
    id: number;
  };

  type delete3Params = {
    id: number;
  };

  type delete4Params = {
    id: number;
  };

  type delete5Params = {
    id: number;
  };

  type delete6Params = {
    id: number;
  };

  type delete7Params = {
    id: number;
  };

  type delete8Params = {
    id: number;
  };

  type delete9Params = {
    id: number;
  };

  type deleteByIdParams = {
    id: number;
  };

  type deleteParams = {
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
    remark?: string;
    ssl?: boolean;
  };

  type DomainDTO = {
    id?: number;
    domain?: string;
    ownerId?: number;
    ownerNickname?: string;
    serverId?: number;
    serverIp?: string;
    serverName?: string;
    status?: 'UNUSED' | 'USED';
    remark?: string;
    ssl?: boolean;
  };

  type get10Params = {
    id: number;
  };

  type get11Params = {
    id: number;
  };

  type get12Params = {
    id: number;
  };

  type get13Params = {
    id: number;
  };

  type get14Params = {
    id: number;
  };

  type get15Params = {
    id: number;
  };

  type get16Params = {
    id: number;
  };

  type get17Params = {
    id: number;
  };

  type get18Params = {
    id: number;
  };

  type get19Params = {
    id: number;
  };

  type get1Params = {
    id: number;
  };

  type get20Params = {
    id: number;
  };

  type get21Params = {
    id: string;
  };

  type get22Params = {
    id: number;
  };

  type get2Params = {
    id: number;
  };

  type get3Params = {
    id: number;
  };

  type get4Params = {
    id: number;
  };

  type get5Params = {
    id: number;
  };

  type get6Params = {
    id: number;
  };

  type get7Params = {
    id: number;
  };

  type get8Params = {
    id: number;
  };

  type get9Params = {
    id: number;
  };

  type getAgentConfigParams = {
    id: number;
  };

  type getByKey1Params = {
    domain: string;
    path: string;
  };

  type getByKeyParams = {
    key: string;
  };

  type getParams = {
    id: number;
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

  type HttpResultCommodityDTO = {
    code?: number;
    message?: string;
    data?: CommodityDTO;
  };

  type HttpResultCommodityGroupDTO = {
    code?: number;
    message?: string;
    data?: CommodityGroupDTO;
  };

  type HttpResultCommodityItemDTO = {
    code?: number;
    message?: string;
    data?: CommodityItemDTO;
  };

  type HttpResultCommodityOrderDTO = {
    code?: number;
    message?: string;
    data?: CommodityOrderDTO;
  };

  type HttpResultCreateCommodityOrderResponse = {
    code?: number;
    message?: string;
    data?: CreateCommodityOrderResponse;
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

  type HttpResultListCommodityDTO = {
    code?: number;
    message?: string;
    data?: CommodityDTO[];
  };

  type HttpResultListCommodityGroupDTO = {
    code?: number;
    message?: string;
    data?: CommodityGroupDTO[];
  };

  type HttpResultListCommodityItemDTO = {
    code?: number;
    message?: string;
    data?: CommodityItemDTO[];
  };

  type HttpResultListCommodityOrderDTO = {
    code?: number;
    message?: string;
    data?: CommodityOrderDTO[];
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

  type HttpResultListSysOrderDTO = {
    code?: number;
    message?: string;
    data?: SysOrderDTO[];
  };

  type HttpResultListSystemConfigDTO = {
    code?: number;
    message?: string;
    data?: SystemConfigDTO[];
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

  type HttpResultPageDTOCommodityDTO = {
    code?: number;
    message?: string;
    data?: PageDTOCommodityDTO;
  };

  type HttpResultPageDTOCommodityGroupDTO = {
    code?: number;
    message?: string;
    data?: PageDTOCommodityGroupDTO;
  };

  type HttpResultPageDTOCommodityItemDTO = {
    code?: number;
    message?: string;
    data?: PageDTOCommodityItemDTO;
  };

  type HttpResultPageDTOCommodityOrderDTO = {
    code?: number;
    message?: string;
    data?: PageDTOCommodityOrderDTO;
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

  type HttpResultPageDTOSysOrderDTO = {
    code?: number;
    message?: string;
    data?: PageDTOSysOrderDTO;
  };

  type HttpResultPageDTOSystemConfigDTO = {
    code?: number;
    message?: string;
    data?: PageDTOSystemConfigDTO;
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

  type HttpResultSysOrderDTO = {
    code?: number;
    message?: string;
    data?: SysOrderDTO;
  };

  type HttpResultSystemConfigDTO = {
    code?: number;
    message?: string;
    data?: SystemConfigDTO;
  };

  type HttpResultTreeString = {
    code?: number;
    message?: string;
    data?: {
      name?: { empty?: boolean };
      id?: string;
      config?: TreeNodeConfig;
      parentId?: string;
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

  type list10Params = {
    queryDTO: LoadingConfigQueryDTO;
  };

  type list11Params = {
    queryDTO: LandingTemplateQueryDTO;
  };

  type list12Params = {
    queryDTO: LandingDTO;
  };

  type list13Params = {
    queryDTO: DomainDTO;
  };

  type list14Params = {
    queryDTO: DeptQueryDTO;
  };

  type list15Params = {
    queryDTO: CommodityOrderDTO;
  };

  type list16Params = {
    queryDTO: CommodityItemDTO;
  };

  type list17Params = {
    queryDTO: CommodityGroupDTO;
  };

  type list18Params = {
    queryDTO: CommodityDTO;
  };

  type list19Params = {
    queryDTO: CloakConfigQueryDTO;
  };

  type list1Params = {
    queryDTO: UserQueryDTO;
  };

  type list20Params = {
    queryDTO: BlacklistIpQueryDTO;
  };

  type list2Params = {
    queryDTO: SystemConfigDTO;
  };

  type list3Params = {
    queryDTO: SysOrderDTO;
  };

  type list4Params = {
    queryDTO: ShortLinkGroupQueryDTO;
  };

  type list5Params = {
    queryDTO: ServerDTO;
  };

  type list6Params = {
    queryDTO: RoleQueryDTO;
  };

  type list7Params = {
    queryDTO: PermissionQueryDTO;
  };

  type list8Params = {
    queryDTO: OrderGroupDTO;
  };

  type list9Params = {
    queryDTO: OrderDTO;
  };

  type listParams = {
    queryDTO: WebsiteDTO;
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

  type page10Params = {
    queryDTO: OrderDTO;
    current: number;
    pageSize: number;
  };

  type page11Params = {
    queryDTO: LoadingConfigQueryDTO;
  };

  type page12Params = {
    queryDTO: LandingTemplateQueryDTO;
  };

  type page13Params = {
    queryDTO: LandingDTO;
    current: number;
    pageSize: number;
  };

  type page14Params = {
    queryDTO: DomainDTO;
    current: number;
    pageSize: number;
  };

  type page15Params = {
    queryDTO: DeptQueryDTO;
  };

  type page16Params = {
    queryDTO: CommodityOrderDTO;
    current: number;
    pageSize: number;
  };

  type page17Params = {
    queryDTO: CommodityItemDTO;
    current: number;
    pageSize: number;
  };

  type page18Params = {
    queryDTO: CommodityGroupDTO;
    current: number;
    pageSize: number;
  };

  type page19Params = {
    queryDTO: CommodityDTO;
    current: number;
    pageSize: number;
  };

  type page1Params = {
    queryDTO: UserQueryDTO;
  };

  type page20Params = {
    queryDTO: CloakLogQueryDTO;
  };

  type page21Params = {
    queryDTO: CloakConfigQueryDTO;
  };

  type page22Params = {
    queryDTO: BlacklistIpQueryDTO;
  };

  type page2Params = {
    queryDTO: SystemConfigDTO;
    current: number;
    pageSize: number;
  };

  type page3Params = {
    queryDTO: SysOrderDTO;
    current: number;
    pageSize: number;
  };

  type page4Params = {
    pageDTO: ShortLinkConfigQueryDTO;
  };

  type page5Params = {
    queryDTO: ShortLinkGroupQueryDTO;
  };

  type page6Params = {
    queryDTO: ServerDTO;
    current: number;
    pageSize: number;
  };

  type page7Params = {
    queryDTO: RoleQueryDTO;
  };

  type page8Params = {
    queryDTO: PermissionQueryDTO;
  };

  type page9Params = {
    queryDTO: OrderGroupDTO;
    current: number;
    pageSize: number;
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

  type PageDTOCommodityDTO = {
    /** 页码 */
    current?: number;
    /** 页面大小 */
    pageSize?: number;
    data?: CommodityDTO[];
    /** 总数 */
    total?: number;
  };

  type PageDTOCommodityGroupDTO = {
    /** 页码 */
    current?: number;
    /** 页面大小 */
    pageSize?: number;
    data?: CommodityGroupDTO[];
    /** 总数 */
    total?: number;
  };

  type PageDTOCommodityItemDTO = {
    /** 页码 */
    current?: number;
    /** 页面大小 */
    pageSize?: number;
    data?: CommodityItemDTO[];
    /** 总数 */
    total?: number;
  };

  type PageDTOCommodityOrderDTO = {
    /** 页码 */
    current?: number;
    /** 页面大小 */
    pageSize?: number;
    data?: CommodityOrderDTO[];
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

  type PageDTOSysOrderDTO = {
    /** 页码 */
    current?: number;
    /** 页面大小 */
    pageSize?: number;
    data?: SysOrderDTO[];
    /** 总数 */
    total?: number;
  };

  type PageDTOSystemConfigDTO = {
    /** 页码 */
    current?: number;
    /** 页面大小 */
    pageSize?: number;
    data?: SystemConfigDTO[];
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

  type payCallback2Params = {
    notifyDTO: Record<string, any>;
  };

  type payCallback3Params = {
    notifyDTO: Record<string, any>;
  };

  type payCallback4Params = {
    notifyDTO: Record<string, any>;
  };

  type payCallback5Params = {
    notifyDTO: Record<string, any>;
  };

  type payCallbackParams = {
    notifyDTO: Record<string, any>;
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

  type queryPayStatusParams = {
    orderNo: string;
  };

  type receiveParams = {
    id: number;
  };

  type redirectParams = {
    key: string;
    preview: boolean;
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

  type SaveLandingByUrlDTO = {
    name?: string;
    cover?: string;
    description?: string;
    isPublic?: boolean;
    url?: string;
  };

  type ServerDTO = {
    id?: number;
    ip?: string;
    name?: string;
    port?: number;
    status?: 'CONNECTED' | 'DISCONNECTED';
    address?: string;
  };

  type setBlacklistIpParams = {
    blacklistIp: string;
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

  type SysOrderDTO = {
    id?: number;
    description?: string;
    orderType?: 'STORE';
    status?: 'UNPAID' | 'PAID' | 'CANCELLED' | 'REFUNDED';
    payAmount?: number;
    createTime?: string;
    payTime?: string;
    orderNo?: string;
    totalAmount?: number;
    alipayTradePrecreateResponse?: AlipayTradePrecreateResponse;
    subject?: string;
  };

  type SystemConfigDTO = {
    id?: number;
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

  type WebsiteCloakCheckDTO = {
    /** 斗篷ID */
    cloakKey?: string;
    /** 站点ID */
    websiteId?: number;
    clientInfo?: CloakCheckDTO;
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
    targetLink?: string;
    extraScript?: string;
  };
}
