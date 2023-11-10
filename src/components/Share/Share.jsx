import styled from 'styled-components';
import { useState } from 'react';
import shareIcon from '@/assets/icons/share.svg';
import Popover from '@/components/Share/Popover.jsx';

function Share() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <ShareContainer>
      <ShareButton onClick={handleOpenClick}>
        <ShareIcon src={shareIcon} alt="공유 버튼" />
      </ShareButton>
      {isOpen && (
        <PopoverBox>
          <Popover />
        </PopoverBox>
      )}
    </ShareContainer>
  );
}

export default Share;

const ShareContainer = styled.div`
  position: relative;
`;

const ShareButton = styled.button`
  display: flex;
  width: 3.6rem;
  height: 3.2rem;
  padding: 0.6rem 0.8rem;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  border: 1px solid var(--gray-300, #ccc);
  background: var(--white, #fff);

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
