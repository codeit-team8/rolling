import styled, { css } from 'styled-components';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EmojiPopover from '@/components/Emoji/EmojiPopover';
import Emoji from '@/components/Emoji/Emoji';
// import mockReactions from '@/assets/mock/mockReactions';
import arrowDownImg from '@/assets/icons/arrow_down.svg';
import { getReactionOfRecipient } from '@/api/recipients';

// TODO: emoji api로 받아오기
function EmojiList() {
  const [isOpen, setIsOpen] = useState(false);

  const { recipientId } = useParams();

  // const { results } = mockReactions;

  // 리액션 불러오기
  const handleGetEmoji = useCallback(async () => {
    const response = await getReactionOfRecipient({ id: recipientId });
    const { results } = response;
  }, [recipientId]);

  // 아무것도 없을 때는 빈 배열을 슬라이스해서 에러가 뜬다.
  const defaultReactions = [...results].slice(0, 3);
  const popoverReactions = [...results].slice(3, 11);

  const handleArrowClick = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    handleGetEmoji();
  }, [handleGetEmoji]);

  return (
    <EmojiListContainer>
      <Box>
        <DefaultEmojis>
          {defaultReactions.map((el) => (
            <Emoji reaction={el} key={el.emoji} />
          ))}
        </DefaultEmojis>
        <ArrowButton onClick={handleArrowClick} type="button">
          <img src={arrowDownImg} alt="드롭다운" />
        </ArrowButton>
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
