import { useParams, useLocation } from 'react-router-dom';
import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import PostHeader from '@/components/Header/PostHeader.jsx';
import PlusMessageCard from '@/components/MessageCard/PlusMessageCard';
import MessageCard from '@/components/MessageCard/MessageCard';
import { getRecipientsId } from '@/api/recipients';
import { BACKGROUND_COLOR_PALETTE } from '@/util/backgroundColors.jsx';
import { getMessages, deleteMessage } from '@/api/message';
import useAsync from '@/hooks/useAsync';
import Modal from '@/components/Modal/Modal.jsx';
import MessageCardModal from '@/components/Modal/MessageCardModal.jsx';
import useOnClickOutside from '@/hooks/useOnClickOutside.js';
import PrimaryButton from '@/styles/button/PrimaryButton';
import OutlineButton from '@/styles/button/OutlineButton';

const INIT_MODAL_INFO = {
  profileImageURL: '',
  sender: '',
  relationship: '',
  content: '',
  fontFamily: '',
  createdDate: '',
};

export default function Post() {
  const location = useLocation();
  const EditPage = location.pathname.includes('/edit');

  const [isEdit, setIsEdit] = useState(false);
  const handleEditClick = () => {
    if (isEdit) {
      console.log('true상태!!');
    } else {
      console.log('false상태!!');
    }
    setIsEdit(!isEdit);
  };

  const modalRef = useRef();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalInfo, setModalInfo] = useState(INIT_MODAL_INFO);
  const [postName, setPostName] = useState('');
  const [postMessageCount, setPostMessageCount] = useState(0);
  const [reactions, setReactions] = useState([]);
  const [profileImages, setProfileImages] = useState([]);
  const [messageContents, setMessageContents] = useState([]);
  const [background, setBackground] = useState('var(--orange-200, #ffe2ad)');
  const [hasNext, setHasNext] = useState(true);
  const [offset, setOffset] = useState(0);
  const [isLoading, , getMessagesAsync] = useAsync(getMessages);
  const observerRef = useRef(null);
  const { recipientId } = useParams();

  const handlePostHeader = (name, messageCount, topReactions, recentMessages) => {
    setPostName(name);
    setPostMessageCount(messageCount);
    setReactions([...topReactions].slice(0, 3));
    const recentPostProfileImages =
      recentMessages.length === 0 ? [] : recentMessages.map((message) => message.profileImageURL).slice(0, 3);
    setProfileImages(recentPostProfileImages);
  };

  const handleRollingPaper = useCallback(async () => {
    const results = await getRecipientsId({ id: recipientId });
    const { name, messageCount, backgroundColor, backgroundImageURL, topReactions } = { ...results };
    const { color } = BACKGROUND_COLOR_PALETTE[backgroundColor];
    const recentMessages = [...results.recentMessages];

    handlePostHeader(name, messageCount, topReactions, recentMessages);

    setBackground({ color, backgroundImageURL });
  }, [recipientId]);

  const getMessageMore = useCallback(
    (entries) => {
      if (!isLoading) {
        const target = entries[0];
        if (target.isIntersecting) {
          setOffset((prev) => prev + 8);
        }
      }
    },
    [isLoading],
  );

  const getMessageOffset = useCallback(async () => {
    const { results, next } = await getMessagesAsync({ recipientId, offset });
    setMessageContents((prev) => [...prev, ...results]);
    setHasNext(next);
  }, [offset, recipientId, getMessagesAsync]);

  const handleOpenModal = (values) => {
    setIsOpenModal(true);
    setModalInfo({ ...modalInfo, ...values });
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
    setModalInfo(INIT_MODAL_INFO);
  };

  useOnClickOutside(modalRef, handleCloseModal);

  useEffect(() => {
    handleRollingPaper();
  }, [handleRollingPaper]);

  const onDelete = useCallback(async (messageId) => {
    await deleteMessage({ messageId });
    setMessageContents((prevMessages) => prevMessages.filter((message) => message.id !== messageId));
  });

  useEffect(() => {
    getMessageOffset();
  }, [getMessageOffset]);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 1,
    };
    const io = new IntersectionObserver(getMessageMore, option);
    if (observerRef.current) {
      io.observe(observerRef.current);
    }
    return () => {
      io.disconnect();
    };
  }, [getMessageMore]);

  return (
    <>
      <PostHeader
        name={postName}
        messageCount={postMessageCount}
        reactions={reactions}
        profileImages={profileImages}
        recipientId={recipientId}
      />
      <PostBackground $backgroundColor={background.color} $imageUrl={background.backgroundImageURL}>
        {EditPage && !isEdit && (
          <EditButtonContainer>
            <EditButton $size="H40" type="button" onClick={handleEditClick} isEdit={EditPage}>
              편집하기
            </EditButton>
          </EditButtonContainer>
        )}
        <PostContainer>
          {!isEdit && <PlusMessageCard />}
          {messageContents &&
            messageContents.map((messageCard) => (
              <MessageCard
                value={messageCard}
                key={messageCard.id}
                isEdit={isEdit}
                onDelete={() => onDelete(messageCard.id)}
                handleModal={handleOpenModal}
              />
            ))}
          {hasNext && <Loading ref={observerRef} />}
        </PostContainer>
        {isEdit && (
          <SaveButtonContainer>
            <SaveButton $size="big">삭제하기</SaveButton>
          </SaveButtonContainer>
        )}

        {isOpenModal && (
          <Modal>
            <MessageCardModal ref={modalRef} modalInfo={modalInfo} handleCloseModal={handleCloseModal} />
          </Modal>
        )}
      </PostBackground>
    </>
  );
}

