import styled from 'styled-components';
import RollingPaperList from '@/components/PaperCard/RollingPaperList.jsx';
import * as F from '@/styles/fontType.js';
import PrimaryButton from '@/styles/button/PrimaryButton.jsx';

function PaperList() {
  // TODO: 임시로 함
  const paperCardList = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <PaperListMain>
      <PaperListContainer>
        <PaperListTitle>인기 롤링 페이퍼 🔥</PaperListTitle>
        <RollingPaperList paperCardList={paperCardList} />
      </PaperListContainer>
      <PaperListContainer style={{ marginTop: '7.4rem' }}>
        <PaperListTitle>최근에 만든 롤링 페이퍼⭐️</PaperListTitle>
        <RollingPaperList paperCardList={paperCardList} />
      </PaperListContainer>
      <ButtonContainer>
        <Button $size="big">나도 만들어보기</Button>
      </ButtonContainer>
    </PaperListMain>
  );
}

export default PaperList;

const PaperListMain = styled.main`
  @media (min-width: 1248px) {
    display: flex;
    max-width: 120rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    position: relative;
  }
`;

const PaperListContainer = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 4rem;
  gap: 1.2rem;

  @media (min-width: 768px) {
    margin-top: 5rem;
  }
`;

const PaperListTitle = styled.h1`
  ${F.FONT20B};
  font-weight: 600;
  margin-left: 2rem;

  @media (min-width: 768px) {
    ${F.FONT24B};
    margin-left: 2.4rem;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 4.2rem;
  padding: 2.4rem 2rem;

  @media (min-width: 768px) {
    margin-top: 13.2rem;
    padding: 2.4rem;
  }

  @media (min-width: 1248px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
    position: relative;
    left: -1.4rem;
  }
`;

const Button = styled(PrimaryButton)`
  width: 100%;

  @media (min-width: 1248px) {
    width: 28rem;
  }
`;
