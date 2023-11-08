import styled from 'styled-components';
import Slider from 'react-slick';
import PaperCard from '@/components/PaperCard/PaperCard.jsx';
import { paperCardSettings } from '@/util/carousel.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function RollingPaperList() {
  return (
    <PaperListContainer>
      <Slider {...paperCardSettings}>
        {[1, 2, 3, 4, 5].map((num) => (
          <PaperCard number={num} key={num} />
        ))}
      </Slider>
    </PaperListContainer>
  );
}

export default RollingPaperList;

const PaperListContainer = styled.div`
  width: 100%;
  overflow: hidden;

  .slick-track {
    display: flex;
    gap: 10px;

    [data-index='0'] {
      margin-left: 2rem;
    }
  }
`;
