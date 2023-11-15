import styled from 'styled-components';
import loadingSpinner from '@/assets/gifs/loading.gif';

function Loading() {
  return (
    <LoadingContainer>
      <img src={loadingSpinner} alt="로딩 스피너" />
    </LoadingContainer>
  );
}

export default Loading;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  object-fit: contain;
`;
