export default (initialState: { userinfo?: API.Userinfo }) => {
  let permissions: string[] = initialState.userinfo?.permissions || [];
  return {
    hasAdminRole: initialState.userinfo?.roles.includes('ADMIN'),
    SUPER_ADMIN: initialState.userinfo?.roles.includes('SUPER_ADMIN'),
    DATA__ALL: permissions.includes('DATA__ALL'),
    DATA__SELF: permissions.includes('DATA__SELF'),
    DATA__DEPT: permissions.includes('DATA__DEPT'),
    DATA__DEPT_AND_CHILD: permissions.includes('DATA__DEPT_AND_CHILD'),
    SHORT_LINK__VIEW: permissions.includes('SHORT_LINK__VIEW'),
    SHORT_LINK__EDIT: permissions.includes('SHORT_LINK__EDIT'),
    SHORT_LINK__DELETE: permissions.includes('SHORT_LINK__DELETE'),
    CLOAK__DELETE: permissions.includes('CLOAK__DELETE'),
    CLOAK__EDIT: permissions.includes('CLOAK__EDIT'),
    CLOAK__VIEW: permissions.includes('CLOAK__VIEW'),
    SHORT_LINK__FILTER: permissions.includes('SHORT_LINK__FILTER'),
    SHORT_LINK__ALL_DATA: permissions.includes('SHORT_LINK__ALL_DATA'),
    SETTING__VIEW: permissions.includes('SETTING__VIEW'),
    USER__VIEW: permissions.includes('USER__VIEW'),
    USER__EDIT: permissions.includes('USER__EDIT'),
    USER__DELETE: permissions.includes('USER__DELETE'),
    ROLE__VIEW: permissions.includes('ROLE__VIEW'),
    ROLE__EDIT: permissions.includes('ROLE__EDIT'),
    ROLE__DELETE: permissions.includes('ROLE__DELETE'),
  };
};
