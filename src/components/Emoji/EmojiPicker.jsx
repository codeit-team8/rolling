import addImg from '@/assets/icons/add-20.svg';
import styled from 'styled-components';

export default function EmojiPicker() {
  return (
    <EmojiPickerContainer>
      <EmojiImg src={addImg} />
    </EmojiPickerContainer>
  );
}

const EmojiPickerContainer = styled.div`
  padding: 0.6rem 0.8rem;
  border: 1px solid var(--gray-300, #ccc);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const EmojiImg = styled.img`
  @media (min-width: 768px) {
  }
`;
