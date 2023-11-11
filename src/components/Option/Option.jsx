import { useState } from 'react';
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

const BACKGROUND_COLORS = [
  { name: 'beige', color: 'var(--orange-200, #FFE2AD)' },
  { name: 'purple', color: 'var(--purple-200, #ECD9FF)' },
  { name: 'blue', color: 'var(--blue-200, #B1E4FF)' },
  { name: 'green', color: 'var(--green-200, #D0F5C3)' },
];

function Option({ setPostValue, backgroundImages }) {
  const [isCategorySelect, setIsCategorySelect] = useState(0);
  const [selectedChipIndex, setSelectedChipIndex] = useState(0);

  const handleClickCategory = (index) => {
    setIsCategorySelect(index);
    setSelectedChipIndex(0);
  };

  const handleChip = (e, index) => {
    setSelectedChipIndex(index);
    if (isCategorySelect === 0) {
      setPostValue((prev) => ({ ...prev, backgroundColor: e.target.id, backgroundImageURL: null }));
    } else {
      setPostValue((prev) => ({ ...prev, backgroundColor: 'beige', backgroundImageURL: e.target.id }));
    }
  };

  return (
    <OptionContainer>
      <ButtonContainer>
        {CATEGORIES.map((category, index) => (
          <CategoryButton
            type="button"
            key={category}
            onClick={() => handleClickCategory(index)}
            $isActive={isCategorySelect === index}
          >
            {category}
          </CategoryButton>
        ))}
      </ButtonContainer>
      <CardContainer>
        {isCategorySelect === 0 &&
          BACKGROUND_COLORS.map(({ name, color }, index) => (
            <ColorChip
              key={name}
              id={name}
              onClick={(e) => handleChip(e, index)}
              style={{ backgroundColor: color }}
              $isSelected={selectedChipIndex === index}
              $border="true"
            >
              {selectedChipIndex === index && <SelectIcon src={selectIcon} alt="선택아이콘" />}
            </ColorChip>
          ))}
        {isCategorySelect === 1 &&
          backgroundImages.map((imageURL, index) => (
            <ImageChip
              key={imageURL}
              id={imageURL}
              onClick={(e) => handleChip(e, index)}
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
