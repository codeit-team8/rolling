import styled from 'styled-components';
import ErrorImg from '@/assets/images/Error.png';
import PrimaryButton from '@/styles/button/PrimaryButton';

function ErrorFallback({ error, resetErrorBoundary }) {
  const message = error.cause ? error.message : '인터넷 연결을 확인해 보세요';
  const status = error.cause ? error.cause.status : '';

  const handleClick = () => {
    resetErrorBoundary();
  };

  return (
    <ErrorContainer>
      <Oops>{status}</Oops>
      <Img src={ErrorImg} alt="" />
      <P>{message}</P>
      <ReTryButton $size="small" onClick={handleClick}>
        다시 시도
      </ReTryButton>
    </ErrorContainer>
  );
}

const ErrorContainer = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

const Oops = styled.div`
  font-size: 5rem;
  font-weight: 700;
  position: absolute;
  top: 12rem;
`;

const Img = styled.img`
  width: 50rem;
`;

const P = styled.p`
  font-size: 1.6rem;
  margin: 2rem 0;
`;

const ReTryButton = styled(PrimaryButton)`
  width: 30rem;
`;

export default ErrorFallback;
