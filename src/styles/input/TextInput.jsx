import { useState } from 'react';
import styled from 'styled-components';
import * as F from '@/styles/fontType';

const REGEX = /^[\sa-zA-Z0-9가-힣]{2,20}$/;

function TextInput({ setIsValidForm, getPostValue }) {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const createErrorMessage = (text, result) => {
    if (text === '') {
      setErrorMessage('값을 입력해 주세요');
    } else if (!result) {
      setErrorMessage('이름은 2~20글자 이내로 특수문자는 포함하지 말아주세요.');
    }
  };

  const handleBlur = () => {
    const text = value.trim();
    const result = REGEX.test(text);
    setIsValid(result);
    setIsValidForm(result);
    getPostValue(text);
    createErrorMessage(text, result);
  };

  return (
    <>
      <InputBox
        type="text"
        placeholder="이름을 입력하세요"
        onBlur={handleBlur}
        onChange={handleChange}
        value={value}
        $isValid={!isValid && isValid !== null}
      />
      {!isValid && isValid !== null && <Error>{errorMessage}</Error>}
    </>
  );
}

export default TextInput;

const InputBox = styled.input`
  ${F.FONT16};
  width: 100%;
  height: 5rem;
  border-radius: 8px;
  border: none;
  outline: 0.1rem solid var(--gray-300);
  outline-color: ${({ $isValid }) => ($isValid ? 'var(--Error)' : 'var(--gray-300)')};
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
  ${F.FONT12};
  width: 32rem;
  height: 1.8rem;
  margin-top: 0.4rem;
`;
