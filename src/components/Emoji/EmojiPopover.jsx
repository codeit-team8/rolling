import styled from 'styled-components';

// TODO : 팝오버 컨테이너에 이모지 컴포넌트 들어가야 함.

function EmojiPopover() {
  return <EmojiPopoverContainer></EmojiPopoverContainer>;
}

export default EmojiPopover;

const EmojiPopoverContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  width: 20.3rem;
  height: 9.8rem;
  padding: 1.6rem 1.6rem 1.6rem 0.9rem;
  align-items: flex-start;
  gap: 0.8rem;
  border-radius: 8px;
  border: 0.1rem solid #b6b6b6;
  background: var(--white);
  box-shadow: 0 0.2rem 1.2rem 0 rgba(0, 0, 0, 0.08);

  @media (min-width: 768px) {
    width: 24.8rem;
    height: 13.4rem;
    padding: 2.4rem;
  }

  @media (min-width: 1248px) {
    width: 31.2rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;