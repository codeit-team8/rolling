import Share from '@/components/Share/Share.jsx';
import EmojiAdd from '@/components/Emoji/EmojiAdd.jsx';
import ProfileImageGroup from '@/styles/profileImage/ProfileImageGroup.jsx';
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
import Emoji from '@/components/Emoji/Emoji.jsx';
import EmojiList from '../Emoji/EmojiList';

function PostHeader({ name, messageCount, reactions, profileImages }) {
  return (
    <PostHeaderContainer>
      <PostUserContainer>
        <PostUser>{`To. ${name}`}</PostUser>
      </PostUserContainer>
      <PostHeaderLine />
      <HeaderServiceContainer>
        <PostUserCounterContainer>
          <ProfileImageGroup profileImages={profileImages} />
          <PostUserCounter>
            <h1>
              <span>{messageCount}</span>
              명이 작성했어요!
            </h1>
          </PostUserCounter>
        </PostUserCounterContainer>
        <ProfileDivLine />
        <HeaderService>
          <EmojiList />
          {/* {reactions.length > 3 && <EmojiList />} */}
          {/* {reactions.length !== 0 && reactions.map((el) => <Emoji reaction={el} key={el.emoji} />)} */}
          <ButtonContainer>
            <EmojiAdd />
            <ButtonDivLine />
            <Share />
          </ButtonContainer>
        </HeaderService>
      </HeaderServiceContainer>
    </PostHeaderContainer>
  );
}

export default PostHeader;
