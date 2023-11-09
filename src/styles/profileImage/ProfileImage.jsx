import styled from 'styled-components';
import avatar from '@/assets/icons/avatar.svg';

// TODO: 프로필 이미지 컴포넌트 사용할 때 상속해서 크기에 맞게 스타일 컴포넌트 수정만 해주시면 됩니다.

function ProfileImage({ profileImage }) {
  return (
    <ProfileImageContainer>
      <img src={profileImage || avatar} alt="아바타" />
    </ProfileImageContainer>
  );
}

export default ProfileImage;

const ProfileImageContainer = styled.div`
  display: flex;
  width: 5.6rem;
  height: 5.6rem;
  align-items: center;
  flex-shrink: 0;
  border-radius: 100px;
  border: 0.1rem solid var(--gray-200, #eee);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100px;
  }
`;
