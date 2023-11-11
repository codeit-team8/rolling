// 플러스 버튼으로 → From페이지로 이동
// From 페이지 랜더링
// 생성하기 버튼 눌렀을 경우 롤링페이퍼 화면으로 이동
import styled, { css } from 'styled-components';
import * as F from '@/styles/fontType';
import TextInput from '@/styles/input/TextInput';
import PrimaryButton from '@/styles/button/PrimaryButton';
import ProfileSelect from '@/components/Profile/ProfileSelect';
import Dropdown from '@/components/Dropdown/Dropdown';
import TextEditor from '@/components/TextEditor/TextEditor';

const imageMockData = {
  imageUrls: [
    'https://fastly.picsum.photos/id/268/100/100.jpg?hmac=eqOIwP24u5Z5zeRyWxuRm-47F6O4HGh_2t7ydnCLB1g',
    'https://fastly.picsum.photos/id/522/100/100.jpg?hmac=qAjkBTDli2R3PAxAqv8HwfHWmdQskKVWNSDktu4tmHw',
    'https://fastly.picsum.photos/id/494/100/100.jpg?hmac=VY3bkvgk7NyiVsjLJ0_OBS_e_LWCFTrPEvndz6syOFQ',
    'https://fastly.picsum.photos/id/1064/100/100.jpg?hmac=ctylrOJlV6YpNYdxeSheUqNNZD7goTpAQjnF_ubkrPw',
    'https://fastly.picsum.photos/id/571/100/100.jpg?hmac=-fQ3pFGoTNXsXIgWPhYe3lTadQTWlLh5J1Xzc9vmlQE',
    'https://fastly.picsum.photos/id/866/100/100.jpg?hmac=ci1nxrYzr9SaVQenyuqBybKgVslILw_KRPf-cZjq4yg',
    'https://fastly.picsum.photos/id/437/100/100.jpg?hmac=-YlB-diqK8qqcHK263TJ4YfCVbAlzbaLJECUuGfg55s',
    'https://fastly.picsum.photos/id/1082/100/100.jpg?hmac=0rTbHjwuEo-KpMp2E4aCa2JWXFT_FPh6cqJwhTxcZl4',
    'https://fastly.picsum.photos/id/859/100/100.jpg?hmac=6QkQ5r5_o7xGLBIk04B6BGnYhczjRVVUHfgwEZBCtyk',
    'https://fastly.picsum.photos/id/547/100/100.jpg?hmac=GzEraiphe5k-m_Ika-BtHcx4xDxuRPW2LTQFzHjAyy4',
  ],
};

function From() {
  return (
    <FromContainer>
      <Form>
        <Section>
          <Title>From.</Title>
          {/* 플레이스홀더 수정 필요 */}
          <TextInput />
        </Section>
        <Section>
          <Title>프로필 이미지</Title>
          <ProfileSelect imageData={imageMockData} />
        </Section>
        <Section>
          <Title>상대와의 관계</Title>
          <Dropdown selectOption="relationship" />
        </Section>
        <Section>
          <Title>내용을 입력해 주세요</Title>
          <TextEditor />
        </Section>
        <Section>
          <Title>폰트 선택</Title>
          <Dropdown selectOption="font" />
        </Section>
        <Button type="submit">생성하기</Button>
      </Form>
    </FromContainer>
  );
}

export default From;

const FromContainer = styled.div`
  padding: 5rem 2rem 2.4rem 2rem;
  max-width: 76.8rem;
  margin: 0 auto;
`;

const FlexColumn = css`
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  ${FlexColumn};
  width: 100%;
  gap: 5rem;
  margin: 0 auto;
`;

const Section = styled.div`
  ${FlexColumn};
  align-items: flex-start;
  gap: 1.2rem;
`;

const Title = styled.div`
  ${F.FONT24B};
  color: var(--gray-900, #181818);
`;

const Button = styled(PrimaryButton)`
  margin-top: 16rem;
`;
