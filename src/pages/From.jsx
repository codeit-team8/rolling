import { useCallback, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { FONT24B } from '@/styles/fontType';
import TextInput from '@/styles/input/TextInput';
import PrimaryButton from '@/styles/button/PrimaryButton';
import ProfileSelect from '@/components/Profile/ProfileSelect';
import Dropdown from '@/components/Dropdown/Dropdown';
import TextEditor from '@/components/TextEditor/TextEditor';
import { sendMessage } from '@/api/message';
import useAsync from '@/hooks/useAsync';
import { getProfileImages } from '@/api/profileImage';
import Loading from '@/util/Loading.jsx';

export const DEFAULT_IMAGE_URL =
  'https://learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com/sprint-proj-image/default_avatar.png';

const INIT_MESSAGE = {
  sender: '',
  relationship: '지인',
  content: '',
  font: 'Noto Sans',
  profileImageURL: DEFAULT_IMAGE_URL,
};

function From() {
  const [postValue, setPostValue] = useState(INIT_MESSAGE);
  const [isValidForm, setIsValidForm] = useState(false);
  const [profileImageData, setProfileImageData] = useState([]);
  const [, , sendMessageAsync] = useAsync(sendMessage);
  const [isLoadingProfileImages, , getProfileImagesAsync] = useAsync(getProfileImages);

  const { recipientId } = useParams();
  const navigate = useNavigate();

  const postResponse = useCallback(
    async (value) => {
      await sendMessageAsync(value);
      navigate(`/post/${recipientId}`);
    },
    [sendMessageAsync],
  );

  const getProfile = useCallback(async () => {
    const { imageUrls } = await getProfileImagesAsync();
    setProfileImageData([...imageUrls]);
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
    setPostValue((prev) => ({ ...prev, recipientId, sender: value }));
  };

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  return (
    <FromContainer>
      <Form onSubmit={handleSubmit} onKeyDown={preventSubmitKeyDownEnter}>
        <Section>
          <Title>From.</Title>
          <TextInput setIsValidForm={setIsValidForm} getPostValue={getPostValue} />
        </Section>
        <Section>
          <Title>프로필 이미지</Title>
          {isLoadingProfileImages && <Loading />}
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
