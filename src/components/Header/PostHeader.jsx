import Share from '@/components/Share/Share.jsx';
import EmojiAdd from '@/components/Emoji/EmojiAdd.jsx';
import ProfileImageGroup from '@/components/profileImage/ProfileImageGroup.jsx';
import {
  ButtonContainer,
  HeaderService,
  HeaderServiceContainer,
  PostHeaderContainer,
  PostHeaderLine,
  PostUser,
  PostUserContainer,
  PostUserCounter,
  PostUserCounterContainer,
  ProfileDivLine,
} from '@/components/Header/PostHeader.style.jsx';
import { ButtonDivLine } from '@/styles/button/ButtonDivLine.jsx';
import EmojiList from '@/components/Emoji/EmojiList';

function PostHeader({ name, messageCount, profileImages, recipientId, emojiData, handleEmojiSelect }) {
  return (
    <PostHeaderContainer>
      <PostUserContainer>
        <PostUser>{`To. ${name}`}</PostUser>
      </PostUserContainer>
      <PostHeaderLine />
      <HeaderServiceContainer>
        <PostUserCounterContainer>
          <ProfileImageGroup profileImages={profileImages} messageCount={messageCount}/>
          <PostUserCounter>
            <h1>
              <span>{messageCount}</span>
              명이 작성했어요!
            </h1>
          </PostUserCounter>
        </PostUserCounterContainer>
        <ProfileDivLine />
        <HeaderService>
          <EmojiList emojiData={emojiData} />
          <ButtonContainer>
            <EmojiAdd handleEmojiSelect={handleEmojiSelect} />
            <ButtonDivLine />
            <Share recipientId={recipientId} />
          </ButtonContainer>
        </HeaderService>
      </HeaderServiceContainer>
    </PostHeaderContainer>
  );
}

export default PostHeader;
