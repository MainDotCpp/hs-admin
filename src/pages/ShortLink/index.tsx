import { PageContainer } from '@ant-design/pro-layout';
import React, { useRef } from 'react';
import { ActionType, ProColumns, ProTable } from '@ant-design/pro-components';
import api from '@/api';
import { Button, message, Popconfirm, Space, Tag } from 'antd';
import ShortLinkEditModal from '@/pages/ShortLink/ShortLinkEditModal';
import { useLocalStorageState, useRequest } from 'ahooks';
import { Link } from '@umijs/max';
import ShortLinkGroupEditModal from '@/pages/ShortLink/ShortLinkGroupEditModal';

export default function Page() {
  const actionRef = useRef<ActionType>();
  const { data: cloakConfigList } = useRequest(api.cloakConfig.list, {
    defaultParams: [{}],
  });
  const { data: shortLinkGroup } = useRequest(api.shortLinkGroup.list, { defaultParams: [{}] });
  const [defaultGroup,setDefaultGroup] = useLocalStorageState('default-group')

  const getTableData = async (params: any) => {
    return api.shortlink.page(params);
  };
  const columns: ProColumns<API.ShortLinkConfig>[] = [
    { dataIndex: 'id', title: 'ID', search: false, hidden: true },
    {
      dataIndex: 'key', title: '短链', search: false, width: 200,
      render: (text) => {
        const link = `https://d-l.ink/${text}`;
        return <a href={link} target="_blank">
          {link}
        </a>;
      },
    },
    {
      dataIndex: 'groupId',
      title: '分组',
      valueType: 'select',
      search:{
        transform: (value) => ({groupId:value.value || value})
      },
      formItemProps: {
        initialValue: defaultGroup,
      },
      fieldProps:{
        onChange: (value) => {
          console.log(shortLinkGroup);
          let _group: any = shortLinkGroup?.find((item) => item.id == value);
          console.log(_group);
          setDefaultGroup({label:_group.name,value:_group.id});
        }
      },
      valueEnum: shortLinkGroup?.reduce((acc, item) => {
        acc[item.id] = { text: item.name };
        return acc;
      }, {} as any),
      width: 100, render: (text) => {
        return <Tag color="blue">{text}</Tag>;
      },
    },
    {
      dataIndex: 'cloakId', title: '斗篷', search: false, width: 200, renderText: (text) => {
        const cloakConfig = cloakConfigList?.find((item) => item.id === text);
        return cloakConfig?.name;
      },
    },
    {
      dataIndex: 'targetUrl',
      title: '跳转地址',
      search: false,
      width: 300,
      renderText: (text) => <a href={text} target="_blank">{text}</a>,
    },
    { dataIndex: 'remark', title: '备注', search: false, width: 200 },
    {
      dataIndex: 'pv',
      title: '访问数据',
      tooltip: '每 5 分钟更新一次数据',
      search: false,
      width: 200,
      render: (_, record) => <Space>
        <div>{record.pv}次</div>
        <div>{record.uv}人</div>
      </Space>,
    },
    {
      dataIndex: 'id',
      title: '操作',
      valueType: 'option',
      fixed: 'right',
      width: 200,
      render: (text, record, _, action) => {
        return [
          <Link key="jump" to={`/cloakLog?relatedId=${record.id}&scene=SHORT_LINK`}>访问记录</Link>,
          <ShortLinkEditModal id={record.id} key="edit" onFinished={action?.reload}>
            <a>编辑</a>
          </ShortLinkEditModal>,
          <Popconfirm
            key="delete"
            title={`确定删除吗？`} onConfirm={async () => {
            await api.shortlink.deleteById({ id: record.id });
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
        actionRef={actionRef}
        toolbar={{
          actions: [
            <ShortLinkEditModal key="create" onFinished={() => actionRef.current?.reload()}>
              <Button type="primary">新建</Button>
            </ShortLinkEditModal>,
            <ShortLinkGroupEditModal key="group" />,
          ],
        }}
        size="small"
        scroll={{ x: 1000 }}
        columns={columns}
        request={getTableData}
      ></ProTable>
    </PageContainer>
  );
}
