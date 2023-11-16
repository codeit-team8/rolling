import styled from 'styled-components';
import PrimaryButton from '@/styles/button/PrimaryButton.jsx';

export const ErrorContainer = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Oops = styled.div`
  font-size: 5rem;
  font-weight: 700;
  position: absolute;
  top: 12rem;
`;

export const Img = styled.img`
  width: 35rem;

  @media (min-width: 768px) {
    width: 50rem;
  }
`;

export const P = styled.p`
  font-size: 1.6rem;
  margin: 2rem 0;
`;

export const Button = styled(PrimaryButton)`
  width: 30rem;
`;
