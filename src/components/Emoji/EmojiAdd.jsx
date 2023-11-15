import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import EmojiPicker from 'emoji-picker-react';
import addImg from '@/assets/icons/add-20.svg';
import OutlineButton from '@/styles/button/OutlineButton.jsx';
import { reactionToRecipient } from '@/api/recipients';

export default function EmojiAdd() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState(null);

  const { recipientId } = useParams();

  const handleOpenClick = () => {
    setIsOpen((prev) => !prev);
  };

  const postEmoji = useCallback(async (value, emojiObject) => {
    await reactionToRecipient(value);
    // 여기에 setState 쓰기 바로 보여짐
  }, []);

  const handleEmojiSelect = (emojiObject, event) => {
    setSelectedEmoji(emojiObject);
    postEmoji({ id: recipientId, emoji: selectedEmoji.emoji, type: 'increase' });
  };

  // useEffect

  return (
    <EmojiAddContainer>
      <Box onClick={handleOpenClick} $size="H36" type="button">
        <EmojiImg src={addImg} alt="이모지 추가" />
        <Text>추가</Text>
      </Box>
      {isOpen && (
        <EmojiPickerBox>
          <EmojiPicker width="30.6914rem" height="39.2746rem" lazyLoadEmojis="true" onEmojiClick={handleEmojiSelect} />
        </EmojiPickerBox>
      )}
    </EmojiAddContainer>
  );
}

const EmojiAddContainer = styled.div`
  position: relative;
`;

const EmojiImg = styled.img`
  @media (min-width: 768px) {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

const EmojiPickerBox = styled.div`
  position: absolute;
  flex-shrink: 0;
  top: 100%;
  margin-top: 0.5rem;
  right: -6rem;
  z-index: 2;

  @media (min-width: 768px) {
    right: 0;
  }
`;

const Text = styled.div`
  display: none;
  color: var(--gray-900, #181818);
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.4rem;

  @media (min-width: 768px) {
    display: block;
  }
`;

const Box = styled(OutlineButton)`
  display: flex;
  padding: 0.6rem 0.8rem;
  width: 3.6rem;
  height: 3.2rem;
  border-radius: 8px;

  @media (min-width: 768px) {
    padding: 0.6rem 1.6rem;
    width: 8.8rem;
    height: 3.6rem;
    gap: 0.4rem;
  }
`;
