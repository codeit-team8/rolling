import styled from 'styled-components';
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
  backgroundImageURL: [
    'https://s3-alpha-sig.figma.com/img/20c6/e481/31612bf263d24dd830adf62fd00509ed?Expires=1700438400&Signature=G7Td9B1ZIFtyu2xq1m-8cOHHytmjdvWCeqNBKHUb8ZDmZzhegq6n2eaquMjSouHxM8jV7b29ln5ouj-hXE~NvRtByTPxkdpAtmJlJtBm2TS6XMSlNMT518hrnHo0TEMQPl39sRyOVCT9Acu4ZmfzGZxeWjyN5yE71nHR6tAZMSP~d7hAR-2p6z1u5C-q9q8jrHQwliFGcD1OvfOBeIQkyimAMuFznGZfNDFR3jWoZCNc7pkGcc5jpEghbksspI2KayuqDrPo1Uys9J3sartTqkd4tiX8GREj2~Q3ACMCmH2j9UlQ4jwlDmAz8ztUGPCjhaU0cLbwIiTtDJ9eqAtSwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    'https://s3-alpha-sig.figma.com/img/16cd/1b46/e5a1c8c110aa1788a682f388bef979a4?Expires=1700438400&Signature=B55VLD7ce7pJYy4rPzB2GPVdNZMYxG5p1OS6~iF9GAGufcVhGD9vlluyXKUYums23p3wcsBVisS1ySAWFkGcV~~7hwTUsrkdNXNIAEZq73GVyp3zmz30NLpO1rsVZQJgG~eL7-b93NZDCcHH7BESAGR6Qw4b1Tsle-l9vS0q4GCYxqmZcBaf2odUXMJ9YmLT~86zWzQyKFfcZ5e94I7AIpSx~PSfawdib5sucfYnH7HNCfNfxZA-7dNqt-Ft0FX0WY~GWHK9hykLFqo1mQ9nksDy7P63waFal4lZb5610zYJj1n8dMgRAnZNu8wz~XSGj2EVrHvsgpEOzmd8hjqj7A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    'https://images.unsplash.com/photo-1697497305217-59590809a833?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1699362232821-b2eccfc516e5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ],
};

function Option({ selectOption }) {
  const [isCategorySelect, setIsCategorySelect] = useState(0);
  const [isActive, setIsActive] = useState(OPTIONS[selectOption][0]);
  const [selectedChipIndex, setSelectedChipIndex] = useState(0);

  const selectChip = {
    color: <ColorChip />,
    image: <ImageChip />,
  };

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
          <Button key={index} onClick={() => handleClick(index)} $isActive={isCategorySelect === index}>
            {category}
          </Button>
        ))}
      </ButtonContainer>
      <CardContainer>
        {isCategorySelect === 0 &&
          OPTIONS.backgroundColor.map((color, index) => (
            <ColorChip
              key={index}
              onClick={() => handleChip(index)}
              style={{ backgroundColor: color }}
              $isSelected={selectedChipIndex === index}
            >
              {selectedChipIndex === index && <SelectIcon src={selectIcon} alt="선택아이콘" />}
            </ColorChip>
          ))}
        {isCategorySelect === 1 &&
          OPTIONS.backgroundImageURL.map((imageURL, index) => (
            <ImageChip
              key={index}
              onClick={() => handleChip(index)}
              backgroundImageURL={imageURL}
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
  background-image: ${(props) => `url(${props.backgroundImageURL})`};
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
