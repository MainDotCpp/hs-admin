import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { ActionType, PageContainer, ProTable } from '@ant-design/pro-components';
import { Link, useModel } from '@umijs/max';
import styles from './index.less';
import React, { useRef } from 'react';
import { DefaultApi } from '@/services';
import { Button, message, Popconfirm, Space, Tag } from 'antd';
import api from '@/services/api';

const HomePage: React.FC = () => {
  const { geoList, host } = useModel('global');
  const getData = async () => {
    const api = new DefaultApi();
    const scheamaList = await api.schemaListGet();
    return {
      data: scheamaList.data,
    };
  };
  const actionRef = useRef<ActionType>();
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <ProTable
          actionRef={actionRef}
          scroll={{ x: 1000 }}
          search={false}
          toolbar={{
            actions: [
              <Link key="edit" to="/edit/0"><Button>创建短链</Button></Link>,
            ],
          }}
          request={getData} columns={[
          { dataIndex: 'id', title: 'id' },
          {
            dataIndex: 'no', title: '短链',
            copyable: true,
            renderText: (_, record) => {
              return `${host}/${record.no}`;
            },
            render: (text) => <Tag color="blue">{text}</Tag>,
          },
          {
            dataIndex: 'allow_region', title: '允许地区', render: (_, record) => {
              return record.allow_region.split(',').map((item: string) => {
                const geo = geoList.find((geo) => geo.iso === item);
                if (!geo) return item;
                return geo.icon + geo.name;
              }).join(' ');
            },
          },
          { dataIndex: 'dest_link', title: '原始链接' },
          {
            dataIndex: 'id', title: '操作',
            width: 200
            , render: (text, record) => {
              return <Space>
                <Link to={`/log`}>访问记录</Link>
                <Link to={`/edit/${record.id}`}>编辑</Link>
                <Popconfirm title="是否要删除" onConfirm={async () => {
                  await api.schemaDeletePost({
                    inlineObject1: { id: record.id },
                  });
                  message.success('删除成功');
                  actionRef.current?.reload();
                }}>
                  <a>删除</a>
                </Popconfirm>
              </Space>
                ;
            },
          },
        ]} />
      </div>
    </PageContainer>
  )
    ;
};

export default HomePage;
