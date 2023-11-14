import Badge from '@/components/MessageCard/Badge.jsx';
import {
  Author,
  AuthorFrom,
  AuthorTitle,
  AuthorWrapper,
  DeleteBox,
  DeleteImg,
  MessageBody,
  MessageCardDivLine,
  MessageCardProfile,
  MessageCardTop,
  MessageCardWrapper,
  MessageDate,
  ProfileImage,
  ProfileImageWrapper,
} from '@/components/MessageCard/MessageCard.style.jsx';
import deleteIcon from '@/assets/icons/deleted.svg';

function MessageCard({ value }) {
  return (
    <MessageCardWrapper>
      <MessageCardTop>
        <DeleteBox>
          <DeleteImg src={deleteIcon} alt="메시지 카드 삭제 버튼" />
        </DeleteBox>
        <MessageCardProfile>
          <ProfileImageWrapper>
            <ProfileImage src={value.profileImageURL} />
          </ProfileImageWrapper>
          <AuthorWrapper>
            <AuthorTitle>
              <AuthorFrom>From.</AuthorFrom>
              <Author>{value.sender}</Author>
            </AuthorTitle>
            <Badge relationship={value.relationship} />
          </AuthorWrapper>
        </MessageCardProfile>
      </MessageCardTop>
      <MessageCardDivLine />
      <MessageBody>
        <div dangerouslySetInnerHTML={{ __html: value.content }} />
      </MessageBody>
      <MessageDate>{new Date(value.createdAt).toLocaleDateString()}</MessageDate>
    </MessageCardWrapper>
  );
}

export default MessageCard;
