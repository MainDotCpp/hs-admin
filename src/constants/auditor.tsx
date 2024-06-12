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
    width: 80,
    search: false,
    valueType: 'dateTime',
  },
  {
    dataIndex: 'lastModifiedBy',
    title: '最后修改人',
    width: 50,
    render: (text) => <SystemUser id={text} />,
  },
  {
    dataIndex: 'lastModifiedDate',
    title: '最后修改时间',
    width: 80,
    search: false,
    valueType: 'dateTime',
  },
];
