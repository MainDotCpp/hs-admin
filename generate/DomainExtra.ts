DOMAIN__VIEW: permissions.includes('DOMAIN__VIEW'),
DOMAIN__EDIT: permissions.includes('DOMAIN__EDIT'),
DOMAIN__DELETE: permissions.includes('DOMAIN__DELETE'),

{
  name: '域名',
  icon: 'ClockCircleOutlined',
  path: '/resource/domain',
  access: 'DOMAIN__VIEW',
  component: './Domain',
},