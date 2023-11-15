import { useState } from 'react';
import styled from 'styled-components';
import { FONT16 } from '@/styles/fontType';
import ProfileImage from '@/components/profileImage/ProfileImage';
import SelectedProfileImage from '@/components/profileImage/SelectedProfileImage.jsx';
import { DEFAULT_IMAGE_URL } from '@/pages/From.jsx';

function ProfileSelect({ setPostValue, imageData }) {
  const [selectUrl, setSelectUrl] = useState('');
  const imageUrls = imageData.slice(1);

  const handleInitImage = () => {
    setSelectUrl('');
    setPostValue((prev) => ({ ...prev, profileImageURL: DEFAULT_IMAGE_URL }));
  };

  const handleSelect = ({ imageSource }) => {
    setSelectUrl(imageSource);
    setPostValue((prev) => ({ ...prev, profileImageURL: imageSource }));
  };

  return (
    <ProfileSelectContainer>
      <Section>
        <SelectedProfileImage profileImage={selectUrl} handleInitImage={handleInitImage} />
        <SelectDiv>
          <P>프로필 이미지를 선택해 주세요.</P>
          <ClickDiv>
            {imageUrls.map((url) => (
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
  height: 12.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;

  @media (min-width: 768px) {
    width: 71.7rem;
    height: 14.2rem;
  }
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
