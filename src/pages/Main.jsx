import styled from 'styled-components';
import * as F from '@/styles/fontType';
import landingImg1 from '@/assets/images/Group 47.png';
import landingImg2 from '@/assets/images/Group 43.png';

function Main() {
  return (
    <MainContainer>
      <Session>
        <Box>
          <Div>Point. 01</Div>
          <Text>
            <Title>누구나 손쉽게, 온라인 롤링 페이퍼를 만들 수 있어요</Title>
            <P>로그인 없이 자유롭게 만들어요.</P>
          </Text>
        </Box>
        <LandingImg1 src={landingImg1} alt="롤링페이퍼" />
      </Session>
      <Session>
        <Box>
          <Div>Point. 02</Div>
          <Text>
            <Title>서로에게 이모지로 감정을 표현해보세요</Title>
            <P>롤링 페이퍼에 이모지를 추가할 수 있어요.</P>
          </Text>
        </Box>
        <LandingImg2 src={landingImg2} alt="이모티콘 추가" />
      </Session>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  padding: 4.2rem 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const LandingImg1 = styled.img`
  width: 35.451rem;
  height: 8.9722rem;
`;

const LandingImg2 = styled.img`
  width: 260.343px;
  height: 113px;
  flex-shrink: 0;
`;

const Title = styled.h2`
  ${F.FONT18B}
  color: var(--gray-900, #181818);
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

const Session = styled.div`
  display: flex;
  padding: 24px 0px 62.278px 0px;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  border-radius: 20px;
  background: var(--Surface, #f6f8ff);
  overflow: hidden;
`;

const P = styled.p`
  ${F.FONT15}
  color: var(--gray-500, #555);
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;
export default Main;
