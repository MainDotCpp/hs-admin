LANDING__VIEW: permissions.includes('LANDING__VIEW'),
LANDING__EDIT: permissions.includes('LANDING__EDIT'),
LANDING__DELETE: permissions.includes('LANDING__DELETE'),

{
  name: '落地页',
  icon: 'ClockCircleOutlined',
  path: '/resource/landing',
  access: 'LANDING__VIEW',
  component: './Landing',
},