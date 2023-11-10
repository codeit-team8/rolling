import styled from 'styled-components';
import Slider from 'react-slick';
import { useEffect, useState } from 'react';
import PaperCard from '@/components/PaperCard/PaperCard.jsx';
import { paperCardSettings } from '@/util/carousel.jsx';
import { NextArrow, PrevArrow } from '@/styles/button/ArrowButton.jsx';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function RollingPaperList({ paperCardList }) {
  const [isGreaterPCWidth, setIsGreaterPCWidth] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    ...paperCardSettings,

    afterChange(index) {
      setCurrentIndex(index);
    },
  };

  const handleSize = () => {
    if (window.innerWidth >= 1248) {
      setIsGreaterPCWidth(true);
    } else {
      setIsGreaterPCWidth(false);
    }
  };

  useEffect(() => {
    handleSize();
    window.addEventListener('resize', handleSize);

    return () => window.removeEventListener('resize', handleSize);
  }, []);

  return (
    <Div>
      <PaperListContainer>
        {isGreaterPCWidth ? (
          <PaperListSlider
            {...settings}
            prevArrow={<PrevArrow paperIndex={currentIndex} />}
            nextArrow={<NextArrow paperIndex={currentIndex} length={paperCardList.length} />}
          >
            {paperCardList.map((num) => (
              <PaperCard number={num} key={num} />
            ))}
          </PaperListSlider>
        ) : (
          <PaperListSlide>
            {paperCardList.map((num) => (
              <PaperCard number={num} key={num} />
            ))}
          </PaperListSlide>
        )}
      </PaperListContainer>
    </Div>
  );
}

export default RollingPaperList;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PaperListContainer = styled.div`
  width: 100%;

  @media (min-width: 1248px) {
    width: 116rem;
  }
`;

const PaperListSlider = styled(Slider)`
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
`;

const PaperListSlide = styled.div`
  display: flex;
  gap: 1.2rem;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  &:first-child {
    padding-left: 2rem;
  }

  &:last-child {
    padding-right: 2rem;
  }

  @media (min-width: 768px) {
    gap: 2rem;

    &:first-child {
      padding-left: 2.4rem;
    }

    &:last-child {
      padding-right: 2.4rem;
    }
  }

  @media (min-width: 1248px) {
    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
    }
  }
`;
