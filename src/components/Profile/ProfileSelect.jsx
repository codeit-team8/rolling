import { useState } from 'react';
import styled from 'styled-components';
import { FONT24B, FONT16 } from '@/styles/fontType';
import ProfileImage from '@/styles/profileImage/ProfileImage';

function ProfileSelect({ imageData }) {
  const [selectUrl, setSelectUrl] = useState('');

  const handleSelect = ({ imageSource }) => {
    setSelectUrl(imageSource);
  };

  return (
    <ProfileSelectContainer>
      <H1>프로필 이미지</H1>
      <Section>
        <ProfileImage size="8rem" position="static" profileImage={selectUrl} />
        <SelectDiv>
          <P>프로필 이미지를 선택해 주세요.</P>
          <ClickDiv>
            {imageData.imageUrls.map((url) => (
              <ProfileImage key={url} profileImage={url} position="static" handleSelect={handleSelect} />
            ))}
          </ClickDiv>
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

  @media (min-width: 768px) {
    width: 71.7rem;
    height: 14.2rem;
  }
`;

const H1 = styled.h1`
  color: var(--gray-900, #181818);
  ${FONT24B}
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
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;
`;

const P = styled.p`
  color: var(--gray-500, #555);
  ${FONT16}
`;

const ClickDiv = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(5.6rem, 1fr));
    grid-template-rows: none;
    gap: 0.4rem;
  }
`;
