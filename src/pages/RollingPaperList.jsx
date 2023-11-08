import styled from 'styled-components';
import PaperCard from '@/components/PaperCard/PaperCard.jsx';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function RollingPaperList() {
  return (
    <PaperListContainer>
      <PaperListSlide>
        {[1, 2, 3, 4, 5].map((num) => (
          <PaperCard number={num} key={num} />
        ))}
      </PaperListSlide>
    </PaperListContainer>
  );
}

export default RollingPaperList;

const PaperListContainer = styled.div`
  width: 100%;
  //overflow: hidden;
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
`;
