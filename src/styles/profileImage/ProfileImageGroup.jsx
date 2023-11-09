import styled from 'styled-components';
import ProfileImage from '@/styles/profileImage/ProfileImage.jsx';

function ProfileImageGroup({ profileImages }) {
  return (
    <ProfileImageGroupContainer>
      {profileImages.map((image, index) => (
        <ProfileImage profileImage={image} size="2.8rem" order={index} key={index} />
      ))}
    </ProfileImageGroupContainer>
  );
}

export default ProfileImageGroup;

const ProfileImageGroupContainer = styled.div`
  position: relative;
`;
