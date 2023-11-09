import styled from 'styled-components';
import * as F from '@/styles/fontType';
import landingImg1 from '@/assets/images/img_01.png';
import landingImg2 from '@/assets/images/img_02.png';

export default function Landing() {
  return (
    <>
      <Section1>
        <Box>
          <Div>Point. 01</Div>
          <Text>
            <Title>
              누구나 손쉽게, 온라인
              <Br />
              롤링 페이퍼를 만들 수 있어요
            </Title>
            <P>로그인 없이 자유롭게 만들어요.</P>
          </Text>
        </Box>
        <Img src={landingImg1} alt="롤링페이퍼" />
      </Section1>
      <Section2>
        <Box>
          <Div>Point. 02</Div>
          <Text>
            <Title>서로에게 이모지로 감정을 표현해보세요</Title>
            <P>롤링 페이퍼에 이모지를 추가할 수 있어요.</P>
          </Text>
        </Box>
        <Img src={landingImg2} alt="이모티콘 추가" />
      </Section2>
    </>
  );
}

const Section = styled.section`
  display: flex;
  padding: 2.4rem 2.4rem 6.2278rem;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  border-radius: 20px;
  background: var(--Surface, #f6f8ff);
  overflow: hidden;
`;

const Section1 = styled(Section)`
  @media (min-width: 1248px) {
    flex-direction: row;
    padding: 60px 0px 60px 60px;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 152px;
  }
`;

const Section2 = styled(Section)`
  @media (min-width: 1248px) {
    flex-direction: row-reverse;
    display: flex;
    padding: 60px 192px 60px 0px;
    align-items: flex-start;
    height: 32.4rem;
    gap: 0;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 72rem;
  }
`;

const Title = styled.h2`
  ${F.FONT18B}
  color: var(--gray-900, #181818);

  @media (min-width: 768px) {
    ${F.FONT24B}
  }
`;

const Div = styled.div`
  ${F.FONT14B}
  width: fit-content;
  color: var(--white, #fff);
  border-radius: 50px;
  background: var(--purple-600, #9935ff);
  display: flex;
  padding: 0.4rem 1.2rem;
  justify-content: center;
  align-items: center;
`;

const P = styled.p`
  ${F.FONT15}
  color: var(--gray-500, #555);

  @media (min-width: 768px) {
    ${F.FONT18}
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
  @media (min-width: 768px) {
    gap: 0.8rem;
  }
`;

const Img = styled.img`
  height: 11.3rem;

  @media (min-width: 768px) {
    width: 72rem;
    height: auto;
  }
`;

const Br = styled.br`
  display: none;
  @media (min-width: 1248px) {
    display: block;
  }
`;
