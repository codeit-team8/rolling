import styled from 'styled-components';
import shareIcon from '@/assets/icons/share.svg';

function Share() {
  return (
    <ShareContainer>
      <ShareIcon src={shareIcon} alt="공유 버튼" />
    </ShareContainer>
  );
}

export default Share;

const ShareContainer = styled.div`
  display: flex;
  width: 3.6rem;
  height: 3.2rem;
  padding: 0.6rem 0.8rem;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  border: 1px solid var(--gray-300, #ccc);
  background: var(--white, #fff);
`;

const ShareIcon = styled.img`
  width: 2rem;
  height: 2rem;
`;
