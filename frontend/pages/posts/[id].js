import { useEffect, useState } from "react";
import styled from "styled-components"
import { useRouter } from 'next/router'
import api from "../../utils/api";
import Link from 'next/link';

const Wrapper = styled.div`
  width: 50vh;
  height: 100%;
  align-self: flex-start;
  justify-content: flex-start;
  padding: 64px 0;
`;

const Content = styled.div`
  width: 100%;
  padding: 12px;
  height: 20vh;
  border: 1px solid #0070f3;
  margin-top: 20px;
  line-height: 24px;
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

const DeleteButton = styled.a`
  display: flex;
  width: 100%;
  border: 1px solid white;
  border-radius: 8px;
  height: 40px;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: red;
  margin-bottom: 12px;
`;


export default () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState();

  useEffect(() => {
    if (!id) return;
    loadPost();
  }, [id]);

  const loadPost = async () => {
    const { data } = await api.get(`board/${id}`);
    setPost(data);
  }

  if (!post) {
    return <></>;
  }

  const { title, content, nickname, invite_url, category, created_at } = post;

  const onDelete = async () => {
    const password = prompt("비밀번호를 입력하세요.");

    const params = new URLSearchParams()
    for (const [key, value] of Object.entries({ nickname, password })) {
      params.append(key, value);
    }

    try {
      await api.delete(`board/${id}`,
        {
          data: params,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );
    } catch (err) {
      alert('비밀번호가 일치하지 않습니다 :(');
      return;
    }
    
    alert('삭제되었습니다!');
    window.location.href = '/';
  };

  return (
    <>
      <Wrapper>
        <h1>{title}</h1>
        <Link
          href={invite_url}
        >
          <h3 style={{ color: 'blue', cursor: 'pointer' }}>{invite_url}</h3>
        </Link>

        <span>작성자: <strong>{nickname}</strong></span>
        <p>카테고리: <strong>{category.name}</strong></p>

        <Content>
          {content.split('\n').map(v => (
            <div>
              {v}
            </div>
          ))}
        </Content>

        <DeleteButton onClick={onDelete}>
          삭제
        </DeleteButton>

        <ReturnButton href='/'>
          메인 화면
        </ReturnButton>
      </Wrapper>

    </>
  )
}