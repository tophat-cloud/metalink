import { useState, useEffect } from 'react';
import styled from "styled-components"
import api from "../../../utils/api";
import { useForm } from "react-hook-form";

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

const HalfInput = styled(MainInput)`
  width: 49%;
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
  height: 20vh;
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
  background: #0070f3;
`;


export default () => {
  const [categories, setCategories] = useState([]);
  const { register, handleSubmit } = useForm();


  useEffect(() => {
    loadCategory();
  }, [])

  const loadCategory = async () => {
    const { data } = await api.get('board/category');
    setCategories(data);
  };
  
  const onSubmit = async (form) => {
    const { category } = form;
    form.category = categories.find(({ name }) => name === category).id || 0;

    const params = new URLSearchParams()
    for (const [key, value] of Object.entries(form)) {
      params.append(key, value);
    }

    await api.post('/board/create', params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    });
    alert('작성이 완료되었습니다!');
    window.location.href = '/';
  };

  return (
    <>
      <h1>게시글 작성</h1>
      <Wrapper>

        <TitleWrapper>
          <MainInput
            placeholder="제목을 입력해주세요."
            {...register('title')}
          />

          <SelectBox
            {...register('category')}
          >
            {
              categories.map(({ id, name }) => (
                <option key={id}>{name}</option>
              ))
            }
          </SelectBox>
        </TitleWrapper>

        <MainInput
          placeholder="링크를 입력해주세요."
          {...register('invite_url')}
        />

        <ContentInput
          placeholder="내용을 입력해주세요."
          {...register('content')}
        />

        <LoginWrapper>
          <HalfInput
            placeholder="닉네임을 입력해주세요"
            {...register('nickname')}
          />

          <HalfInput
            placeholder="패스워드를 입력해주세요"
            {...register('password')}
            type="password"
          />
        </LoginWrapper>

        <SubmitButton
          onClick={handleSubmit(onSubmit)}
        >
          작성 완료
        </SubmitButton>
      </Wrapper>
    </>
  )
}