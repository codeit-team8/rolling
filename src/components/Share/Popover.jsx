import { useEffect, useState } from 'react';
import styled from 'styled-components';
import PopOverPortal from '@/components/Share/PopOverPortal';
import Toast from '@/components/Toast/Toast';
import shareKakao from '@/components/Share/shareKakao.jsx';

const { Kakao } = window;
// TODO::searchParams를 인자로 받아와서 공유
const PATH = 'post';
const URL = 'http://localhost:5173/post';

export default function Popover() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    Kakao.cleanup();
    Kakao.init('838406c66469f9358aef57104417a0d7');
    console.log(Kakao.isInitialized());
  }, []);

  const handleClick = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
    window.navigator.clipboard.writeText(URL);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleKakao = () => {
    shareKakao(Kakao, PATH);
  };

  useEffect(() => {
    const myTimeout = setTimeout(() => {
      setIsOpen(false);
    }, 4000);
    return () => {
      clearTimeout(myTimeout);
    };
  }, [isOpen]);

  return (
    <PopoverContainer>
      <Button onClick={handleKakao}>카카오톡 공유</Button>
      <Button onClick={handleClick}>URL 공유</Button>
      <PopOverPortal>
        <Toast onClose={handleClose} isOpen={isOpen} />
      </PopOverPortal>
    </PopoverContainer>
  );
}

const PopoverContainer = styled.div`
  width: 14rem;
  height: 12rem;
  padding: 1rem 0.1rem;
  border-radius: 0.8rem;
  background-color: var(--white, #fff);
  border: 1px solid var(--gray-300, #ccc);
  box-shadow: 0 0.2rem 1.2rem 0 rgba(0, 0, 0, 0.08);
`;

const Button = styled.button`
  font-size: 1.6rem;
  display: flex;
  width: 100%;
  padding: 1.2rem 1.6rem;
  align-items: center;
  line-height: 2.6rem; /* 162.5% */
  gap: 0.1rem;

  &:hover {
    background: var(--gray-100, #f6f6f6);
  }
`;