const PostBackground = styled.div`
  background: ${({ $backgroundColor, $imageUrl }) =>
    $imageUrl
      ? `linear-gradient(180deg, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0.54) 100%), url(${$imageUrl})`
      : `${$backgroundColor}`};
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostContainer = styled.div`
  // margin: 4.2rem 0 0 0;
  padding: 0 2rem 0;
  display: grid;
  grid-template-columns: repeat(1, 32rem);
  grid-template-rows: repeat(auto-fit, 23rem);
  justify-content: center;
  gap: 2.4rem;
  margin: 2.4rem auto 0 auto;
  align-items: center;
  height: 100vh;
  overflow: scroll;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 35.4rem);
    grid-template-rows: repeat(auto-fit, 28.4rem);
    gap: 3rem;
    padding: 0 2.4rem;
    height: 120rem;
    margin-top: 49px;
  }

  @media (min-width: 1248px) {
    padding: 0 2.4rem;
    grid-template-columns: repeat(3, 38.4rem);
    grid-template-rows: repeat(auto-fit, 28rem);
    margin-top: 113px;
  }
`;
const SaveButtonContainer = styled.div`
  bottom: 2.4rem;
  position: absolute;
  margin-top: 4.2rem;
  padding: 2.4rem 2rem;
  background-color: @media (min-width: 768px) {
    margin-top: 13.2rem;
    padding: 2.4rem;
  }

  @media (min-width: 1248px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
  }
`;

const SaveButton = styled(PrimaryButton)`
  width: 100%;

  @media (min-width: 1248px) {
    width: 28rem;
  }
`;

const EditButtonContainer = styled.div`
  width: 360px;
  padding: 24px 20px 0 20px;
  // margin: 0 0 -26px 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  @media (min-width: 768px) {
    width: 768px;
  }

  @media (min-width: 1248px) {
    width: 120rem;
  }
`;

const EditButton = styled(OutlineButton)`
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  font-size: 1.6rem;
  z-index: 1;

  @media (min-width: 768px) {
    right: 24px;
    top: 172px;
  }

  @media (min-width: 1248px) {
    right: 196px;
    top: 360px;
  }
`;

const Loading = styled.div`
  height: 2rem;
`;
