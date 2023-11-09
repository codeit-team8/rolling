import styled from 'styled-components';
import HeaderLine from '@/styles/HeaderLine.jsx';
import EmojiList from '@/components/Emoji/EmojiList.jsx';
import Share from '@/components/Share/Share.jsx';
import EmojiAdd from '@/components/Emoji/EmojiAdd.jsx';
import ProfileImageGroup from '@/styles/profileImage/ProfileImageGroup.jsx';

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

const PostHeaderContainer = styled.header`
  width: 100%;
  height: 10.4rem;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    height: 6.8rem;
    padding: 0 2.4rem;
    gap: 6.8rem;
  }

  @media (min-width: 1248px) {
    max-width: 120rem;
    margin: 0 auto;
    padding: 0;
    gap: 26.3rem;
  }
`;

const PostUserContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1.2rem 2rem;

  @media (min-width: 768px) {
    padding: 0;
  }
`;

const PostHeaderLine = styled(HeaderLine)`
  @media (min-width: 768px) {
    display: none;
  }
`;

const PostUserCounterContainer = styled.div`
  display: none;

  @media (min-width: 1248px) {
    display: flex;
    gap: 1.1rem;
  }
`;

const PostUserCounter = styled.div`
  display: flex;
  h1 {
    color: var(--gray-900, #181818);
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.7rem;

    span {
      font-size: 1.8rem;
      font-weight: 700;
    }
  }
`;

const PostUser = styled.h1`
  color: var(--gray-800, #2b2b2b);
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.8rem;
  letter-spacing: -0.018rem;

  @media (min-width: 768px) {
    font-size: 2.8rem;
    line-height: 4.2rem;
    letter-spacing: -0.028rem;
  }
`;

const HeaderServiceContainer = styled.div`
  display: flex;
  padding: 0.8rem 0;
  align-items: center;

  @media (min-width: 1248px) {
    gap: 2.8rem;
  }
`;

const HeaderService = styled.div`
  display: flex;
  padding: 0 2rem;
  gap: 0.2rem;
  align-items: flex-start;

  @media (min-width: 1248px) {
    padding: 0;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

const ButtonDivLine = styled.div`
  width: 1px;
  height: 2.8rem;
  background: var(--gray-200, #eee);
`;

const ProfileDivLine = styled(ButtonDivLine)`
  display: none;

  @media (min-width: 1248px) {
    display: block;
  }
`;
