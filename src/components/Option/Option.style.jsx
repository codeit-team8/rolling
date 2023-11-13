import styled from 'styled-components';

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const ButtonContainer = styled.div`
  align-items: flex-start;
  width: 23.6rem;
  height: 4rem;
  display: flex;
  flex-direction: row;
  margin-bottom: 2.8rem;
  background: var(--gray-100, #f6f6f6);
  border-radius: 6px;

  @media (min-width: 768px) {
    margin-bottom: 4rem;
    width: 24.4rem;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  gap: 1.2rem;
  grid-template-columns: repeat(2, 15.4rem);
  grid-template-rows: repeat(2, 15.4rem);
  justify-items: center;
  align-items: center;
  margin: auto;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

export const ColorChip = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15.4rem;
  height: 15.4rem;
  flex-shrink: 0;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.08);
  cursor: pointer;
  position: relative;

  @media (min-width: 768px) {
    width: 16.8rem;
    height: 16.8rem;
  }
`;

export const ImageChip = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15.4rem;
  height: 15.4rem;
  flex-shrink: 0;
  border-radius: 16px;
  border: ${({ $border }) => $border && '1px solid rgba(0, 0, 0, 0.1)'}
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.08);
  background: ${({ $isSelected, $imageUrls }) =>
    $isSelected
      ? `linear-gradient(rgba(169, 169, 169, 0.5), rgba(169, 169, 169, 0.5)), url(${$imageUrls})`
      : `url(${$imageUrls})`};
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  position: relative;

  @media (min-width: 768px) {
    width: 16.8rem;
    height: 16.8rem;
  }
`;

export const CategoryButton = styled.button`
  width: 12.2rem;
  padding: 0.7rem 1.4rem;
  font-size: 1.6rem;
  text-align: center;
  font-weight: 400;
  line-height: 2.6rem;
  letter-spacing: -0.16rem;
  border-radius: 6px;
  color: ${({ $isActive }) => ($isActive ? 'var(--purple-700, #861dee)' : 'none')};
  background: ${({ $isActive }) => ($isActive ? 'var(--white, #fff)' : 'none')};
  outline: ${({ $isActive }) => ($isActive ? '2px solid var(--purple-600, #9935ff)' : 'none')};
`;
