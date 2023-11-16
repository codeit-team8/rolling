import { Link } from 'react-router-dom';
import ErrorImg from '@/assets/images/Error.png';
import { Button, ErrorContainer, Img, Oops, P } from '@/styles/error/Error.style.jsx';

function NotFound() {
  return (
    <ErrorContainer>
      <Oops>404</Oops>
      <Img src={ErrorImg} alt="" />
      <P>페이지가 없거나 접근할 수 없습니다.</P>
      <Link to="/">
        <Button $size="small">롤링 홈으로</Button>
      </Link>
    </ErrorContainer>
  );
}

export default NotFound;
