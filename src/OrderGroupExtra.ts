ORDER_GROUP__VIEW: permissions.includes('ORDER_GROUP__VIEW'),
ORDER_GROUP__EDIT: permissions.includes('ORDER_GROUP__EDIT'),
ORDER_GROUP__DELETE: permissions.includes('ORDER_GROUP__DELETE'),

{
  name: '工单组',
  icon: 'ClockCircleOutlined',
  path: '/resource/orderGroup',
  access: 'ORDER_GROUP__VIEW',
  component: './OrderGroup',
},