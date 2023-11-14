import styled from 'styled-components';

export const MessageCardWrapper = styled.div`
  width: 32rem;
  position: relative;
  height: 23rem;
  padding: 1.6rem;
  border-radius: 16px;
  background: var(--white);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.08);

  @media (min-width: 768px) {
    width: 38.4rem;
    height: 28rem;
    padding: 2.8rem 2.4rem;
  }
`;

export const MessageCardTop = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 1.5rem;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 1.5rem;
`;

export const DeleteBox = styled.div`
  display: inline-flex;
  width: 4rem;
  height: 4rem;
  position: absolute;
  right: 2.4rem;
  top: 2.8rem;
  padding: 0.8rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 6px;
  border: 1px solid var(--gray-300, #ccc);
  background: var(--white, #fff);
`;

export const DeleteImg = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;

export const MessageCardProfile = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.4rem;
`;

export const ProfileImageWrapper = styled.div`
  display: flex;
  width: 5.6rem;
  height: 5.6rem;
  align-items: center;
  border-radius: 100px;
  border: 1px solid var(--gray-200);
  background: var(--white);
`;

export const ProfileImage = styled.img`
  border-radius: 100%;
  width: 100%;
`;

export const AuthorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.6rem;
`;

export const AuthorTitle = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
`;

export const AuthorFrom = styled.span`
  color: var(--black);
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.4rem;
`;

export const Author = styled.h3`
  color: var(--black);
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.4rem;
`;

export const MessageCardDivLine = styled.div`
  width: 27.2rem;
  height: 1px;
  background: var(--gray-200);

  @media (min-width: 768px) {
    width: 33.6rem;
`;

export const MessageBody = styled.div`
  width: 100%;
  height: 10.6rem;
  color: var(--gray-600, #4a4a4a);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  font-size: 1.5rem;
  line-height: 2.8rem;
  letter-spacing: -0.018px;

  & > * {
    font-size: inherit;
  }

  @media (min-width: 768px) {
    margin: 1.6rem 0;
    font-size: 1.8rem;
  }
`;

export const MessageDate = styled.span`
  color: var(--gray-400, #999);
  font-size: 1.2rem;
  line-height: 1.8rem;
  letter-spacing: -0.006rem;
`;
