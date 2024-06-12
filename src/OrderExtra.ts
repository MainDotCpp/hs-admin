ORDER__VIEW: permissions.includes('ORDER__VIEW'),
ORDER__EDIT: permissions.includes('ORDER__EDIT'),
ORDER__DELETE: permissions.includes('ORDER__DELETE'),

{
  name: '工单',
  icon: 'ClockCircleOutlined',
  path: '/resource/order',
  access: 'ORDER__VIEW',
  component: './Order',
},