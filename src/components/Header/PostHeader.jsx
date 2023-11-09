import styled from 'styled-components';
import HeaderLine from '@/styles/HeaderLine.jsx';

function PostHeader() {

  return (
    <PostHeaderContainer>
      <PostUserContainer>
        <PostUser>To. Ashley Kim</PostUser>
      </PostUserContainer>
      <HeaderLine />
      <HeaderServiceContainer>
        <HeaderService>

        </HeaderService>
      </HeaderServiceContainer>
    </PostHeaderContainer>
  );
}

export default PostHeader;

const PostHeaderContainer = styled.header`
  width: 100%;
  height: 10.4rem;
`;

const PostUserContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 20px;
`;

const PostUser = styled.h1`
  color: var(--gray-800, #2b2b2b);
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.8rem;
  letter-spacing: -0.018rem;
`;

const HeaderServiceContainer = styled.div`
  display: flex;
  padding: 0.8rem 0;
  align-items: center;
`;

const HeaderService = styled.div`
  display: flex;
  padding: 0 2rem;
  align-items: center;
`;
