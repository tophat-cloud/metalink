import styled from 'styled-components'

const Header = styled.div`
  display: flex;
  background-color: #0070f3;
  width: 100%;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const Name = styled.strong`
  line-height: 80px;
  font-size: 24px;
  color: white;
`;

const WriteButton = styled.button`

`;

export default () => {
  return (
    <Header>
      <Name>
        Metalink
      </Name>

      <WriteButton>
        글쓰기
      </WriteButton>
    </Header>
  );
};
