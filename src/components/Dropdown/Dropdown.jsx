import styled from 'styled-components';
import '@/styles/font.css';
import { useState } from 'react';
import arrowTopIcon from '@/assets/icons/arrow_top.svg';
import arrowBottomIcon from '@/assets/icons/arrow_bottom.svg';

const OPTIONS = {
  relationship: ['친구', '지인', '동료', '가족'],
  font: ['Pretendard', 'Noto Sans', '나눔명조', '나눔손글씨 손편지체'],
};

function Dropdown({ selectOption, setPostValue }) {
  const [selected, setSelected] = useState(OPTIONS[selectOption][1]);
  const [isActive, setIsActive] = useState(false);

  const toggleDropdown = () => {
    setIsActive((prev) => !prev);
  };

  const handleDropdownContent = (option) => {
    setSelected(option);
    setIsActive(false);
    if (selectOption === 'relationship') {
      setPostValue((prev) => ({ ...prev, relationship: option }));
    } else if (selectOption === 'font') {
      setPostValue((prev) => ({ ...prev, font: option }));
    }
  };

  return (
    <DropdownContainer>
      <DropdownBtn $isActive={isActive} onClick={toggleDropdown}>
        {selected}
        {isActive ? (
          <ArrowIcon src={arrowTopIcon} alt="위화살표" />
        ) : (
          <ArrowIcon src={arrowBottomIcon} alt="아래화살표" />
        )}
      </DropdownBtn>
      {isActive && (
        <DropdownContentsWrapper>
          {OPTIONS[selectOption].map((option) => (
            <DropdownContent key={option} onClick={() => handleDropdownContent(option)}>
              {option}
            </DropdownContent>
          ))}
        </DropdownContentsWrapper>
      )}
    </DropdownContainer>
  );
}

const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DropdownBtn = styled.div`
  width: 32rem;
  padding: 1.2rem 1.6rem;
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--gray-500, #555);
  border-radius: 8px;
  outline: 1px solid var(--gray-300, #ccc);
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  ${({ $isActive }) =>
    ($isActive ? 'outline: 2px solid var(--gray-500, #555);' : 'outline: 1px solid var(--gray-300, #ccc);')}
  &:hover {
    outline: 2px solid var(--gray-500, #555);
    color: var(--gray-500, #555);
  }

  &:disabled {
    border-radius: 8px;
    outline: 1px solid var(--gray-300, #ccc);
    background: var(--gray-100, #f6f6f6);
  }
`;

const DropdownContentsWrapper = styled.div`
  position: absolute;
  background-color: #fff;
  z-index: 2;
  top: 100%;
  margin-top: 0.8rem;
  width: 100%;
  padding: 1rem 0;
  border-radius: 8px;
  border: 1px solid var(--gray-300, #ccc);
  box-shadow: 0 0.2rem 1.2rem 0 rgba(0, 0, 0, 0.08);
  cursor: pointer;
`;

const DropdownContent = styled.div`
  padding: 1.2rem 1.6rem;
  font-size: 1.6rem;
  cursor: pointer;

  &:hover {
    background-color: var(--gray-100, #f6f6f6);
  }
`;

const ArrowIcon = styled.img`
  width: 1.6rem;
  height: 1.6rem;
`;

export default Dropdown;
