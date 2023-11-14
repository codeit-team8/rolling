import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import PostHeader from '@/components/Header/PostHeader.jsx';
import MessageCardList from '@/components/MessageCard/MessageCardList';
import PlusMessageCard from '@/components/MessageCard/PlusMessageCard';
import { getRecipientsId } from '@/api/recipients';
import { BACKGROUND_COLOR_PALETTE } from '@/util/backgroundColors.jsx';

function Post() {
  const [messageContents, setMessageContents] = useState();
  const [background, setBackground] = useState('var(--orange-200, #ffe2ad)');
  const { recipientId } = useParams();

  const getRollingPaper = useCallback(async () => {
    const results = await getRecipientsId({ id: recipientId });
    setMessageContents(results.recentMessages);
    const { backgroundColor, backgroundImageURL } = results;
    const color = BACKGROUND_COLOR_PALETTE[backgroundColor].color;
    setBackground({ color, backgroundImageURL });
  }, [getRecipientsId]);

  useEffect(() => {
    getRollingPaper();
  }, [getRollingPaper]);

  return (
    <>
      <PostHeader profileImages={['', '', '', '', '']} />
      <PostContainer $backgroundColor={background.color} $imageUrl={background.backgroundImageURL}>
        <PlusMessageCard />
        {messageContents && <MessageCardList cards={messageContents} />}
      </PostContainer>
    </>
  );
}

const PostContainer = styled.div`
  padding: 4.2rem 2rem 0;
  display: grid;
  grid-template-columns: repeat(1, 32rem);
  grid-template-rows: repeat(auto-fit, 23rem);
  justify-content: center;
  gap: 2.4rem;
  margin: 0 auto;
  align-items: center;
  height: 100vh;

  background: ${({ $backgroundColor, $imageUrl }) => ($imageUrl ? `url(${$imageUrl})` : `${$backgroundColor}`)};

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
