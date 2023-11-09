import styled from 'styled-components';
import plusIcon from '@/assets/icons/plus.svg';

// TODO :

function AddButton({ onClick, disabled }) {
  return (
    <AddButtonContainer onClick={onClick} disabled={disabled}>
      <img src={plusIcon} alt="추가 버튼" />
    </AddButtonContainer>
  );
}

export default AddButton;

const AddButtonContainer = styled.button`
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 100px;
  background-color: var(--gray-500);
  padding: 1.6rem;
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
