import { useState } from 'react';
import styled, { css } from 'styled-components';
import plusIcon from '@/assets/icons/plus.svg';
import homeImg from '@/assets/icons/home.svg';
import listImg from '@/assets/icons/list.svg';
import { Navigate, useNavigate } from 'react-router-dom';

function FloatButton() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setShow((prev) => !prev);
  };

  const handleClickList = () => {
    navigate('/list');
  };

  const handleClickHome = () => {
    navigate('/');
  };

  return (
    <NavigatorContainer>
      {show && (
        <NaviButtons>
          <Button onClick={handleClickList}>
            <Icon src={listImg} alt="리스트로 이동" />
          </Button>
          <Button onClick={handleClickHome}>
            <Icon src={homeImg} alt="홈으로 이동" />
          </Button>
        </NaviButtons>
      )}
      <PlusButton onClick={handleClick}>
        <PlusImg src={plusIcon} alt="float button" $rotate={show} />
      </PlusButton>
    </NavigatorContainer>
  );
}

export default FloatButton;

const shadow = css`
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
`;

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlusButton = styled.button`
  width: 5rem;
  height: 5rem;
  border-radius: 10rem;
  background-color: var(--purple-600);
  ${flexCenter}
  ${shadow};
`;

const PlusImg = styled.img`
  width: 2rem;
  height: 2rem;
  rotate: ${({ $rotate }) => ($rotate ? '45deg' : '')};
  transition: all 0.5s;
`;

const NavigatorContainer = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  ${flexCenter}
  flex-direction: column;
  gap: 1rem;
`;

const NaviButtons = styled.div`
  ${flexCenter};
  flex-direction: column;
  gap: 1rem;
`;

const Button = styled(PlusButton)`
  width: 4.5rem;
  height: 4.5rem;
  background-color: var(--gray-100, #f6f6f6);
  ${shadow};
  cursor: pointer;
`;

const Icon = styled.img`
  width: 3rem;
  height: 3rem;
`;
