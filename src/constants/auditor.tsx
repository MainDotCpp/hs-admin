import SystemUser from '@/components/SystemUser/SystemUser';

export const auditorField = [
  {
    dataIndex: 'createdBy',
    title: '创建人',
    width: 50,
    render: (text) => <SystemUser id={text} />,
  },
  {
    dataIndex: 'createdDate',
    title: '创建时间',
    width: 100,
    search: false,
    valueType: 'dateTime',
  },
];
