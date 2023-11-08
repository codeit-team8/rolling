import styled from 'styled-components';
import purplePatternImg from '@/assets/images/card_pattern_purple.png';

// TODO : 작성자들에 아바타 컴포넌트 추가, 작성 인원 수 추가, 이모지 컴포넌트 추가, 컬러에 따라 카드배경색, 패턴 다르게 받기

function PaperCard({ number }) {
  return (
    <CardContainer>
      <Recipient>{`To. 민혁 ${number}`}</Recipient>
      <Writers>작성자들</Writers>
      <WriterCounter>
        <span>30</span>
        명이 작성했어요!
      </WriterCounter>
      <BottomContainer>
        <EmojiContainer>
          <div>이모지1</div>
          <div>이모지2</div>
          <div>이모지3</div>
        </EmojiContainer>
      </BottomContainer>
      <PatternImg src={purplePatternImg} />
    </CardContainer>
  );
}

export default PaperCard;

const CardContainer = styled.div`
  position: relative;
  width: 20.8rem;
  height: 23.2rem;
  flex-shrink: 0;
  padding: 3rem 2.4rem 2rem;
  border-radius: 16px;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  background: var(--purple-200, #ecd9ff);
  box-shadow: 0 0.2rem 1.2rem 0 rgba(0, 0, 0, 0.08);

  @media (min-width: 768px) {
    width: 27.5rem;
    height: 26rem;
  }
`;

const Recipient = styled.h1`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  align-self: stretch;
  overflow: hidden;
  color: var(--gray-900, #181818);
  text-overflow: ellipsis;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.8rem;
  letter-spacing: -0.018rem;

  @media (min-width: 768px) {
    font-size: 2.4rem;
    line-height: 3.6rem;
    letter-spacing: -0.024px;
  }
`;

const Writers = styled.div`
  display: flex;
  align-items: flex-start;
  gap: -1.2rem;
  margin: 1.2rem 0;
`;

const WriterCounter = styled.div`
  color: var(--gray-700, #3a3a3a);

  span {
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 2rem;
    letter-spacing: -0.007rem;
    color: var(--gray-700, #3a3a3a);
  }

  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: -0.007rem;

  @media (min-width: 768px) {
    font-size: 1.6rem;
    line-height: 2.6rem;
    letter-spacing: -0.016px;

    span {
      font-size: 1.6rem;
      letter-spacing: -0.016px;
    }
  }
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 16.2rem;
  gap: 1.6rem;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  padding-top: 1.6rem;
  margin-top: 4.3rem;

  @media (min-width: 768px) {
    width: 22.7rem;
  }
`;

const EmojiContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
`;

const PatternImg = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 10.7rem;
  height: 14.2rem;
  flex-shrink: 0;
  border-radius: 0 0 16px 0;

  @media (min-width: 768px) {
    width: 14.2rem;
  }
`;
