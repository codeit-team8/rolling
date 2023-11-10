import styled from 'styled-components';
import avatar from '@/assets/icons/avatar.svg';

// TODO: 프로필 이미지 컴포넌트 사용할 때 상속해서 크기에 맞게 스타일 컴포넌트 수정만 해주시면 됩니다.

function ProfileImage({ profileImage, size, order, position, handleSelect }) {
  const imageSource = profileImage || avatar;
  return (
    <ProfileImageContainer
      $size={size}
      $order={order}
      $position={position}
      onClick={() => {
        handleSelect({ imageSource });
      }}
    >
      <Image src={imageSource} alt="아바타" />
    </ProfileImageContainer>
  );
}

export default ProfileImage;

export const ProfileImageContainer = styled.div`
  display: flex;
  width: ${({ $size }) => $size || '4rem'};
  height: ${({ $size }) => $size || '4rem'};
  z-index: ${({ $order }) => $order};
  position: ${({ $position }) => $position || 'absolute'};
  left: ${({ $order }) => `${$order * 1.7}rem`};
  align-items: center;
  flex-shrink: 0;
  border-radius: 100px;
  border: 0.1rem solid var(--gray-200, #eee);
  cursor: pointer;

  @media (min-width: 768px) {
    width: ${({ $size }) => $size || '5.6rem'};
    height: ${({ $size }) => $size || '5.6rem'};
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 100px;
`;
