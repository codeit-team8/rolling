import styled from 'styled-components';

export const OptionContainer = styled.div`
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const ButtonContainer = styled.div`
  align-items: flex-start;
  width: 236px;
  height: 40px;
  display: flex;
  flex-direction: row;
  margin-bottom: 28px;
  background: var(--gray-100, #f6f6f6);
  border-radius: 6px;

  @media (min-width: 768px) {
    margin-bottom: 40px;
    width: 244px;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(2, 154px);
  grid-template-rows: repeat(2, 154px);
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
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0.2rem 1.2rem 0 rgba(0, 0, 0, 0.08);
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
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0.2rem 1.2rem 0 rgba(0, 0, 0, 0.08);
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
  width: 122px;
  padding: 7px 14px;
  font-size: 16px;
  text-align: center;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.16px;
  border-radius: 6px;
  color: ${({ $isActive }) => ($isActive ? 'var(--purple-700, #861dee)' : 'none')};
  background: ${({ $isActive }) => ($isActive ? 'var(--white, #fff)' : 'none')};
  outline: ${({ $isActive }) => ($isActive ? '2px solid var(--purple-600, #9935ff)' : 'none')};
`;
