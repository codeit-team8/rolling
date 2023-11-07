import Badge from '@/components/MessageCard/Badge.jsx';
import {
  Author,
  AuthorFrom,
  AuthorTitle,
  AuthorWrapper,
  MessageBody,
  MessageCardDivLine,
  MessageCardProfile,
  MessageCardTop,
  MessageCardWrapper,
  MessageDate,
  ProfileImage,
  ProfileImageWrapper,
} from '@/components/MessageCard/MessageCard.style.jsx';

function MessageCard() {
  return (
    <MessageCardWrapper>
      <MessageCardTop>
        <MessageCardProfile>
          <ProfileImageWrapper>
            <ProfileImage />
          </ProfileImageWrapper>
          <AuthorWrapper>
            <AuthorTitle>
              <AuthorFrom>From.</AuthorFrom>
              <Author>손상희</Author>
            </AuthorTitle>
            <Badge relationship="지인" />
          </AuthorWrapper>
        </MessageCardProfile>
      </MessageCardTop>
      <MessageCardDivLine />
      <MessageBody>코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!</MessageBody>
      <MessageDate>2023.07.08</MessageDate>
    </MessageCardWrapper>
  );
}

export default MessageCard;
