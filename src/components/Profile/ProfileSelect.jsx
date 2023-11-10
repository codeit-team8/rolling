import styled from 'styled-components';
import * as F from '@/styles/fontType';
import ProfileImage from '@/styles/profileImage/ProfileImage';

function ProfileSelect() {
  return (
    <ProfileSelectContainer>
      <H1>프로필 이미지</H1>
      <Section>
        <ProfileImage size="8rem" position="static" />
        <SelectDiv>
          <P>프로필 이미지를 선택해 주세요.</P>
          <ClickDiv>데이터를 받고 map하기</ClickDiv>
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
  ${F.FONT24B}
`;

const Section = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  gap: 3.2rem;
`;

const SelectDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;
  border: 1px solid blue;
`;

const P = styled.p`
  color: var(--gray-500, #555);
  ${F.FONT16}
`;

const ClickDiv = styled.div`
  width: 20.8rem;
  height: 8.4rem;
  border: 1px solid green;
`;
