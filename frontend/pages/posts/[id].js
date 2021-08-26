import styled from "styled-components"

const Wrapper = styled.div`
  width: 50vh;
  height: 100%;
  align-self: flex-start;
  justify-content: flex-start;
  padding: 64px 0;
`;

const TitleInput = styled.strong`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #0070f3;
  display: block;
  margin: 0 0 1em;
  padding: ${props => props.padding};

  ::placeholder {
    color: #0070f3;
  }
`;

const LinkInput = styled.strong`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #0070f3;
  display: block;
  margin: 0 0 1em;
  padding: ${props => props.padding};

  ::placeholder {
    color: #0070f3;
  }
`;

const Content = styled.div`
  width: 100%;
  padding: 12px;
  height: 50%;
  border: 1px solid #0070f3;
  margin-top: 20px;
  display: block;
  margin: 0 0 1em;
  padding: ${props => props.padding};
  border-radius: 8px;
`;


const ReturnButton = styled.a`
  display: flex;
  width: 100%;
  border: 1px solid white;
  border-radius: 8px;
  height: 40px;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: gray;
`;


export default () => {
  return (
    <>
      <Wrapper>
        <h1>우르릉의 세계로 초대합니다 :)</h1>
        <h3>https://metaworld.com</h3>

        <span>작성자: 우르릉</span>
        <p>카테고리: 제페토</p>

        <Content>
          안농! 내 이름은 우르릉!
          너를 내 세계에 초대하지 :)
        </Content>

        <ReturnButton href="/">
          메인 화면
        </ReturnButton>
      </Wrapper>

    </>
  )
}