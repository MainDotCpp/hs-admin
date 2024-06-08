import { PageContainer } from '@ant-design/pro-layout';
import { Card, Tree } from 'antd';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
`;
const Dept = () => {
  return (
    <PageContainer>
      <Card>
        <Wrapper>
          <Tree
            treeData={[
              {
                title: '部门1',
                key: '1',
                children: [{ title: '部门1-1', key: '1-1' }],
              },
            ]}
          />
        </Wrapper>
      </Card>
    </PageContainer>
  );
};

export default Dept;
