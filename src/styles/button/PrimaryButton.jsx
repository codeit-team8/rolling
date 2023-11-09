import styled, { css } from 'styled-components';
import * as F from '@/styles/fontType';

export default function PrimaryButton({ text = '', size = 'big' }) {
  return <Button $size={size}>{text}</Button>;
}

const buttonSize = ({ $size }) => css`
  ${$size === 'big' ? `${F.FONT18B}` : `${F.FONT16}`};
  padding: ${$size === 'big' ? '1.4rem 2.4rem' : '0.7rem 1.6rem'};
  border-radius: ${$size === 'big' ? '1.2rem' : '0.6rem'};
`;

const Button = styled.button`
  ${buttonSize}
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
