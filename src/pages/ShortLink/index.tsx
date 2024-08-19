import api from '@/api';
import ShortLinkEditModal from '@/pages/ShortLink/ShortLinkEditModal';
import { useAccess } from '@@/plugin-access';
import { ActionType, ProColumns, ProTable } from '@ant-design/pro-components';
import { PageContainer } from '@ant-design/pro-layout';
import { Link } from '@umijs/max';
import { useRequest } from 'ahooks';
import { Button, Popconfirm, Space, message } from 'antd';
import { useRef } from 'react';

export default function Page() {
  const access = useAccess();
  const actionRef = useRef<ActionType>();
  const { data: cloakConfigList } = useRequest(api.cloakConfig.list, {
    defaultParams: [{}],
  });
  const { data: shortLinkGroup } = useRequest(api.shortLinkGroup.list, {
    defaultParams: [{}],
  });
  const { data: deptList } = useRequest(api.dept.list, {
    defaultParams: [{}],
  });

  const getTableData = async (params: any) => {
    return api.shortlink.page(params);
  };
  const columns: ProColumns<API.ShortLinkConfig>[] = [
    { dataIndex: 'id', title: 'ID', search: false, hidden: true },
    {
      dataIndex: 'key',
      title: '短链',
      search: false,
      width: 200,
      render: (text) => {
        const link = `https://d-l.ink/${text}`;
        return (
          <a href={link} target="_blank">
            {link}
          </a>
        );
      },
    },

    {
      dataIndex: 'cloakId',
      title: '斗篷',
      search: false,
      width: 200,
      renderText: (text) => {
        const cloakConfig = cloakConfigList?.find((item) => item.id === text);
        return cloakConfig?.name;
      },
    },
    {
      dataIndex: 'targetUrl',
      title: '跳转地址',
      search: false,
      width: 300,
      renderText: (text) => (
        <a href={text} target="_blank">
          {text}
        </a>
      ),
    },
    { dataIndex: 'remark', title: '备注', search: false, width: 200 },
    {
      dataIndex: 'pv',
      title: '访问数据',
      tooltip: '每 5 分钟更新一次数据',
      search: false,
      width: 200,
      render: (_, record) => (
        <Space>
          <div>{record.pv}次</div>
          <div>{record.uv}人</div>
        </Space>
      ),
    },
    {
      dataIndex: 'groupId',
      title: '分组',
      valueType: 'select',
      search: false,
      width: 200,
      renderText: (text) => {
        const group = shortLinkGroup?.find((item) => item.id === text);
        return group?.name;
      },
    },
    {
      dataIndex: 'deptId',
      title: '部门',
      width: 100,
      search: false,
      renderText: (text) => {
        const dept = deptList?.find((item) => item.id === text);
        return dept?.name;
      },
    },
    {
      dataIndex: 'createdBy',
      title: '创建人',
      width: 200,
      search: access.DATA__ALL || access.DATA__DEPT_AND_CHILD,
      request: api.user.list,
      valueType: 'select',
      fieldProps: {
        fieldNames: {
          label: 'nickname',
          value: 'id',
        },
      },
    },
    {
      dataIndex: 'createdDate',
      title: '创建时间',
      valueType: 'dateTime',
      search: false,
      width: 200,
    },

    {
      dataIndex: 'id',
      title: '操作',
      valueType: 'option',
      fixed: 'right',
      width: 200,
      render: (text, record, _, action) => {
        return [
          <Link
            key="jump"
            to={`/cloakLog?relatedId=${record.id}&scene=SHORT_LINK`}
          >
            访问记录
          </Link>,
          access.SHORT_LINK__EDIT && (
            <ShortLinkEditModal
              id={record.id}
              key="edit"
              onFinished={action?.reload}
            >
              <a>编辑</a>
            </ShortLinkEditModal>
          ),
          access.SHORT_LINK__DELETE && (
            <Popconfirm
              key="delete"
              title={`确定删除吗？`}
              onConfirm={async () => {
                await api.shortlink.deleteById({ id: record.id });
                message.success('删除成功');
                action.reload();
              }}
            >
              <a key="delete" className="text-red-500">
                删除
              </a>
            </Popconfirm>
          ),
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
            access.SHORT_LINK__EDIT && (
              <ShortLinkEditModal
                key="create"
                onFinished={() => actionRef.current?.reload()}
              >
                <Button type="primary">新建</Button>
              </ShortLinkEditModal>
            ),
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
