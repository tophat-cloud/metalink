import { useEffect, useState } from "react";
import styled from "styled-components"
import { useRouter } from 'next/router'
import api from "../../utils/api";

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

  const { title, content, nickname, invite_url, created_at } = post;

  return (
    <>
      <Wrapper>
        <h1>{title}</h1>
        <h3>{invite_url}</h3>

        <span>작성자: {nickname}</span>
        <p>카테고리: 제페토</p>

        <Content>
          {content}
        </Content>

        <ReturnButton href="/">
          메인 화면
        </ReturnButton>
      </Wrapper>

    </>
  )
}