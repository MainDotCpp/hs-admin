export default (initialState: {
  userinfo?: API.Userinfo
}) => {
  return {
    hasAdminRole: initialState.userinfo?.roles.includes('ADMIN'),
  };
};
