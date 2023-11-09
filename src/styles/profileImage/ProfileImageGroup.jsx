import styled from 'styled-components';
import ProfileImage from '@/styles/profileImage/ProfileImage.jsx';

function ProfileImageGroup({ profileImages }) {
  return (
    <ProfileImageGroupDiv>
      <ProfileImageGroupContainer>
        {profileImages.map((image, index) => (
          <ProfileImage profileImage={image} size='2.8rem' order={index} key={index} />
        ))}
      </ProfileImageGroupContainer>
    </ProfileImageGroupDiv>
  );
}

export default ProfileImageGroup;

const ProfileImageGroupContainer = styled.div`
  position: relative;
`;

const ProfileImageGroupDiv = styled.div`
  width: 7.6rem;
`;
