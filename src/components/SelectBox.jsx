import React from 'react';
import styled from 'styled-components';
import '@/styles/font.css';

// TODO: option리스트를 배열로 받기

function SelectBox() {
  const options = ['옵션1', '옵션2', '옵션3', '옵션4'];
  return (
    <label htmlFor="SelectBox">
      <SelectBoxWrapper id="SelectBox" defaultValue={options[1]}>
        {options.map((option, index) => (
          <option key={`option${index}`} value={`option${index}`}>
            {option}
          </option>
        ))}
      </SelectBoxWrapper>
    </label>
  );
}
const SelectBoxWrapper = styled.select`
  width: 320px;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 400;
  border-radius: 8px;
  border: 1px solid var(--gray-300, #ccc);

  & option:checked {
    background: var(--gray-100, #f6f6f6);
  }
`;

export default SelectBox;
