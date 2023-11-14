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

function MessageCard({ value }) {
  const { profileImageURL, sender, relationship, content, createdAt } = value;
  const location = useLocation();
  const deleteBoxVisible = location.pathname === '/edit';

  return (
    <MessageCardWrapper>
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
      <MessageBody>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </MessageBody>
      <MessageDate>{new Date(createdAt).toLocaleDateString()}</MessageDate>
    </MessageCardWrapper>
  );
}

export default MessageCard;
