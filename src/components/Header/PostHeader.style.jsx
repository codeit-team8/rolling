import styled from 'styled-components';
import HeaderLine from '@/styles/HeaderLine.jsx';
import { ButtonDivLine } from '@/styles/button/ButtonDivLine.jsx';

export const PostHeaderContainer = styled.header`
  width: 100%;
  height: 10.4rem;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    height: 6.8rem;
    padding: 0 2.4rem;
    gap: 6.8rem;
  }

  @media (min-width: 1248px) {
    max-width: 120rem;
    margin: 0 auto;
    padding: 0;
    gap: 26.3rem;
  }
`;

export const PostUserContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1.2rem 2rem;

  @media (min-width: 768px) {
    padding: 0;
  }
`;

export const PostHeaderLine = styled(HeaderLine)`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const PostUserCounterContainer = styled.div`
  display: none;

  @media (min-width: 1248px) {
    display: flex;
    gap: 1.1rem;
  }
`;

export const PostUserCounter = styled.div`
  display: flex;
  h1 {
    color: var(--gray-900, #181818);
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.7rem;

    span {
      font-size: 1.8rem;
      font-weight: 700;
    }
  }
`;

export const PostUser = styled.h1`
  color: var(--gray-800, #2b2b2b);
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.8rem;
  letter-spacing: -0.018rem;

  @media (min-width: 768px) {
    font-size: 2.8rem;
    line-height: 4.2rem;
    letter-spacing: -0.028rem;
  }
`;

export const HeaderServiceContainer = styled.div`
  display: flex;
  padding: 0.8rem 0;
  align-items: center;

  @media (min-width: 1248px) {
    gap: 2.8rem;
  }
`;

export const HeaderService = styled.div`
  display: flex;
  padding: 0 2rem;
  gap: 0.2rem;
  align-items: flex-start;

  @media (min-width: 1248px) {
    padding: 0;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

export const ProfileDivLine = styled(ButtonDivLine)`
  display: none;

  @media (min-width: 1248px) {
    display: block;
  }
`;
