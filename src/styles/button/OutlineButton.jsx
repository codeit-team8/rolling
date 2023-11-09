import styled, { css } from 'styled-components';

const SiZE = {
  56: css``,
};

export default function OutlineButton({ children, size }) {
  return <Button>{children}</Button>;
}
const Button = styled.button`
  border: 1px solid var(--gray-300, #ccc);
  background: var(--white, #fff);
  display: flex;
  justify-content: center;
  align-items: center;

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
