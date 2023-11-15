import styled from 'styled-components';
import PrimaryButton from '@/styles/button/PrimaryButton.jsx';
import { FONT16 } from '@/styles/fontType.js';
import OutlineButton from '@/styles/button/OutlineButton.jsx';

export const PostBackground = styled.div`
  background: ${({ $backgroundColor, $imageUrl }) =>
  $imageUrl
    ? `linear-gradient(180deg, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0.54) 100%), url(${$imageUrl})`
    : `${$backgroundColor}`};
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  @media (min-width: 1248px) {
    padding: 6.3rem 11.4rem 0;
  }
`;

export const PostContainer = styled.div`
  padding: 4.2rem 2rem 0;
  display: grid;
  grid-template-columns: repeat(1, 32rem);
  grid-template-rows: repeat(auto-fit, 23rem);
  justify-content: center;
  gap: 2.4rem;
  margin: 0 auto;
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
    padding: 4.9rem 2.4rem;
    height: 120rem;
  }

  @media (min-width: 1248px) {
    margin-top: 1.2rem;
    padding: 0;
    grid-template-columns: repeat(3, 38.4rem);
    grid-template-rows: repeat(auto-fit, 28rem);
  }
`;

export const DeleteContainer = styled.div`
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
    position: static;
    justify-content: flex-end;
    width: 100%;
    height: 3.9rem;
    padding: 0;
  }
`;

export const DeleteButton = styled(PrimaryButton)`
  width: 100%;

  @media (min-width: 1248px) {
    ${FONT16};
    padding: 0.7rem 1.6rem;
    width: 9.2rem;
    height: 3.9rem;
  }
`;

export const EditButton = styled(OutlineButton)`
  position: absolute;
  right: 20px;
  top: 128px;
  display: flex;
  border-radius: 8px;
  font-size: 1.6rem;

  @media (min-width: 768px) {
    right: 24px;
    top: 172px;
  }

  @media (min-width: 1248px) {
    right: 196px;
    top: 360px;
  }
`;

export const LoadingDiv = styled.div`
  height: 2rem;
`;
