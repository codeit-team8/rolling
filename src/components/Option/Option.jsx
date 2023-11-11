import { useState } from 'react';
import MOCK_BACKGROUND_IMG from '@/assets/mock/mockBackgroundImg';
import selectIcon from '@/assets/icons/select.svg';
import SelectIcon from '@/styles/button/SelectIcon';
import {
  OptionContainer,
  ButtonContainer,
  CardContainer,
  ColorChip,
  ImageChip,
  CategoryButton,
} from '@/components/Option/Option.style';

const CATEGORIES = ['컬러', '이미지'];

const OPTIONS = {
  backgroundColor: [
    'var(--orange-200, #FFE2AD)',
    'var(--purple-200, #ECD9FF)',
    'var(--blue-200, #B1E4FF)',
    'var(--green-200, #D0F5C3)',
  ],
  imageUrls: MOCK_BACKGROUND_IMG.imageUrls,
};

function Option({ selectOption }) {
  const [isCategorySelect, setIsCategorySelect] = useState(0);
  const [, setIsActive] = useState(OPTIONS[selectOption][0]);
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
          <CategoryButton key={category} onClick={() => handleClick(index)} $isActive={isCategorySelect === index}>
            {category}
          </CategoryButton>
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
