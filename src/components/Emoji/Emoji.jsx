import styled from 'styled-components';

function Emoji() {
  return (
    <EmojiContainer>
      <EmojiElement>😆</EmojiElement>
      <EmojiCount>1</EmojiCount>
    </EmojiContainer>
  );
}

export default Emoji;

const EmojiContainer = styled.div`
  display: flex;
  width: fit-content;
  height: 2.8rem;
  padding: 0.4rem 0.8rem;
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
  color: #fff;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: -0.007px;
`;
