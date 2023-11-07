import styled from 'styled-components';
import Badge from '@/components/MessageCard/Badge.jsx';

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
      <p>메시지 카드입니다.</p>
    </MessageCardWrapper>
  );
}

export default MessageCard;

const MessageCardWrapper = styled.div`
  width: 38.4rem;
  height: 28rem;
  border-radius: 16px;
  background: var(--white);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.08);
`;

const MessageCardTop = styled.div`
  display: flex;
  width: 100%;
  padding: 2.8rem 2.4rem 1.5rem 2.4rem;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 1.5rem;
`;

const MessageCardProfile = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.4rem;
`;

const ProfileImageWrapper = styled.div`
  display: flex;
  width: 5.6rem;
  height: 5.6rem;
  align-items: center;
  border-radius: 100px;
  border: 1px solid var(--gray-200);
  background: var(--white);
`;

const ProfileImage = styled.img`
  background: lightgray 50% / cover no-repeat;
`;

const AuthorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.6rem;
`;

const AuthorTitle = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
`;

const AuthorFrom = styled.h3`
  color: var(--black);
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.4rem;
`;

const Author = styled.h3`
  color: var(--black);
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.4rem;
`;

const MessageCardDivLine = styled.div`
  width: 33.6rem;
  height: 1px;
  background: var(--gray-200);
`;
