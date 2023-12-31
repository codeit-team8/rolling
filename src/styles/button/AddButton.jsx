import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import plusIcon from '@/assets/icons/plus.svg';

function AddButton({ disabled }) {
  const { recipientId } = useParams();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/post/${recipientId}/message`);
  };

  return (
    <AddButtonContainer onClick={handleClick} disabled={disabled}>
      <img src={plusIcon} alt="추가 버튼" />
    </AddButtonContainer>
  );
}

export default AddButton;

export const AddButtonContainer = styled.button`
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 100px;
  background-color: var(--gray-500);
  padding: 1.6rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: var(--gray-600);
  }

  &:active {
    background-color: var(--gray-700);
  }

  &:focus {
    background-color: var(--gray-800);
  }

  &:disabled {
    background-color: var(--gray-300);
  }
`;
