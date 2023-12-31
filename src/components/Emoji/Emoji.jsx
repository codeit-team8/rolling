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
  padding: 0.4rem 0.8rem;
  align-items: center;
  gap: 0.2rem;
  border-radius: 32px;
  background: rgba(0, 0, 0, 0.54);
  cursor: pointer;

  @media (min-width: 768px) {
    padding: 0.6rem 1.2rem;
  }
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
  padding-left: 0.2rem;
  letter-spacing: -0.007px;
`;
