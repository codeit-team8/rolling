import styled, { css } from 'styled-components';
import { useState } from 'react';
import EmojiPopover from '@/components/Emoji/EmojiPopover';
import Emoji from './Emoji';
import mockReactions from '@/assets/mock/mockReactions';
import arrowDownImg from '@/assets/icons/arrow_down.svg';
import EmojiAdd from './EmojiAdd';

// TODO: emoji api로 받아오기
export default function EmojiList() {
  const [isOpen, setIsOpen] = useState(false);
  const { results } = mockReactions;
  const defaultReactions = [...results].slice(0, 3);
  const popoverReactions = [...results].slice(3, 11);

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
        <ArrowButton onClick={handleArrowClick} type="button">
          <img src={arrowDownImg} alt="" />
        </ArrowButton>
        {isOpen && <EmojiPopover popoverReactions={popoverReactions} />}
      </Box>
      <EmojiAdd />
    </EmojiListContainer>
  );
}

const FlexCenter = css`
  display: flex;
  align-items: center;
`;

const Box = styled.div`
  ${FlexCenter}
  position: relative;
`;

const EmojiListContainer = styled.div`
  ${FlexCenter}
  gap: 0.2rem;
`;

const DefaultEmojis = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const ArrowButton = styled.button`
  ${FlexCenter}
  justify-content: center;
  width: 3.6rem;
  height: 3.6rem;
  padding: 0.6rem;
`;
