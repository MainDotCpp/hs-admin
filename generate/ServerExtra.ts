SERVER__VIEW: permissions.includes('SERVER__VIEW'),
SERVER__EDIT: permissions.includes('SERVER__EDIT'),
SERVER__DELETE: permissions.includes('SERVER__DELETE'),

{
  name: '服务器',
  icon: 'ClockCircleOutlined',
  path: '/resource/server',
  access: 'SERVER__VIEW',
  component: './Server',
},