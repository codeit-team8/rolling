import { useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import PostHeader from '@/components/Header/PostHeader.jsx';
import PlusMessageCard from '@/components/MessageCard/PlusMessageCard';
import MessageCard from '@/components/MessageCard/MessageCard';
import { getRecipientsId } from '@/api/recipients';
import { BACKGROUND_COLOR_PALETTE } from '@/util/backgroundColors.jsx';
import { getMessages } from '@/api/message';
import useAsync from '@/hooks/useAsync';
import Modal from '@/components/Modal/Modal.jsx';
import MessageCardModal from '@/components/Modal/MessageCardModal.jsx';
import useOnClickOutside from '@/hooks/useOnClickOutside.js';

const INIT_MODAL_INFO = {
  profileImageURL: '',
  sender: '',
  relationship: '',
  content: '',
  fontFamily: '',
  createdDate: '',
};

function Post() {
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

  const getData = useCallback(async () => {
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

  useEffect(() => {
    getData();
  }, [getData]);

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
      <PostContainer $backgroundColor={background.color} $imageUrl={background.backgroundImageURL}>
        <PlusMessageCard />
        {messageContents &&
          messageContents.map((messageCard) => (
            <MessageCard value={messageCard} key={messageCard.id} handleModal={handleOpenModal} />
          ))}
        {hasNext && <Loading ref={observerRef}>여기 닿으면 로~드</Loading>}
      </PostContainer>
      {isOpenModal && (
        <Modal>
          <MessageCardModal ref={modalRef} modalInfo={modalInfo} handleCloseModal={handleCloseModal} />
        </Modal>
      )}
    </>
  );
}

export default Post;

const PostContainer = styled.div`
  padding: 4.2rem 2rem 0;
  display: grid;
  grid-template-columns: repeat(1, 32rem);
  grid-template-rows: repeat(auto-fit, 23rem);
  justify-content: center;
  gap: 2.4rem;
  margin: 0 auto;
  align-items: center;
  height: 100vh;
  background: ${({ $backgroundColor, $imageUrl }) =>
    $imageUrl
      ? `linear-gradient(180deg, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0.54) 100%), url(${$imageUrl})`
      : `${$backgroundColor}`};
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
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
    padding: 4.9rem 2.4rem;
  }

  @media (min-width: 1248px) {
    padding: 6rem 2.4rem;
    grid-template-columns: repeat(3, 38.4rem);
    grid-template-rows: repeat(auto-fit, 28rem);
  }
`;

const Loading = styled.div`
  height: 2rem;
`;
