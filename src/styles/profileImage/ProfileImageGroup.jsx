import styled from 'styled-components';
import ProfileImage, { ProfileImageContainer } from '@/styles/profileImage/ProfileImage.jsx';

const PROFILE_SIZE = '2.8rem';

function ProfileImageGroup({ profileImages }) {
  const lastOrder = profileImages.length;

  return (
    <ProfileImageGroupDiv>
      <ProfileImageGroupContainer>
        {profileImages.map((image, index) => (
          <ProfileImage profileImage={image} size={PROFILE_SIZE} order={index} key={index} />
        ))}
        <ProfileImageCounter $size={PROFILE_SIZE} $order={lastOrder}>
          <ProfileCount>+6</ProfileCount>
        </ProfileImageCounter>
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

const ProfileImageCounter = styled(ProfileImageContainer)`
  background: var(--white, #fff);
  justify-content: center;
`;

const ProfileCount = styled.h4`
  color: #484848;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.8rem;
`;
