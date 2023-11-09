import { useState } from 'react';
import styled from 'styled-components';
import EmojiPicker from 'emoji-picker-react';
import addImg from '@/assets/icons/add-20.svg';

export default function EmojiAdd() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <EmojiAddContainer>
      <Box onClick={handleOpenClick} type="button">
        <EmojiImg src={addImg} alt="이모지 추가" />
        <Text>추가</Text>
      </Box>
      {isOpen && (
        <EmojiPickerBox>
          <EmojiPicker width="30.6914rem" height="39.2746rem" />
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
  right: 0;
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

const Box = styled.button`
  display: flex;
  padding: 0.6rem 0.8rem;
  justify-content: center;
  align-items: center;
  width: 3.6rem;
  height: 3.2rem;
  border: 1px solid var(--gray-300, #ccc);
  border-radius: 8px;
  gap: 1rem;

  @media (min-width: 768px) {
    padding: 0.6rem 1.6rem;
  }
`;
