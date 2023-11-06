import styled from 'styled-components';
import completedIcon from '@/assets/icons/completed.svg';
import closeIcon from '@/assets/icons/close.svg';

// TODO: 나중에 닫기 버튼에 set함수 추가

function Toast() {
  return (
    <ToastContainer>
      <CompletedDiv>
        <CompletedImg src={completedIcon} alt="완료 표시" />
        <Message>URL이 복사되었습니다.</Message>
      </CompletedDiv>
      <CloseImg src={closeIcon} alt="닫기 표시" />
    </ToastContainer>
  );
}

export default Toast;

const ToastContainer = styled.div`
  display: flex;
  width: 52.4rem;
  height: 6.4rem;
  padding: 1.9rem 3rem;
  justify-content: center;
  align-items: flex-start;
  flex-shrink: 0;
  gap: 25.3rem;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.8);
  color: var(--white, #fff);
`;

const CompletedDiv = styled.div`
  display: flex;
  gap: 1.2rem;
`;

const CompletedImg = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;

const CloseImg = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  flex-shrink: 0;
`;

const Message = styled.span`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.6rem;
  letter-spacing: -0.016rem;
`;
