import styled from "styled-components"

const Wrapper = styled.div`
  width: 50vh;
  height: 100%;
  align-self: flex-start;
  justify-content: flex-start;
  padding: 64px 0;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const MainInput = styled.input`
  width: 100%;
  height: 44px;
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

const SelectBox = styled.select`
  height: 44px;
  margin-left: 12px;
  padding: 0 4px;
`;

const ContentInput = styled.textarea`
  width: 100%;
  padding: 12px;
  height: 50%;
  border: 1px solid #0070f3;
  display: block;
  margin: 0 0 1em;
  padding: ${props => props.padding};

  ::placeholder {
    color: #0070f3;
  }
`;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SubmitButton = styled.button`
  display: flex;
  width: 100%;
  border: 1px solid white;
  border-radius: 8px;
  height: 40px;
  justify-content: center;
  align-items: center;
  color: white;
  background: lightgray;
`;


export default () => {
  const categories = [
    '카테고리1',
    '카테고리2',
    '카테고리3',
    '카테고리4',
  ];

  return (
    <>
      <h1>게시글 작성</h1>
      <Wrapper>

        <TitleWrapper>
          <MainInput
            placeholder="제목을 입력해주세요."
          />

          <SelectBox>
            {
              categories.map(v => (
                <option>{v}</option>
              ))
            }
          </SelectBox>
        </TitleWrapper>

        <MainInput
          placeholder="링크를 입력해주세요."
        />

        <ContentInput
          placeholder="내용을 입력해주세요."
        />

        <LoginWrapper>
          <MainInput
            placeholder="닉네임을 입력해주세요"
          />

          <MainInput
            placeholder="패스워드를 입력해주세요"
            type="password"
          />
        </LoginWrapper>

        <SubmitButton>
          작성 완료
        </SubmitButton>
      </Wrapper>
    </>
  )
}