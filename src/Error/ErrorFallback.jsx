import ErrorImg from '@/assets/images/Error.png';
import { Button, ErrorContainer, Img, Oops, P } from '@/styles/error/Error.style.jsx';

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
      <Button $size="small" onClick={handleClick}>
        다시 시도
      </Button>
    </ErrorContainer>
  );
}

export default ErrorFallback;
