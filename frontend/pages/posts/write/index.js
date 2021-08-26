import styled from "styled-components"

const Wrapper = styled.div`
  width: 50vh;
  height: 100%;
  align-self: flex-start;
  justify-content: flex-start;
  padding: 64px 0;
`;

const TitleInput = styled.input`
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

const LinkInput = styled.input`
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



const SubmitButton = styled.button`
  display: flex;
  width: 100%;
  border: 1px solid white;
  border-radius: 8px;
  height: 40px;
  justify-content: center;
  align-items: center;
  color: white;
`;


export default () => {
  return (
    <>
      <h1>게시글 작성</h1>
      <Wrapper>

        <TitleInput
          placeholder="제목을 입력해주세요."
        />

        <LinkInput
          placeholder="링크를 입력해주세요."
        />

        <ContentInput
          placeholder="내용을 입력해주세요."
        />

        <SubmitButton>
          작성 완료
        </SubmitButton>
      </Wrapper>

    </>
  )
}