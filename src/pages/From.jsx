import { useCallback, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { FONT24B } from '@/styles/fontType';
import TextInput from '@/styles/input/TextInput';
import PrimaryButton from '@/styles/button/PrimaryButton';
import ProfileSelect from '@/components/Profile/ProfileSelect';
import Dropdown from '@/components/Dropdown/Dropdown';
import TextEditor from '@/components/TextEditor/TextEditor';
import { sendMessage } from '@/api/message';
import useAsync from '@/hooks/useAsync';
import { getProfileImages } from '@/api/profileImage';

const INIT_MESSAGE = {
  sender: '',
  relationship: '지인',
  content: '',
  font: 'Noto Sans',
  profileImageURL: '',
};

const INIT_IMAGE = {
  imageUrls: [],
};

function From() {
  const [postValue, setPostValue] = useState(INIT_MESSAGE);
  const [isValidForm, setIsValidForm] = useState(false);
  const [profileImageData, setprofileImageData] = useState(INIT_IMAGE);
  const [, , sendMessageAsync] = useAsync(sendMessage);
  const [, , getProfileImagesAsync] = useAsync(getProfileImages);

  const postResponse = useCallback(
    async (value) => {
      const response = await sendMessageAsync(value);
    },
    [sendMessageAsync],
  );

  const getProfile = useCallback(async () => {
    const response = await getProfileImagesAsync();
    setprofileImageData({ ...response });
  }, [getProfileImagesAsync]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidForm && postValue.content) {
      postResponse(postValue);
    }
  };

  const preventSubmitKeyDownEnter = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  };

  const getPostValue = (value) => {
    setPostValue((prev) => ({ ...prev, sender: value }));
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <FromContainer>
      <Form onSubmit={handleSubmit} onKeyDown={preventSubmitKeyDownEnter}>
        <Section>
          <Title>From.</Title>
          <TextInput setIsValidForm={setIsValidForm} getPostValue={getPostValue} />
        </Section>
        <Section>
          <Title>프로필 이미지</Title>
          <ProfileSelect imageData={profileImageData} setPostValue={setPostValue} />
        </Section>
        <Section>
          <Title>상대와의 관계</Title>
          <Dropdown selectOption="relationship" setPostValue={setPostValue} />
        </Section>
        <Section>
          <Title>내용을 입력해 주세요</Title>
          <TextEditor setPostValue={setPostValue} />
        </Section>
        <Section>
          <Title>폰트 선택</Title>
          <Dropdown selectOption="font" setPostValue={setPostValue} />
        </Section>
        <Button type="submit" disabled={!isValidForm || !postValue.content}>
          생성하기
        </Button>
      </Form>
    </FromContainer>
  );
}

export default From;

const FromContainer = styled.div`
  position: relative;
  padding: 5rem 2rem 2.4rem 2rem;
  max-width: 76.8rem;
  margin: 0 auto;
`;

const FlexColumn = css`
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  ${FlexColumn};
  width: 100%;
  gap: 5rem;
  margin: 0 auto;
`;

const Section = styled.div`
  ${FlexColumn};
  align-items: flex-start;
  gap: 1.2rem;
`;

const Title = styled.div`
  ${FONT24B};
  color: var(--gray-900, #181818);
`;

const Button = styled(PrimaryButton)`
  margin-top: 16rem;
`;
