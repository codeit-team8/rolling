import styled from 'styled-components';
import mockBackgroundImg from '@/assets/mock/mockBackgroundImg';
import selectIcon from '@/assets/icons/select.svg';
import { useState } from 'react';

const CATEGORIES = ['컬러', '이미지'];

const OPTIONS = {
  backgroundColor: [
    'var(--orange-200, #FFE2AD)',
    'var(--purple-200, #ECD9FF)',
    'var(--blue-200, #B1E4FF)',
    'var(--green-200, #D0F5C3)',
  ],
  imageUrls: mockBackgroundImg.imageUrls,
};

function Option({ selectOption }) {
  const [isCategorySelect, setIsCategorySelect] = useState(0);
  const [isActive, setIsActive] = useState(OPTIONS[selectOption][0]);
  const [selectedChipIndex, setSelectedChipIndex] = useState(0);

  const handleClick = (index) => {
    setIsCategorySelect(index);
    setSelectedChipIndex(0);
  };

  const handleChip = (index) => {
    setIsActive((prev) => !prev);
    setSelectedChipIndex(index);
  };

  return (
    <OptionContainer>
      <ButtonContainer>
        {CATEGORIES.map((category, index) => (
          <Button key={category} onClick={() => handleClick(index)} $isActive={isCategorySelect === index}>
            {category}
          </Button>
        ))}
      </ButtonContainer>
      <CardContainer>
        {isCategorySelect === 0 &&
          OPTIONS.backgroundColor.map((color, index) => (
            <ColorChip
              key={color}
              onClick={() => handleChip(index)}
              style={{ backgroundColor: color }}
              $isSelected={selectedChipIndex === index}
            >
              {selectedChipIndex === index && <SelectIcon src={selectIcon} alt="선택아이콘" />}
            </ColorChip>
          ))}
        {isCategorySelect === 1 &&
          OPTIONS.imageUrls.map((imageURL, index) => (
            <ImageChip
              key={imageURL}
              onClick={() => handleChip(index)}
              $imageUrls={imageURL}
              $isSelected={selectedChipIndex === index}
            >
              {selectedChipIndex === index && <SelectIcon src={selectIcon} alt="선택아이콘" />}
            </ImageChip>
          ))}
      </CardContainer>
    </OptionContainer>
  );
}

export default Option;

const OptionContainer = styled.div`
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const ButtonContainer = styled.div`
  align-items: flex-start;
  width: 236px;
  height: 40px;
  display: flex;
  flex-direction: row;
  margin-bottom: 28px;
  background: var(--gray-100, #f6f6f6);
  border-radius: 6px;

  @media (min-width: 768px) {
    margin-bottom: 40px;
    width: 244px;
  }
`;

const CardContainer = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(2, 154px);
  grid-template-rows: repeat(2, 154px);
  justify-items: center;
  align-items: center;
  margin: auto;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

const ColorChip = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15.4rem;
  height: 15.4rem;
  flex-shrink: 0;
  border-radius: 16px;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0.2rem 1.2rem 0 rgba(0, 0, 0, 0.08);
  cursor: pointer;
  position: relative;

  @media (min-width: 768px) {
    width: 16.8rem;
    height: 16.8rem;
  }
`;

const ImageChip = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15.4rem;
  height: 15.4rem;
  flex-shrink: 0;
  border-radius: 16px;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0.2rem 1.2rem 0 rgba(0, 0, 0, 0.08);
  background: ${(props) => `url(${props.$imageUrls})`};
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  position: relative;

  @media (min-width: 768px) {
    width: 16.8rem;
    height: 16.8rem;
  }
`;
const Button = styled.button`
  width: 122px;
  padding: 7px 14px;
  font-size: 16px;
  text-align: center;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.16px;
  border-radius: 6px;
  color: ${({ $isActive }) => ($isActive ? 'var(--purple-700, #861dee)' : 'none')};
  background: ${({ $isActive }) => ($isActive ? 'var(--white, #fff)' : 'none')};
  outline: ${({ $isActive }) => ($isActive ? '2px solid var(--purple-600, #9935ff)' : 'none')};
`;

const SelectIcon = styled.img`
  width: 44px;
  height: 44px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
