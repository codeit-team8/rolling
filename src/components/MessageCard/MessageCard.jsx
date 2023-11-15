import { useCallback } from 'react';
import { deleteMessage } from '@/api/message';
import Badge from '@/components/MessageCard/Badge.jsx';
import { useLocation } from 'react-router-dom';
import {
  Author,
  AuthorFrom,
  AuthorTitle,
  AuthorWrapper,
  DeleteBox,
  DeleteImg,
  MessageWrapper,
  MessageBody,
  MessageCardProfile,
  MessageCardTop,
  MessageCardWrapper,
  MessageDate,
  ProfileImage,
  ProfileImageWrapper,
} from '@/components/MessageCard/MessageCard.style.jsx';
import deleteIcon from '@/assets/icons/deleted.svg';
import { FONT_PALETTE } from '@/util/font.jsx';

function MessageCard({ value, handleModal, checkEditPage, onDelete }) {
  const { id, profileImageURL, sender, relationship, content, font, createdAt } = value;

  const fontFamily = FONT_PALETTE[font];
  const createdDate = new Date(createdAt).toLocaleDateString();

  const getCardInfo = () => {
    handleModal({
      profileImageURL,
      sender,
      relationship,
      content,
      fontFamily,
      createdDate,
    });
  };

  // const handleDelete = useCallback(async () => {
  //   const deleteId = await deleteMessage({ messageId: id });
  // }, [id]);

  return (
    <MessageCardWrapper
      onClick={(e) => {
        if (!e.target.classList.contains('icon')) {
          getCardInfo();
        }
      }}
    >
      <MessageCardTop>
        {checkEditPage && (
          <DeleteBox>
            <DeleteImg src={deleteIcon} alt="메시지 카드 삭제 버튼" onClick={() => onDelete(id)} className="icon" />
          </DeleteBox>
        )}
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
      </MessageCardTop>
      <MessageWrapper>
        <MessageBody $font={fontFamily}>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </MessageBody>
      </MessageWrapper>
      <MessageDate>{createdDate}</MessageDate>
    </MessageCardWrapper>
  );
}

export default MessageCard;
