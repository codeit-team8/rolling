import EmojiList from '@/components/Emoji/EmojiList.jsx';
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

function PostHeader({ profileImages }) {
  const profilePosting = [...profileImages].slice(0, 4);
  return (
    <PostHeaderContainer>
      <PostUserContainer>
        <PostUser>To. Ashley Kim</PostUser>
      </PostUserContainer>
      <PostHeaderLine />
      <HeaderServiceContainer>
        <PostUserCounterContainer>
          <ProfileImageGroup profileImages={profilePosting} />
          <PostUserCounter>
            <h1>
              <span>600</span>
              명이 작성했어요!
            </h1>
          </PostUserCounter>
        </PostUserCounterContainer>
        <ProfileDivLine />
        <HeaderService>
          <EmojiList />
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
