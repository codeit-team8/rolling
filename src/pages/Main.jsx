import styled from 'styled-components';
import Landing from '@/components/Landing/Landing';

function Main() {
  return (
    <MainContainer>
      <Landing />
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

export default Main;
