import styled from 'styled-components';
import { useState } from 'react';
import shareIcon from '@/assets/icons/share.svg';
import Popover from '@/components/Share/Popover.jsx';
import OutlineButton from '@/styles/button/OutlineButton.jsx';

function Share({ recipientId }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <ShareContainer>
      <ShareButton onClick={handleOpenClick} $size="H36">
        <ShareIcon src={shareIcon} alt="공유 버튼" />
      </ShareButton>
      {isOpen && (
        <PopoverBox>
          <Popover recipientId={recipientId} />
        </PopoverBox>
      )}
    </ShareContainer>
  );
}

export default Share;

const ShareContainer = styled.div`
  position: relative;
`;

const ShareButton = styled(OutlineButton)`
  width: 3.6rem;
  height: 3.2rem;
  padding: 0.6rem 0.8rem;

  @media (min-width: 768px) {
    padding: 0.6rem 1.6rem;
    width: 5.6rem;
    height: 3.6rem;
  }
`;

const ShareIcon = styled.img`
  width: 2rem;
  height: 2rem;

  @media (min-width: 768px) {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

const PopoverBox = styled.div`
  position: absolute;
  flex-shrink: 0;
  top: 100%;
  margin-top: 0.5rem;
  right: 0;
`;
