import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import PostHeader from '@/components/Header/PostHeader.jsx';
import PlusMessageCard from '@/components/MessageCard/PlusMessageCard';
import MessageCard from '@/components/MessageCard/MessageCard';
import { deleteRecipientsId, getReactionOfRecipient, getRecipientsId, reactionToRecipient } from '@/api/recipients';
import { BACKGROUND_COLOR_PALETTE } from '@/util/backgroundColors.jsx';
import { deleteMessage, getMessages } from '@/api/message';
import useAsync from '@/hooks/useAsync';
import Modal from '@/components/Modal/Modal.jsx';
import MessageCardModal from '@/components/Modal/MessageCardModal.jsx';
import useOnClickOutside from '@/hooks/useOnClickOutside.js';
import PrimaryButton from '@/styles/button/PrimaryButton';
import OutlineButton from '@/styles/button/OutlineButton';
import { FONT16 } from '@/styles/fontType.js';

const INIT_MODAL_INFO = {
  profileImageURL: '',
  sender: '',
  relationship: '',
  content: '',
  fontFamily: '',
  createdDate: '',
};

function Post() {
  // Modal
  const modalRef = useRef();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalInfo, setModalInfo] = useState(INIT_MODAL_INFO);

  // PostHeader
  const [, , getRecipientsIdAsync] = useAsync(getRecipientsId);
  const [postName, setPostName] = useState('');
  const [postMessageCount, setPostMessageCount] = useState(0);
  const [reactions, setReactions] = useState([]);
  const [emojiData, setEmojiData] = useState([]);
  const [profileImages, setProfileImages] = useState([]);
  const [background, setBackground] = useState('var(--orange-200, #ffe2ad)');

  // Messages
  const [messageContents, setMessageContents] = useState([]);
  const [hasNext, setHasNext] = useState(true);
  const [offset, setOffset] = useState(0);
  const [isLoading, , getMessagesAsync] = useAsync(getMessages);
  const [, , getReactionOfRecipientAsync] = useAsync(getReactionOfRecipient);
  const [, , getReactionToRecipientAsync] = useAsync(reactionToRecipient);
  const [, setSelectedEmoji] = useState(null);
  const observerRef = useRef(null);

  const { recipientId } = useParams();
  const navigate = useNavigate();

  // edit
  const [isEdit, setIsEdit] = useState(false);
  const location = useLocation();
  const checkEditPage = () => location.pathname.includes('edit');

  const handleEditClick = () => {
    if (!location.pathname.includes('edit')) {
      navigate(`/post/${recipientId}/edit`);
    } else {
      navigate(-1);
    }
  };

  useEffect(() => {
    if (location.pathname.includes('edit')) {
      setIsEdit(true);
    } else {
      setIsEdit(false);
    }
  }, [location.pathname]);

  const handlePostHeader = (name, messageCount, topReactions, recentMessages) => {
    setPostName(name);
    setPostMessageCount(messageCount);
    setReactions([...topReactions].slice(0, 3));
    const recentPostProfileImages =
      recentMessages.length === 0 ? [] : recentMessages.map((message) => message.profileImageURL).slice(0, 3);
    setProfileImages(recentPostProfileImages);
  };

  const handleRollingPaper = useCallback(async () => {
    const results = await getRecipientsIdAsync({ id: recipientId });

    const { name, messageCount, backgroundColor, backgroundImageURL, topReactions } = { ...results };
    const { color } = BACKGROUND_COLOR_PALETTE[backgroundColor];
    const recentMessages = [...results.recentMessages];

    handlePostHeader(name, messageCount, topReactions, recentMessages);

    setBackground({ color, backgroundImageURL });
  }, [getRecipientsIdAsync, recipientId]);

  const handleGetEmoji = useCallback(async () => {
    const response = await getReactionOfRecipientAsync({ id: recipientId });
    const { results } = { ...response };
    setEmojiData([...results]);
  }, [getReactionOfRecipientAsync, recipientId]);

  const postEmoji = useCallback(
    async (value) => {
      await getReactionToRecipientAsync(value);
      handleGetEmoji();
    },
    [getReactionToRecipientAsync, handleGetEmoji],
  );

  const handleEmojiSelect = (emojiObject) => {
    setSelectedEmoji(emojiObject);
    postEmoji({ id: recipientId, emoji: emojiObject.emoji, type: 'increase' });
  };

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

  useEffect(() => {
    handleRollingPaper();
  }, [handleRollingPaper]);

  const handleDeletePage = async () => {
    await deleteRecipientsId({ id: recipientId });
    navigate('/list');
  };

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
  }, []);

  useEffect(() => {
    getMessageOffset();
  }, [getMessageOffset]);

  useEffect(() => {
    handleGetEmoji();
  }, [handleGetEmoji]);

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
        emojiData={emojiData}
        handleEmojiSelect={handleEmojiSelect}
      />
      <PostBackground $backgroundColor={background.color} $imageUrl={background.backgroundImageURL}>
        <EditButtonContainer>
          <EditButton $size="H40" type="button" onClick={handleEditClick}>
            {isEdit ? '뒤로가기' : '편집하기'}
          </EditButton>
        </EditButtonContainer>
        {checkEditPage() && (
          <DeleteContainer>
            <DeleteButton onClick={handleDeletePage}>삭제하기</DeleteButton>
          </DeleteContainer>
        )}
        <PostContainer>
          {!checkEditPage() && <PlusMessageCard />}
          {messageContents &&
            messageContents.map((messageCard) => (
              <MessageCard
                value={messageCard}
                key={messageCard.id}
                checkEditPage={checkEditPage()}
                onDelete={() => onDelete(messageCard.id)}
                handleModal={handleOpenModal}
              />
            ))}
          {hasNext && <Loading ref={observerRef} />}
        </PostContainer>
        {isOpenModal && (
          <Modal>
            <MessageCardModal ref={modalRef} modalInfo={modalInfo} handleCloseModal={handleCloseModal} />
          </Modal>
        )}
      </PostBackground>
    </>
  );
}

export default Post;

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

  @media (min-width: 1248px) {
    padding: 6.3rem 2.4rem 0;
  }
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
    // margin-top: 49px;
  }

  @media (min-width: 1248px) {
    margin-top: 1.2rem;
    padding: 0;
    grid-template-columns: repeat(3, 38.4rem);
    grid-template-rows: repeat(auto-fit, 28rem);
  }
`;

const DeleteContainer = styled.div`
  position: fixed;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2.4rem 2rem;
  bottom: 0;

  @media (min-width: 768px) {
    padding: 2.4rem;
  }

  @media (min-width: 1248px) {
    z-index: 4;
    position: absolute;
    justify-content: flex-end;
    width: 120rem;
    height: 3.9rem;
    padding-right: 10rem;
    top: 19.2rem;
  }
`;

const DeleteButton = styled(PrimaryButton)`
  width: 100%;

  @media (min-width: 1248px) {
    ${FONT16};
    padding: 0.7rem 1.6rem;
    width: 9.2rem;
    height: 3.9rem;
  }

  @media (min-width: 1248px) {
    position: relative;
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
    padding: 0;
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
    width: 9.2rem;
    height: 3.9rem;
}
  }
`;

const Loading = styled.div`
  height: 2rem;
`;
