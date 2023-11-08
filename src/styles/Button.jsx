import styled from 'styled-components';
import nextArrow from '@/assets/icons/arrow_right.svg';
import prevArrow from '@/assets/icons/arrow_left.svg';
import ellipse from '@/assets/icons/ellipse.svg';

export function NextArrow({ onClick }) {
  return (
    <NextButton onClick={onClick}>
      <ArrowImg src={nextArrow} alt='다음 화살표 버튼' />
    </NextButton>
  );
}

export function PrevArrow({ onClick }) {
  return (
    <PrevButton onClick={onClick}>
      <ArrowImg src={prevArrow} alt='다음 화살표 버튼' />
    </PrevButton>
  );
}

const ArrowButton = styled.button`
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  fill: rgba(255, 255, 255, 0.9);
  stroke-width: 1px;
  stroke: var(--gray-300, #ccc);
  filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.08));
  backdrop-filter: blur(2px);
  position: absolute;
  top: 12rem;
  z-index: 3;
  cursor: pointer;
  background: url(${ellipse});
  background-position-x: -8px;
  background-position-y: -4px;
`;

const ArrowImg = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  flex-shrink: 0;
`;

const NextButton = styled(ArrowButton)`
  right: -0.4rem;
`;

const PrevButton = styled(ArrowButton)`
  left: -1.9rem;
`;
