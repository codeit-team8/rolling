import React from 'react';
import PrimaryButton from '@/styles/button/PrimaryButton.jsx';
import OutlineButton from '@/styles/button/OutlineButton.jsx';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import PostHeader from '@/components/Header/PostHeader.jsx';
import PlusMessageCard from '@/components/MessageCard/PlusMessageCard';
import MessageCard from '@/components/MessageCard/MessageCard';
import { getRecipientsId } from '@/api/recipients';
import { BACKGROUND_COLOR_PALETTE } from '@/util/backgroundColors.jsx';

function Edit() {
  const [isEdit, setIsEdit] = useState(false);
  const handleEditClick = () => {
    if (isEdit) {
      console.log('true상태!!');
    } else {
      console.log('false상태!!');
    }
    setIsEdit(!isEdit);
  };

  const [postName, setPostName] = useState('');
  const [postMessageCount, setPostMessageCount] = useState(0);
  const [reactions, setReactions] = useState([]);
  const [profileImages, setProfileImages] = useState([]);

  const [messageContents, setMessageContents] = useState();
  const [background, setBackground] = useState('var(--orange-200, #ffe2ad)');

  const { recipientId } = useParams();

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

  const handlePostHeader = (name, messageCount, topReactions, recentMessages) => {
    setPostName(name);
    setPostMessageCount(messageCount);
    setReactions([...topReactions].slice(0, 3));
    const recentPostProfileImages =
      recentMessages.length === 0 ? [] : recentMessages.map((message) => message.profileImageURL).slice(0, 3);
    setProfileImages(recentPostProfileImages);
  };

  const 

  return (
    <>
      <PostHeader name={postName} messageCount={postMessageCount} reactions={reactions} profileImages={profileImages} />
      <PostContainer $backgroundColor={background.color} $imageUrl={background.backgroundImageURL}>
        {!isEdit && (
          <EditButton $size="H40" type="button" onClick={handleEditClick}>
            편집하기
          </EditButton>
        )}

        <CardContainer>
          {!isEdit && <PlusMessageCard />}
          {messageContents &&
            messageContents.map((messageCard) => (
              <MessageCard value={messageCard} key={messageCard.id} isEdit={isEdit} />
            ))}
        </CardContainer>
        {isEdit && (
          <SaveButtonContainer>
            <SaveButton $size="big">저장하기</SaveButton>
          </SaveButtonContainer>
        )}
      </PostContainer>
    </>
  );
}

export default Edit;

const CardContainer = styled.div`
  padding: 4.2rem 2rem 0;
  display: grid;
  grid-template-columns: repeat(1, 32rem);
  grid-template-rows: repeat(auto-fit, 23rem);
  justify-content: center;
  gap: 2.4rem;
  margin: 0 auto;
  align-items: center;

  overflow: scroll;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 35.4rem);
    grid-template-rows: repeat(auto-fit, 28.4rem);
    gap: 3rem;
    padding: 4.9rem 2.4rem;
    height: 120rem;
  }

  @media (min-width: 1248px) {
    padding: 6rem 2.4rem;
    grid-template-columns: repeat(3, 38.4rem);
    grid-template-rows: repeat(auto-fit, 28rem);
  }
`;

const PostContainer = styled.div`
  padding: 4.2rem 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.4rem;
  margin: 0 auto;
  align-items: center;
  height: 100vh;
  background: ${({ $backgroundColor, $imageUrl }) =>
    $imageUrl
      ? `linear-gradient(180deg, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0.54) 100%), url(${$imageUrl})`
      : `${$backgroundColor}`};
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  overflow: scroll;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    gap: 3rem;
    padding: 4.9rem 2.4rem;
    height: 120rem;
  }

  @media (min-width: 1248px) {
    padding: 6rem 2.4rem;
    grid-template-columns: repeat(3, 38.4rem);
    grid-template-rows: repeat(auto-fit, 28rem);
  }
`;

const SaveButtonContainer = styled.div`
  bottom: 2.4rem;
  position: absolute;
  margin-top: 4.2rem;
  padding: 2.4rem 2rem;
  background-color: @media (min-width: 768px) {
    margin-top: 13.2rem;
    padding: 2.4rem;
  }

  @media (min-width: 1248px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
  }
`;

const SaveButton = styled(PrimaryButton)`
  width: 100%;

  @media (min-width: 1248px) {
    width: 28rem;
  }
`;

const EditButton = styled(OutlineButton)`
  display: flex;
  border-radius: 8px;
  font-size: 1.6rem;
`;
