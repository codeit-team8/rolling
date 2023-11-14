import styled from 'styled-components';
import { forwardRef } from 'react';

function MessageCardModal({_}, ref) {
  return (
    <>
      <BackDrop ref={ref}/>
      <ModalContainer>

      </ModalContainer>
    </>
  );
}

export default forwardRef(MessageCardModal);

const BackDrop = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
`;

const ModalContainer = styled.div`
  position: fixed;
  z-index: 2;
  width: 34rem;
  height: 23.5rem;
  border-radius: 16px;
  background: var(--white, #fff);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.08);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  @media (min-width: 768px) {
    
    width: 60rem;
    height: 47.6rem;
    
  }
`;
