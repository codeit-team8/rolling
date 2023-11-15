import styled, { css } from 'styled-components';
import { useState } from 'react';
import EmojiPopover from '@/components/Emoji/EmojiPopover';
import Emoji from '@/components/Emoji/Emoji';
import arrowDownImg from '@/assets/icons/arrow_down.svg';

function EmojiList({ emojiData }) {
  const [isOpen, setIsOpen] = useState(false);

  const defaultReactions = [...emojiData].slice(0, 3);
  const popoverReactions = [...emojiData].slice(3, 11);

  const handleArrowClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <EmojiListContainer>
      <Box>
        <DefaultEmojis>
          {defaultReactions.map((el) => (
            <Emoji reaction={el} key={el.emoji} />
          ))}
        </DefaultEmojis>
        {popoverReactions.length > 0 && (
          <ArrowButton onClick={handleArrowClick} type="button">
            <img src={arrowDownImg} alt="드롭다운" />
          </ArrowButton>
        )}
        {isOpen && <EmojiPopover popoverReactions={popoverReactions} />}
      </Box>
    </EmojiListContainer>
  );
}

export default EmojiList;

const FlexCenter = css`
  display: flex;
  align-items: center;
`;

const Box = styled.div`
  ${FlexCenter};
  position: relative;
`;

const EmojiListContainer = styled.div`
  ${FlexCenter};
  width: 20rem;
  gap: 0.2rem;

  @media (min-width: 768px) {
    width: 100%;
  }
`;

const DefaultEmojis = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const ArrowButton = styled.button`
  ${FlexCenter};
  justify-content: center;
  width: 3.6rem;
  height: 3.6rem;
  padding: 0.6rem;
`;
