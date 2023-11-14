import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import PostHeader from '@/components/Header/PostHeader.jsx';
import MessageCardList from '@/components/MessageCard/MessageCardList';
import PlusMessageCard from '@/components/MessageCard/PlusMessageCard';
import { getRecipientsId } from '@/api/recipients';
import { BACKGROUND_COLOR_PALETTE } from '@/util/backgroundColors.jsx';

function Post() {
  const [postName, setPostName] = useState('');
  const [postMessageCount, setPostMessageCount] = useState(0);
  const [reactions, setReactions] = useState([]);
  const [profileImages, setProfileImages] = useState([]);

  const [messageContents, setMessageContents] = useState();
  const [background, setBackground] = useState('var(--orange-200, #ffe2ad)');

  const { recipientId } = useParams();

  const handlePostHeader = (name, messageCount, topReactions, recentMessages) => {
    setPostName(name);
    setPostMessageCount(messageCount);
    setReactions([...topReactions].slice(0, 3));
    const recentPostProfileImages =
      recentMessages.length === 0 ? [] : recentMessages.map((message) => message.profileImageURL).slice(0, 3);
    setProfileImages(recentPostProfileImages);
  };

  const handleRollingPaper = useCallback(async () => {
    const results = await getRecipientsId({ id: recipientId });
    const { name, messageCount, backgroundColor, backgroundImageURL, topReactions } = { ...results };
    const { color } = BACKGROUND_COLOR_PALETTE[backgroundColor];
    const recentMessages = [...results.recentMessages];

    handlePostHeader(name, messageCount, topReactions, recentMessages);

    setMessageContents(recentMessages);
    setBackground({ color, backgroundImageURL });
  }, [recipientId]);

  useEffect(() => {
    handleRollingPaper();
  }, [handleRollingPaper]);

  return (
    <>
      <PostHeader name={postName} messageCount={postMessageCount} reactions={reactions} profileImages={profileImages} />
      <PostContainer $backgroundColor={background.color} $imageUrl={background.backgroundImageURL}>
        <PlusMessageCard />
        {messageContents && <MessageCardList cards={messageContents} />}
      </PostContainer>
    </>
  );
}

export default Post;

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
  background: ${({ $backgroundColor, $imageUrl }) => 
          ($imageUrl
            ? `linear-gradient(180deg, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0.54) 100%), url(${$imageUrl})`
            : `${$backgroundColor}`)};
  background-size: cover;
  background-position: center;

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
