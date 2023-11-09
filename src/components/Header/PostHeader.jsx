import styled from 'styled-components';
import HeaderLine from '@/styles/HeaderLine.jsx';
import EmojiList from '@/components/Emoji/EmojiList.jsx';
import Share from '@/components/Share/Share.jsx';
import EmojiAdd from '@/components/Emoji/EmojiAdd.jsx';

function PostHeader() {
  return (
    <PostHeaderContainer>
      <PostUserContainer>
        <PostUser>To. Ashley Kim</PostUser>
      </PostUserContainer>
      <PostHeaderLine />
      <HeaderServiceContainer>
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
    height: 6.8rem;
    padding: 0 2.4rem;
    gap: 6.8rem;
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
`;

const HeaderService = styled.div`
  display: flex;
  width: 100%;
  padding: 0 2rem;
  gap: 0.2rem;
  align-items: flex-start;
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
