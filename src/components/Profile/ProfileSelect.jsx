import styled from 'styled-components';
// import * as F from '@/styles/fontType';
import ProfileImage from '@/styles/profileImage/ProfileImage';

// 이름 변경하기 혜지님처럼
function ProfileSelect() {
  return (
    <ProfileSelectContainer>
      <H1>프로필 이미지</H1>
      <Section>
        <ProfileImage />
        <SelectDiv>
          <Description>프로필 이미지를 선택해 주세요.</Description>
          <ClickDev>dsa</ClickDev>
        </SelectDiv>
      </Section>
    </ProfileSelectContainer>
  );
}

export default ProfileSelect;

const ProfileSelectContainer = styled.div`
  width: 32rem;
  height: 17rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;
`;

const H1 = styled.h1`
  color: var(--gray-900, #181818);
  /* ${F.FONT24B} */
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;
`;

const SelectDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;
`;

const Description = styled.p`
  color: var(--gray-500, #555);
  /* Font/16 Regular */
  /* ${F.FONT16R} */
`;

const ClickDev = styled.div`
  width: 20.8rem;
  height: 8.4rem;
`;
