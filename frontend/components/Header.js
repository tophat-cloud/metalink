import styled from 'styled-components'

const Header = styled.div`
  display: flex;
  background-color: #0070f3;
  width: 100%;
  height: 64px;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 60%;
  min-width: 500px;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const Name = styled.a`
  line-height: 80px;
  font-weight: 600;
  font-size: 20px;
  color: white;
`;

const WriteButton = styled.a`
  display: flex;
  width: 100px;
  height: 40px;
  justify-content: center;
  align-items: center;
  color: white;

  :hover {
    color: black;

  }
`;

export default () => {
  return (
    <Header>
      <Wrapper>
        <Name href='/'>
          Metalink
        </Name>

        <WriteButton href='/posts/write'>
          글쓰기
        </WriteButton>
      </Wrapper>
    </Header>
  );
};
