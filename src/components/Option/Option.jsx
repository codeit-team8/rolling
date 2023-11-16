import { useCallback, useEffect, useState } from 'react';
import selectIcon from '@/assets/icons/select.svg';
import SelectIcon from '@/styles/button/SelectIcon';
import { getBackgroundImages } from '@/api/backgroundImages';
import useAsync from '@/hooks/useAsync';
import {
  ButtonContainer,
  CardContainer,
  CategoryButton,
  ColorChip,
  ImageChip,
  OptionContainer,
} from '@/components/Option/Option.style';
import { BACKGROUND_COLORS } from '@/util/backgroundColors.jsx';
import Loading from '@/util/Loading.jsx';

const CATEGORIES = ['컬러', '이미지'];

function Option({ setPostValue }) {
  const [isCategorySelect, setIsCategorySelect] = useState(0);
  const [selectedChipIndex, setSelectedChipIndex] = useState(0);
  const [backgroundImages, setBackgroundImages] = useState([]);
  const [isLoadingBackgroundImages, , getBackgroundImagesAsync] = useAsync(getBackgroundImages);

  const getBackImages = useCallback(async () => {
    const { imageUrls } = await getBackgroundImagesAsync();
    setBackgroundImages(imageUrls);
  }, [getBackgroundImagesAsync]);

  const handleClickCategory = (index) => {
    setIsCategorySelect(index);
    setSelectedChipIndex(0);
    if (index === 0) {
      setPostValue((prev) => ({ ...prev, backgroundColor: 'beige', backgroundImageURL: null }));
    } else {
      setPostValue((prev) => ({ ...prev, backgroundColor: 'beige', backgroundImageURL: backgroundImages[0] }));
    }
  };

  const handleChip = (e, index) => {
    setSelectedChipIndex(index);
    if (isCategorySelect === 0) {
      setPostValue((prev) => ({ ...prev, backgroundColor: e.target.id }));
    } else {
      setPostValue((prev) => ({ ...prev, backgroundImageURL: e.target.id }));
    }
  };

  useEffect(() => {
    getBackImages();
  }, [getBackImages]);

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
        {isLoadingBackgroundImages && <Loading />}
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
