import styled from 'styled-components';
import { forwardRef } from 'react';
import {
  Author,
  AuthorFrom,
  AuthorTitle,
  AuthorWrapper,
  MessageCardProfile,
  MessageCardTop,
  MessageDate,
  ProfileImage,
  ProfileImageWrapper,
} from '@/components/MessageCard/MessageCard.style.jsx';
import Badge from '@/components/MessageCard/Badge.jsx';
import { FONT15, FONT18 } from '@/styles/fontType.js';
import PrimaryButton from '@/styles/button/PrimaryButton.jsx';

function MessageCardModal({ modalInfo, handleCloseModal }, ref) {
  const { profileImageURL, sender, relationship, content, fontFamily, createdDate } = modalInfo;

  return (
    <>
      <BackDrop ref={ref} />
      <ModalContainer>
        <MessageCardTop style={{ position: 'relative' }}>
          <MessageCardProfile>
            <ProfileImageWrapper>
              <ProfileImage src={profileImageURL} />
            </ProfileImageWrapper>
            <AuthorWrapper>
              <AuthorTitle>
                <AuthorFrom>From.</AuthorFrom>
                <Author>{sender}</Author>
              </AuthorTitle>
              <Badge relationship={relationship} />
            </AuthorWrapper>
          </MessageCardProfile>
          <ModalMessageDate>{createdDate}</ModalMessageDate>
        </MessageCardTop>
        <ModalMessageBody $font={fontFamily}>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </ModalMessageBody>
        <ModalButton $size="small" onClick={handleCloseModal}>
          확인
        </ModalButton>
      </ModalContainer>
    </>
  );
}

export default forwardRef(MessageCardModal);

export const BackDrop = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  z-index: 4;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
`;

const ModalContainer = styled.div`
  position: fixed;
  padding: 2rem;
  z-index: 5;
  width: 34rem;
  height: 29.5rem;
  border-radius: 16px;
  background: var(--white, #fff);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.08);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: 768px) {
    width: 60rem;
    height: 47.6rem;
    padding: 4rem;
  }
`;

const ModalMessageBody = styled.div`
  margin-top: 1.6rem;
  width: 100%;
  height: 10.6rem;
  padding-right: 1.5rem;
  overflow: scroll;
  overflow-x: hidden;

  @media (min-width: 768px) {
    height: 24rem;
  }

  p {
    ${FONT15};
    font-family: ${({ $font }) => $font};

    @media (min-width: 768px) {
      ${FONT18};
      font-family: ${({ $font }) => $font};
    }
  }
`;

const ModalMessageDate = styled(MessageDate)`
  position: absolute;
  right: 0.5rem;
  bottom: 2rem;

  @media (min-width: 768px) {
    bottom: 4rem;
  }
`;

const ModalButton = styled(PrimaryButton)`
  display: flex;
  width: 12rem;
  padding: 0.7rem 1.6rem;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 10.7rem;
  bottom: 1.8rem;

  @media (min-width: 768px) {
    left: 24rem;
    bottom: 4rem;
  }
`;
