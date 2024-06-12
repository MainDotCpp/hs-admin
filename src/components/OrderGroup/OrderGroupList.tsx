import api from '@/api';
import OrderGroupEditModal from '@/components/OrderGroup/OrderGroupEditModal';
import ProCard from '@ant-design/pro-card';
import { ProList } from '@ant-design/pro-components';
import { useQuery } from 'react-query';

const OrderGroupList = () => {
  const { data: orderGroupList } = useQuery('orderGroupList', () =>
    api.orderGroup.list({}),
  );
  return (
    <ProCard
      ghost
      style={{ height: '100%', width: '300px' }}
      title="工单组"
      extra={
        <OrderGroupEditModal>
          <a>新建</a>
        </OrderGroupEditModal>
      }
    >
      <ProList
        rowKey="id"
        dataSource={orderGroupList}
        metas={{
          title: {
            dataIndex: 'id',
          },
          actions: {
            render: (text, record) => [
              <OrderGroupEditModal id={record.id}>
                <a>编辑</a>
              </OrderGroupEditModal>,
            ],
          },
        }}
      ></ProList>
    </ProCard>
  );
};
export default OrderGroupList;
