import React, { useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ActionType, ProColumns, ProTable } from '@ant-design/pro-components';
import api from '@/api';
import { Button, message, Popconfirm } from 'antd';
import LandingEditModal from '@/pages/Landing/LandingEditModal';

import { useAccess } from '@@/plugin-access';

export default function Page() {
  const access = useAccess();
  const actionRef = useRef<ActionType>();
  const getTableData = async (params: any) => {
    return api.landing.page(params);
  };
  const columns: ProColumns<API.Landing>[] = [
    { dataIndex: 'id', title: 'ID', search: false, hidden: true },
    { dataIndex: 'id', title: 'ID', width: 100, search: false },
    {
      dataIndex: 'id',
      title: '操作',
      valueType: 'option',
      fixed: 'right',
      width: 100,
      render: (text, record, _, action) => {
        return [
          access.LANDING__EDIT && <LandingEditModal id={record.id} key="edit"
                                                                             onFinished={() => actionRef.current?.reload()}
          >
            <a>编辑</a>
          </LandingEditModal>,
          access.LANDING__DELETE && <Popconfirm
            key="delete"
            title={`确定删除吗？`} onConfirm={async () => {
            await api.landing.deleteById({ id: record.id });
            message.success('删除成功');
            action.reload();
          }}>
            <a key="delete">删除</a>
          </Popconfirm>,
        ];
      },
    },
  ];
  return (
    <PageContainer>
      <ProTable
        rowKey="id"
        search={false}
        actionRef={actionRef}
        toolbar={ {
          actions: [
            access.LANDING__EDIT &&
            <LandingEditModal key="create" onFinished={() => actionRef.current?.reload()}>
              <Button type="primary">新建</Button>
            </LandingEditModal>,
          ],
        }}
        size='small'
        scroll={ { x: 1000 }}
        columns={columns}
        request={getTableData}
      ></ProTable>
    </PageContainer>
  );
}