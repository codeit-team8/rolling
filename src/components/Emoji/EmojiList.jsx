import styled, { css } from 'styled-components';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EmojiPopover from '@/components/Emoji/EmojiPopover';
import Emoji from '@/components/Emoji/Emoji';
import arrowDownImg from '@/assets/icons/arrow_down.svg';
import { getReactionOfRecipient } from '@/api/recipients';

// TODO: emoji api로 받아오기
function EmojiList() {
  const [isOpen, setIsOpen] = useState(false);
  const [emojiData, setEmojiData] = useState([]);

  const { recipientId } = useParams();

  // 리액션 불러오기
  const handleGetEmoji = useCallback(async () => {
    const response = await getReactionOfRecipient({ id: recipientId });
    const { results } = { ...response };
    setEmojiData(() => [...results]); // 불러오는 데이터를 state로 관리하니 해결했다 (마운트 단계에서 아무 데이터가 없어서 처리하는 과정에서 에러가 났던 거다.)
  }, [recipientId]);

  const defaultReactions = [...emojiData].slice(0, 3);
  const popoverReactions = [...emojiData].slice(3, 11);

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
