import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import completedIcon from '@/assets/icons/completed.svg';
import closeIcon from '@/assets/icons/close.svg';

// TODO: 나중에 닫기 버튼에 set함수 추가

function Toast({ onClose, isOpen }) {
  const [shouldRender, setRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) setRender(true);
  }, [isOpen]);

  const onAnimationEnd = () => {
    if (!isOpen) setRender(false);
  };

  return (
    shouldRender && (
      <ToastContainer onAnimationEnd={onAnimationEnd} $isOpen={isOpen}>
        <CompletedDiv>
          <CompletedImg src={completedIcon} alt="완료 표시" />
          <Message>URL이 복사되었습니다.</Message>
        </CompletedDiv>
        <CloseImg src={closeIcon} alt="닫기 표시" onClick={onClose} />
      </ToastContainer>
    )
  );
}

export default Toast;

const fade = (x) => keyframes`
  0%{
    opacity: ${1 - x};
  }
  100%{
    opacity: ${x};
  }
`;

const ToastContainer = styled.div`
  position: absolute;
  bottom: 88px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  width: 32rem;
  height: 6.4rem;
  gap: 4.9rem;
  padding: 1.9rem 3rem;
  justify-content: center;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.8);
  color: var(--white, #fff);
  animation: ${({ $isOpen }) => ($isOpen ? fade(1) : fade(0))} 0.5s forwards;

  @media (min-width: 768px) {
    width: 52.4rem;
    height: 6.4rem;
    gap: 25.3rem;
  }
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
  cursor: pointer;
`;

const Message = styled.span`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.6rem;
  letter-spacing: -0.016rem;
`;
