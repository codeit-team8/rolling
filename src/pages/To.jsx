import { useState } from 'react';
import styled, { css } from 'styled-components';
import * as F from '@/styles/fontType';
import TextInput from '@/styles/input/TextInput';
import PrimaryButton from '@/styles/button/PrimaryButton';

const INIT_VALUE = {
  team: '1-8',
  name: '',
  backgroundColor: 'begie',
  backgroundImageURL: '',
};

export default function To() {
  const [isValidForm, setIsValidForm] = useState(null);
  const [postValue, setPostValue] = useState(INIT_VALUE);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const preventSubmitKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  };

  return (
    <ToContainer>
      <Form onSubmit={handleSubmit} onKeyDown={preventSubmitKeyDown}>
        <TextBox>
          <Title>To.</Title>
          <TextInput setIsValidForm={setIsValidForm} />
        </TextBox>
        <TextBox2>
          <Title>배경화면을 선택해 주세요.</Title>
          <P>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</P>
        </TextBox2>
        <PrimaryButton type="submit">생성하기</PrimaryButton>
      </Form>
    </ToContainer>
  );
}

const ToContainer = styled.div`
  padding: 5rem 2rem 0 2rem;
`;

const FlexColumn = css`
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  ${FlexColumn}
  gap: 4.8rem;
  margin: auto;
  max-width: 120rem;
`;

const TextBox = styled.div`
  ${FlexColumn}
  gap: 1.2rem;
`;

const TextBox2 = styled.div`
  ${FlexColumn}
  gap: 0.4rem;
`;

const Title = styled.div`
  ${F.FONT24B}
  color: var(--gray-900, #181818);
`;

const P = styled.p`
  ${F.FONT16}
  color: var(--gray-500, #555);
`;
