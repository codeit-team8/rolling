import styled from 'styled-components';
import { Link, useMatch } from 'react-router-dom';
import logo from '@/assets/icons/logo.svg';
import OutlineButton from '@/styles/button/OutlineButton.jsx';
import { FONT14B } from '@/styles/fontType.js';
import { NavDivLine } from '@/styles/DivLine.jsx';

function Nav() {
  const match = useMatch('/post/*') ?? '/';
  const isPostPage = match.pathnameBase === '/post';

  return (
    <>
      <NavContainer $isPostPage={isPostPage}>
        <Link to="/">
          <NavTitle>
            <Logo src={logo} alt="로고 이미지" />
            <Title>Rolling</Title>
          </NavTitle>
        </Link>
        <ButtonContainer $isPostPage={isPostPage}>
          <Link to="/post">
            <PaperCreateButton $size="H40">롤링 페이퍼 만들기</PaperCreateButton>
          </Link>
        </ButtonContainer>
      </NavContainer>
      <NavDivLine $isPostPage={isPostPage} />
    </>
  );
}

export default Nav;

const NavContainer = styled.nav`
  display: ${({ $isPostPage }) => ($isPostPage ? 'none' : 'flex')};
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  gap: 7.9rem;
  width: 100%;
  height: 6.4rem;
  padding: 1.2rem 2rem;

  @media (min-width: 768px) {
    display: flex;
  }

  @media (min-width: 1248px) {
    max-width: 120rem;
    padding: 1.2rem 0;
  }
`;

const NavTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const Logo = styled.img`
  width: 2.7818rem;
  height: 2.7818rem;
`;

const Title = styled.h1`
  color: var(--gray-light-gray-90, #4a494f);
  text-align: center;
  font-family: Poppins;
  font-size: 1.9971rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ButtonContainer = styled.div`
  display: ${({ $isPostPage }) => ($isPostPage ? 'none' : 'flex')};
`;

const PaperCreateButton = styled(OutlineButton)`
  color: var(--gray-900, #181818);
  ${FONT14B} @media(min-width: 768 px) {
    font-size: 1.6rem;
  }
`;
