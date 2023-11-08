import React, { useEffect } from 'react';
import styled from 'styled-components';
import '@/styles/font.css';
import { useState } from 'react';
import arrowTopIcon from '@/assets/icons/arrow_top.svg';
import arrowBottomIcon from '@/assets/icons/arrow_bottom.svg';

// TODO: option리스트를 배열로 받기
const options = ['옵션예시1번', '옵션예시2번', '옵션예시3번', '옵션예시4번'];

function DropDown() {
  const [selected, setSelected] = useState(options[1]);
  const [isActive, setIsActive] = useState(false);
  return (
    <Style>
      <DropDownBtn $isActive={isActive} onClick={() => setIsActive((prev) => !prev)}>
        {selected}
        {isActive ? (
          <ArrowIcon src={arrowBottomIcon} alt="아래화살표" />
        ) : (
          <ArrowIcon src={arrowTopIcon} alt="위화살표" />
        )}
      </DropDownBtn>
      {isActive && (
        <DropDownContentsWrapper>
          {options.map((option) => (
            <DropDownContent
              key={option}
              onClick={() => {
                setSelected(option);
                setIsActive(false);
              }}
            >
              {option}
            </DropDownContent>
          ))}
        </DropDownContentsWrapper>
      )}
    </Style>
  );
}
const Style = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DropDownBtn = styled.div`
  width: 320px;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 400;
  color: var(--gray-500, #555);
  border-radius: 8px;
  outline: 1px solid var(--gray-300, #ccc);
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  ${({ $isActive }) =>
    $isActive ? `outline: 2px solid var(--gray-500, #555);` : `outline: 1px solid var(--gray-500, #555);`}

  &:hover {
    outline: 1px solid var(--gray-500, #555);
    color: var(--gray-500, #555);
  }

  &:disabled {
    border-radius: 8px;
    outline: 1px solid var(--gray-300, #ccc);
    background: var(--gray-100, #f6f6f6);
  }
`;

const DropDownContentsWrapper = styled.div`
  margin-top: 8px;
  width: 320px;
  padding: 10px 0;
  border-radius: 8px;
  border: 1px solid var(--gray-300, #ccc);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
`;

const DropDownContent = styled.div`
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: var(--gray-100, #f6f6f6);
  }
`;

const ArrowIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export default DropDown;
