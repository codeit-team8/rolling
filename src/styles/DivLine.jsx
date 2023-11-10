import styled from 'styled-components';

export const HeaderDivLine = styled.div`
  width: 100%;
  height: 1px;
  flex-shrink: 0;
  background: var(--gray-200, #eee);
`;

export const NavDivLine = styled.div`
  display: ${({ $isPostPage }) => ($isPostPage ? 'none' : 'block')};
  width: 100%;
  border-bottom: 1px solid #ededed;

  @media (min-width: 768px) {
    display: block;
  }
`;
