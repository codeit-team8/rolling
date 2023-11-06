import styled from 'styled-components';
import CompletedIcon from '@/assets/completed.svg';
import CloseIcon from '@/assets/close.svg';

// 나중에 추가할 목록: 닫기 버튼 set함수

function Toast() {
  return (
    <Container>
      <CompletedDiv>
        <Completed src={CompletedIcon} alt="완료 표시" />
        <Message>URL이 복사되었습니다.</Message>
      </CompletedDiv>
      <Close src={CloseIcon} alt="닫기 표시" />
    </Container>
  );
}

export default Toast;

const Container = styled.div`
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

const Completed = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;

const Close = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  flex-shrink: 0;
`;

const Message = styled.span`
  font-size: 1.6rem;
  font-weight: 400;
  font-family: Pretendard;
  line-height: 2.6rem;
  letter-spacing: -0.016rem;
`;
