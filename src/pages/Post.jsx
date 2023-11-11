import styled from 'styled-components';
import PostHeader from '@/components/Header/PostHeader.jsx';
import MessageCard from '@/components/MessageCard/MessageCard';
import PlusMessageCard from '@/components/MessageCard/PlusMessageCard';

function Post() {
  return (
    <>
      <PostHeader profileImages={['', '', '', '', '']} />
      <PostContainer>
        <PlusMessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
      </PostContainer>
    </>
  );
}

const PostContainer = styled.div`
  padding: 4.2rem 2rem 0;
  display: grid;
  justify-content: center;
  gap: 2.4rem;
  // max-width: 124.8rem;
  margin: 0 auto;

  background: var(--orange-200, #ffe2ad);

  @media (min-width: 768px) {
    grid-template-rows: auto 2fr auto;
    grid-template-columns: auto 2fr auto;
    gap: 3rem;
    padding: 4.9rem 2.4rem;
  }

  @media (min-width: 1248px) {
    padding: 6rem 2.4rem;
    grid-template: auto 3fr auto / auto 3fr auto;
  }
`;

export default Post;
