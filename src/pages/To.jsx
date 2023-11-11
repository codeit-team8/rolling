import { useState, useCallback, useEffect } from 'react';
import styled, { css } from 'styled-components';
import * as F from '@/styles/fontType';
import TextInput from '@/styles/input/TextInput';
import PrimaryButton from '@/styles/button/PrimaryButton';
import Option from '@/components/Option/Option';
import { postRecipients } from '@/api/recipients';
import { getBackgroundImages } from '@/api/backgroundImages';

const INIT_VALUE = {
  name: '',
  backgroundColor: 'beige',
  backgroundImageURL: null,
};

function To() {
  const [isValidForm, setIsValidForm] = useState(false);
  const [postValue, setPostValue] = useState(INIT_VALUE);
  const [backgroundImages, setBackgroundImages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidForm) {
      postRecipients(postValue);
    }
  };

  const preventSubmitKeyDownEnter = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  };

  const getPostValue = (value) => {
    setPostValue((prev) => ({ ...prev, name: value }));
  };

  const getBackImages = useCallback(async () => {
    const { imageUrls } = await getBackgroundImages();
    setBackgroundImages(imageUrls);
  }, []);

  useEffect(() => {
    getBackImages();
  }, [getBackImages]);

  return (
    <ToContainer>
      <Form onSubmit={handleSubmit} onKeyDown={preventSubmitKeyDownEnter}>
        <TextBox>
          <Title>To.</Title>
          <TextInput setIsValidForm={setIsValidForm} getPostValue={getPostValue} />
        </TextBox>
        <TextBox2>
          <Title>배경화면을 선택해 주세요.</Title>
          <P>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</P>
        </TextBox2>
        <Option setPostValue={setPostValue} backgroundImages={backgroundImages} />
        <PrimaryButton type="submit" disabled={!isValidForm}>
          생성하기
        </PrimaryButton>
      </Form>
    </ToContainer>
  );
}

export default To;

const ToContainer = styled.div`
  padding: 5rem 2rem 2.4rem 2rem;
  max-width: 76rem;
  margin: auto;
`;

const FlexColumn = css`
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  ${FlexColumn};
  gap: 4.8rem;
  margin: auto;
  max-width: 120rem;
`;

const TextBox = styled.div`
  ${FlexColumn};
  gap: 1.2rem;
`;

const TextBox2 = styled.div`
  ${FlexColumn};
  gap: 0.4rem;
`;

const Title = styled.div`
  ${F.FONT24B};
  color: var(--gray-900, #181818);
`;

const P = styled.p`
  ${F.FONT16};
  color: var(--gray-500, #555);
`;