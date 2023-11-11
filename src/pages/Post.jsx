import styled from 'styled-components';
import PostHeader from '@/components/Header/PostHeader.jsx';
import MessageCard from '@/components/MessageCard/MessageCard';

function Post() {
  return (
    <>
      <PostHeader profileImages={['', '', '', '', '']} />
      <PostContainer>
        <MessageCard />
      </PostContainer>
    </>
  );
}

const PostContainer = styled.div`
  padding: 4.2rem 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.4rem;
  max-width: 124.8rem;
  margin: auto;
  background: var(--orange-200, #ffe2ad);

  @media (min-width: 768px) {
    gap: 3rem;
    padding: 4.9rem 2.4rem;
  }

  @media (min-width: 1248px) {
    padding: 6rem 2.4rem;
  }
`;

export default Post;
