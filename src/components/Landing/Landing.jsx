import * as S from '@/components/Landing/LandingStyle';
import landingImg1 from '@/assets/images/img_01.png';
import landingImg2 from '@/assets/images/img_02.png';

export default function Landing() {
  return (
    <>
      <S.Section1>
        <S.Box>
          <S.Div>Point. 01</S.Div>
          <S.Text>
            <S.Title>
              누구나 손쉽게, 온라인
              <S.Br />
              롤링 페이퍼를 만들 수 있어요
            </S.Title>
            <S.P>로그인 없이 자유롭게 만들어요.</S.P>
          </S.Text>
        </S.Box>
        <S.Img src={landingImg1} alt="롤링페이퍼" />
      </S.Section1>
      <S.Section2>
        <S.Box>
          <S.Div>Point. 02</S.Div>
          <S.Text>
            <S.Title>서로에게 이모지로 감정을 표현해보세요</S.Title>
            <S.P>롤링 페이퍼에 이모지를 추가할 수 있어요.</S.P>
          </S.Text>
        </S.Box>
        <S.Img src={landingImg2} alt="이모티콘 추가" />
      </S.Section2>
    </>
  );
}
