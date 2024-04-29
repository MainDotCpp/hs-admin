import React, { useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import {ActionType, ProColumns, ProTable } from '@ant-design/pro-components';
import api from '@/api';
import { Button, message, Popconfirm } from 'antd';
import {{{biz}}}EditModal from '@/pages/{{{biz}}}/{{{biz}}}EditModal';

export default function Page() {
  const actionRef = useRef<ActionType>();
  const getTableData = async (params: any) => {
    return api.{{{service}}}.page(params);
  };
  const columns: ProColumns<API.{{{biz}}}>[] = [
    { dataIndex: 'id', title: 'ID', search: false, hidden: true },
    { dataIndex: 'id', title: '编号', search: false, width: 200 },
    {
      dataIndex: 'id',
      title: '操作',
      valueType: 'option',
      fixed: 'right',
      width: 100,
      render: (text, record, _, action) => {
        return [
          <{{{biz}}}EditModal id={record.id} key="edit" onFinished={() => actionRef.current?.reload()}>
            <a>编辑</a>
          </{{{biz}}}EditModal>,
          <Popconfirm
            key="delete"
            title={`确定删除吗？`} onConfirm={async () => {
            await api.{{{service}}}.delete(record.id);
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
        actionRef={actionRef}
        toolbar={ {
          actions: [
            <{{{biz}}}EditModal key="create">
              <Button type="primary">新建</Button>
            </{{{biz}}}EditModal>,
          ],
        } }
        size="small"
        scroll={ { x: 1000 } }
        columns={columns}
        request={getTableData}
      ></ProTable>
    </PageContainer>
  );
}
