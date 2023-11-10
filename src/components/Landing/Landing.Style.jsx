import styled from 'styled-components';
import * as F from '@/styles/fontType';

export const Section = styled.section`
  display: flex;
  padding: 2.4rem 2.4rem 6.2278rem;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  border-radius: 2rem;
  background: var(--Surface, #f6f8ff);
  overflow: hidden;
`;

export const Section1 = styled(Section)`
  @media (min-width: 1248px) {
    flex-direction: row;
    padding: 6rem 0 6rem 6rem;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 15.2rem;
  }
`;

export const Section2 = styled(Section)`
  @media (min-width: 1248px) {
    flex-direction: row-reverse;
    display: flex;
    padding: 6rem 19.2rem 6rem 0;
    align-items: flex-start;
    height: 32.4rem;
    gap: 0;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 72rem;
  }
`;

export const Title = styled.h2`
  ${F.FONT18B}
  color: var(--gray-900, #181818);

  @media (min-width: 768px) {
    ${F.FONT24B}
  }
`;

export const Div = styled.div`
  ${F.FONT14B}
  width: fit-content;
  color: var(--white, #fff);
  border-radius: 5rem;
  background: var(--purple-600, #9935ff);
  display: flex;
  padding: 0.4rem 1.2rem;
  justify-content: center;
  align-items: center;
`;

export const P = styled.p`
  ${F.FONT15}
  color: var(--gray-500, #555);

  @media (min-width: 768px) {
    ${F.FONT18}
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;

  @media (min-width: 768px) {
    gap: 0.8rem;
  }
`;

export const Img = styled.img`
  height: 11.3rem;

  @media (min-width: 768px) {
    width: 72rem;
    height: auto;
  }
`;

export const Br = styled.br`
  display: none;

  @media (min-width: 1248px) {
    display: block;
  }
`;
