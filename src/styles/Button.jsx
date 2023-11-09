import styled from 'styled-components';
import nextArrow from '@/assets/icons/arrow_right.svg';
import prevArrow from '@/assets/icons/arrow_left.svg';

const START_INDEX = 1;
const LAST_INDEX = 4;

export function PrevArrow({ onClick, paperIndex }) {
  const showPrev = paperIndex >= START_INDEX;
  return (
    <PrevButton onClick={onClick} $showPrev={showPrev}>
      <ArrowImg src={prevArrow} alt="다음 화살표 버튼" />
    </PrevButton>
  );
}

export function NextArrow({ onClick, paperIndex }) {
  const showNext = paperIndex < LAST_INDEX;
  return (
    <NextButton onClick={onClick} $showNext={showNext}>
      <ArrowImg src={nextArrow} alt="다음 화살표 버튼" />
    </NextButton>
  );
}

const ArrowButton = styled.button`
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 12rem;
  z-index: 3;
  cursor: pointer;
  border-radius: 100px;
  border: 0.1rem solid var(--gray-200, #eee);
  background-color: var(--white, #fff);
`;

const ArrowImg = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  flex-shrink: 0;
`;

const PrevButton = styled(ArrowButton)`
  left: -1.9rem;
  display: ${({ $showPrev }) => ($showPrev ? 'flex' : 'none')};
`;

const NextButton = styled(ArrowButton)`
  right: -0.4rem;
  display: ${({ $showNext }) => ($showNext ? 'flex' : 'none')};
`;
