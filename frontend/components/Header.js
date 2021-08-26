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

const Name = styled.a`
  line-height: 80px;
  font-weight: 600;
  font-size: 24px;
  color: white;
`;

const WriteButton = styled.a`
  display: flex;
  border: 1px solid white;
  border-radius: 8px;
  width: 100px;
  height: 40px;
  justify-content: center;
  align-items: center;
  color: white;
`;

export default () => {
  return (
    <Header>
      <Name href='/'>
        Metalink
      </Name>

      <WriteButton href='/posts/write'>
        글쓰기
      </WriteButton>
    </Header>
  );
};
