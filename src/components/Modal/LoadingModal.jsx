import { BackDrop } from '@/components/Modal/MessageCardModal.jsx';
import Loading from '@/util/Loading.jsx';

function LoadingModal() {
  return (
    <>
      <BackDrop />
      <Loading />
    </>
  );
}

export default LoadingModal;
