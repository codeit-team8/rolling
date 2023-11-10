import styled, { css } from 'styled-components';

const SIZE = {
  56: css`
    height: 5.6rem;
    padding: 1.4rem 1.6rem;
    border-radius: 12px;
  `,
  40: css`
    height: 4rem;
    padding: 0.8rem 1.6rem;
    border-radius: 6px;
  `,
  36: css`
    height: 3.6rem;
    padding: 0.6rem 1.6rem;
    border-radius: 6px;
  `,
  28: css`
    height: 2.8rem;
    padding: 0.2rem 1.6rem;
    border-radius: 6px;
  `,
};

const OutlineButtonStyle = styled.button`
  border: 1px solid var(--gray-300, #ccc);
  background: var(--white, #fff);
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ $size = '28' }) => SIZE[$size]}

  &:disabled {
    background: var(--gray-300, #ccc);
    color: var(--white, #fff);
  }

  &:hover {
    background: var(--gray-100, #f6f6f6);
  }

  &:active {
    background: var(--gray-100, #f6f6f6);
  }

  &:focus {
    border: 1px solid var(--gray-500, #555);
  }
`;

export default OutlineButtonStyle;
