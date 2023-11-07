import styled from 'styled-components';
import logo from '@/assets/icons/logo.svg';

function Nav() {
  return (
    <NavWrapper>
      <NavContainer>
        <NavTitle>
          <Logo src={logo} alt="로고 이미지" />
          <Title>Rolling</Title>
        </NavTitle>
      </NavContainer>
    </NavWrapper>
  );
}

export default Nav;

const NavWrapper = styled.div`
  width: 100%;
  display: inline-flex;
  padding: 1.2rem 2rem;
  align-items: center;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 7.9rem;
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
