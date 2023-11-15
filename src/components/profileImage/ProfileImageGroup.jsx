import styled from 'styled-components';
import ProfileImage, { ProfileImageContainer } from '@/components/profileImage/ProfileImage.jsx';

const PROFILE_SIZE = '2.8rem';

function ProfileImageGroup({ profileImages, messageCount = 0 }) {
  const lastOrder = profileImages.length;

  return (
    <ProfileImageGroupDiv>
      <ProfileImageGroupContainer>
        {lastOrder !== 0
          && profileImages.map((image, index) => (
            <ProfileImage profileImage={image} size={PROFILE_SIZE} order={index} key={index} />
          ))}
        <ProfileImageCounter $size={PROFILE_SIZE} $order={lastOrder}>
          <ProfileCount>+{messageCount}</ProfileCount>
        </ProfileImageCounter>
      </ProfileImageGroupContainer>
    </ProfileImageGroupDiv>
  );
}

export default ProfileImageGroup;

const ProfileImageGroupDiv = styled.div`
  width: 7.6rem;
  height: 3rem;
`;

const ProfileImageGroupContainer = styled.div`
  position: relative;
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
