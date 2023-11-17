import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useCallback, useEffect, useRef, useState } from 'react';
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
import FloatButton from '@/components/FloatButton/FloatButton';
import {
  DeleteButton,
  DeleteContainer,
  EditButton,
  EditButtonContainer,
  Loading,
  PostBackground,
  PostContainer,
} from '@/pages/Post.style.jsx';
import { throttle } from 'lodash';

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
  const [, , getReactionOfRecipientAsync] = useAsync(getReactionOfRecipient);
  const [, , reactionToRecipientAsync] = useAsync(reactionToRecipient);
  const [, setSelectedEmoji] = useState(null);
  const [profileImages, setProfileImages] = useState([]);
  const [background, setBackground] = useState('var(--orange-200, #ffe2ad)');

  // Messages
  const [messageContents, setMessageContents] = useState([]);
  const [hasNext, setHasNext] = useState(true);
  const [offset, setOffset] = useState(0);
  const [isLoadingMessages, , getMessagesAsync] = useAsync(getMessages);
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
    throttle(async (value) => {
      await reactionToRecipientAsync(value);
      handleGetEmoji();
    }, 500),
    [],
  );

  const handleEmojiSelect = (emojiObject) => {
    setSelectedEmoji(emojiObject);
    postEmoji({ id: recipientId, emoji: emojiObject.emoji, type: 'increase' });
  };

  const getMessageMore = useCallback(
    (entries) => {
      if (!isLoadingMessages) {
        const target = entries[0];
        if (target.isIntersecting) {
          setOffset((prev) => prev + 8);
        }
      }
    },
    [isLoadingMessages],
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
        {!isEdit && <FloatButton />}
      </PostBackground>
    </>
  );
}

export default Post;
