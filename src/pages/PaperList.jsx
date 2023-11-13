import styled from 'styled-components';
import { useCallback, useEffect, useState } from 'react';
import RollingPaperList from '@/components/PaperCard/RollingPaperList.jsx';
import * as F from '@/styles/fontType.js';
import PrimaryButton from '@/styles/button/PrimaryButton.jsx';
import useAsync from '@/hooks/useAsync.js';
import { getRecipients } from '@/api/recipients.js';

function PaperList() {
  const [likePaperCardList, setLikePaperCardList] = useState([]);
  const [recentPaperCardList, setRecentPaperCardList] = useState([]);
  const [getRecipientsIsLoading, getRecipientsError, getRecipientsAsync] = useAsync(getRecipients);

  const handleLikeLoad = useCallback(async () => {
    const result = await getRecipientsAsync({ sort: 'like' });
    const likeCards = [...result.results];
    setLikePaperCardList(likeCards);
  }, [getRecipientsAsync]);

  const handleRecentLoad = useCallback(async () => {
    const result = await getRecipientsAsync({});
    const recentCards = [...result.results];
    setRecentPaperCardList(recentCards);
  }, [getRecipientsAsync]);

  useEffect(() => {
    handleLikeLoad();
    handleRecentLoad();
  }, [handleLikeLoad, handleRecentLoad]);

  return (
    <PaperListMain>
      <PaperListContainer>
        <PaperListTitle>인기 롤링 페이퍼 🔥</PaperListTitle>
        <RollingPaperList paperCardList={likePaperCardList} />
      </PaperListContainer>
      <PaperListContainer style={{ marginTop: '7.4rem' }}>
        <PaperListTitle>최근에 만든 롤링 페이퍼⭐️</PaperListTitle>
        <RollingPaperList paperCardList={recentPaperCardList} />
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
