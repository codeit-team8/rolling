import { useState } from 'react';
import styled from 'styled-components';

const Regex = /^[\sa-zA-Z0-9가-힣]{2,20}$/;

export default function TextInput() {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const createErrorMessage = (text, result) => {
    if (text === '') {
      setErrorMessage('값을 입력해 주세요');
    } else if (!result) {
      setErrorMessage('유효하지 않은 이름입니다');
    }
  };

  const handleBlur = () => {
    const text = value.trim();
    const result = Regex.test(text);
    setIsValid(result);
    createErrorMessage(text, result);
  };

  return (
    <>
      <InputBox
        type="text"
        placeholder="받는 사람 이름을 입력하세요"
        onBlur={handleBlur}
        onChange={handleChange}
        value={value}
        $isValid={isValid}
      />
      {!isValid && <Error>{errorMessage}</Error>}
    </>
  );
}

const InputBox = styled.input`
  font-size: 1.6rem;
  line-height: 2.6rem;
  width: 32rem;
  height: 5rem;
  border-radius: 8px;
  border: none;
  outline: 0.1rem solid var(--gray-300);
  outline-color: ${({ $isValid }) => ($isValid ? 'var(--gray-300)' : 'var(--Error)')};
  padding: 1.2rem 1.6rem;
  color: var(--gray-900);
  &:hover {
    outline: 0.1rem solid var(--gray-500);
  }
  &:focus,
  &:active {
    outline: 0.2rem solid var(--gray-700);
  }
  &:disabled {
    background-color: var(--gray-100);
    outline: 0.1rem solid var(--gray-300);
    color: var(--gray-400);
  }
`;

const Error = styled.div`
  color: var(--Error);
  font-size: 1.2rem;
  width: 32rem;
  height: 1.8rem;
  margin-top: 0.4rem;
`;
