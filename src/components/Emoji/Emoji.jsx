import styled from 'styled-components';

function Emoji({ reaction }) {
  return (
    <EmojiContainer id={reaction.id}>
      <EmojiElement>{reaction.emoji}</EmojiElement>
      <EmojiCount>{reaction.count}</EmojiCount>
    </EmojiContainer>
  );
}

export default Emoji;

const EmojiContainer = styled.div`
  display: flex;
  width: fit-content;
  height: 2.8rem;
  padding: 0.4rem 0.7rem;
  align-items: flex-start;
  gap: 0.2rem;
  border-radius: 32px;
  background: rgba(0, 0, 0, 0.54);
`;

const EmojiElement = styled.span`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: -0.007rem;
  margin: 0 0.4rem 0 0.2rem;
`;

const EmojiCount = styled.span`
  color: var(--white);
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: -0.007px;
`;
