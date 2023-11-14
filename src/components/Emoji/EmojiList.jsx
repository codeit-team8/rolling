import styled, { css } from 'styled-components';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EmojiPopover from '@/components/Emoji/EmojiPopover';
import Emoji from '@/components/Emoji/Emoji';
// import mockReactions from '@/assets/mock/mockReactions';
import arrowDownImg from '@/assets/icons/arrow_down.svg';
import { getReactionOfRecipient } from '@/api/recipients';
import useAsync from '@/hooks/useAsync';

// TODO: emoji api로 받아오기
function EmojiList() {
  const [isOpen, setIsOpen] = useState(false);
  const [reactions, setReactions] = useState([]);
  const [, , getReactionOfRecipientAsync] = useAsync(getReactionOfRecipient);
  const { recipientId } = useParams();

  const getReactions = useCallback(async () => {
    const { result } = await getReactionOfRecipientAsync({ id: recipientId });
    setReactions(result);
  }, [getReactionOfRecipientAsync, recipientId]);

  // const { results } = mockReactions;
  const defaultReactions = [...reactions].slice(0, 3);
  const popoverReactions = [...reactions].slice(3, 11);

  const handleArrowClick = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    getReactions();
  }, [reactions, getReactions]);

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
