import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import PostHeader from '@/components/Header/PostHeader.jsx';
import MessageCardList from '@/components/MessageCard/MessageCardList';
import PlusMessageCard from '@/components/MessageCard/PlusMessageCard';
import { getMessages } from '@/api/message';

function Post() {
  const [messageContents, setMessageContents] = useState([]);
  const { recipientId } = useParams();

  const getMessageContents = useCallback(async () => {
    const { results } = await getMessages({ recipientId });
    setMessageContents(results);
  }, [getMessages]);

  useEffect(() => {
    getMessageContents();
  }, [getMessageContents]);

  return (
    <>
      <PostHeader profileImages={['', '', '', '', '']} />
      <PostContainer>
        <PlusMessageCard />
        {messageContents && <MessageCardList cards={messageContents} />}
      </PostContainer>
    </>
  );
}

const PostContainer = styled.div`
  padding: 4.2rem 2rem 0;
  display: grid;
  justify-content: center;
  gap: 2.4rem;
  margin: 0 auto;
  align-items: center;

  background: var(--orange-200, #ffe2ad);

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 38.4rem);
    grid-template-rows: repeat(auto-fit, 28rem);
    gap: 3rem;
    padding: 4.9rem 2.4rem;
  }

  @media (min-width: 1248px) {
    padding: 6rem 2.4rem;
    grid-template-columns: repeat(3, 38.4rem);
    grid-template-rows: repeat(auto-fit, 28rem);
  }
`;

export default Post;
