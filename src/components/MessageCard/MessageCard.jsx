import { useLocation } from 'react-router-dom';
import Badge from '@/components/MessageCard/Badge.jsx';
import {
  Author,
  AuthorFrom,
  AuthorTitle,
  AuthorWrapper,
  DeleteBox,
  DeleteImg,
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

function MessageCard({ value, handleModal }) {
  const { profileImageURL, sender, relationship, content, font, createdAt } = value;
  const location = useLocation();
  const deleteBoxVisible = location.pathname === '/edit';
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

  return (
    <MessageCardWrapper onClick={getCardInfo}>
      <MessageCardTop>
        {deleteBoxVisible && (
          <DeleteBox>
            <DeleteImg src={deleteIcon} alt="메시지 카드 삭제 버튼" />
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
      <MessageBody $font={fontFamily}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </MessageBody>
      <MessageDate>{createdDate}</MessageDate>
    </MessageCardWrapper>
  );
}

export default MessageCard;
