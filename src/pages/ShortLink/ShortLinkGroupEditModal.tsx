import { ModalForm, ProFormList, ProFormText } from '@ant-design/pro-form';
import { Button } from 'antd';
import api from '@/api';
import { EditableFormInstance, EditableProTable, ProList } from '@ant-design/pro-components';
import { useRef } from 'react';

const ShortLinkGroupEditModal = () => {
  const tableRef = useRef<EditableFormInstance>();
  return <ModalForm title="分组管理" submitter={false} trigger={<Button type="dashed">分组管理</Button>}>
    <EditableProTable request={async (params) => api.shortLinkGroup.page({ current: 1, pageSize: 100 })} columns={[
      { title: 'ID', dataIndex: 'id', readonly: true },
      { title: '名称', dataIndex: 'name' },
      {
        title: '操作',
        valueType: 'option',
        width: 200,
        render: (text, record, _, action) => [
          record.id !== 1 && <a
            key="editable"
            onClick={() => {
              action?.startEditable?.(record.id);
            }}
          >
            编辑
          </a>,
        ],
      },
    ]}
                      rowKey="id"
                      recordCreatorProps={{
                        newRecordType: 'dataSource',
                        position: 'bottom',
                        record: (index) => ({id: index,name:'未名称分组' }),
                      }}
                      editable={{
                        type: 'single',
                        onSave: async (key, record, originRow) => {
                          return api.shortLinkGroup.save(record);
                        },
                        onDelete: async (key, record) => {
                          return api.shortLinkGroup.deleteById({ id: record.id });
                        }
                      }}
                      editableFormRef={tableRef}
    >

    </EditableProTable>

  </ModalForm>;
};
export default ShortLinkGroupEditModal;