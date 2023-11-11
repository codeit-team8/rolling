import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Landing from '@/components/Landing/Landing';
import PrimaryButton from '@/styles/button/PrimaryButton';
import Option from '@/components/Option/Option';

function Main() {
  return (
    <MainContainer>
      <Landing />
      <LinkStyle to="/list">
        <Button>구경해보기</Button>
      </LinkStyle>
      <Option selectOption={'backgroundColor'} />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  padding: 4.2rem 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.4rem;
  max-width: 124.8rem;
  margin: auto;

  @media (min-width: 768px) {
    gap: 3rem;
    padding: 4.9rem 2.4rem;
  }

  @media (min-width: 1248px) {
    padding: 6rem 2.4rem;
  }
`;

const Button = styled(PrimaryButton)`
  width: 100%;
  margin: 4.9rem 0 2.4rem;

  @media (min-width: 768px) {
  }

  @media (min-width: 1248px) {
    width: 28rem;
    margin: auto;
    margin-top: 4.8rem;
  }
`;

const LinkStyle = styled(Link)`
  @media (min-width: 1248px) {
    margin: auto;
  }
`;

export default Main;
