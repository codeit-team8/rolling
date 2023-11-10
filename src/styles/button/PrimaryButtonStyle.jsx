import styled, { css } from 'styled-components';
import * as F from '@/styles/fontType';

const SIZE = {
  big: css`
    ${F.FONT18B};
    padding: 1.4rem 2.4rem;
    border-radius: 1.2rem;
  `,
  small: css`
    ${F.FONT16};
    padding: 0.7rem 1.6rem;
    border-radius: 0.6rem;
  `,
};

const PrimaryButtonStyle = styled.button`
  ${({ $size = 'big' }) => SIZE[$size]}
  color: var(--white, #FFF);
  text-align: center;
  background: var(--purple-600, #9935ff);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  &:disabled {
    background-color: var(--gray-300, #ccc);
  }

  &:hover {
    background-color: var(--purple-700, #861dee);
  }

  &:active {
    background-color: var(--purple-800, #6e0ad1);
  }

  &:focus {
    background-color: var(--purple-800, #6e0ad1);
  }
`;

export default PrimaryButtonStyle;
