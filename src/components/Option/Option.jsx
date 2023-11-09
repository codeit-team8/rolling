import styled from 'styled-components';

const OPTIONS = {
  컬러: [
    'var(--orange-200, #FFE2AD)',
    'var(--purple-200, #ECD9FF)',
    'var(--blue-200, #B1E4FF)',
    'var(--green-200, #D0F5C3)',
  ],
  이미지: [''],
};

function Option() {
  return (
    <div>
      <ButtonContainer>
        <Button>컬러</Button>
        <Button>이미지</Button>
      </ButtonContainer>
      <CardContainer>
        <ColorChip></ColorChip>
        <ColorChip></ColorChip>
        <ColorChip></ColorChip>
        <ColorChip></ColorChip>
      </CardContainer>
    </div>
  );
}

export default Option;

const ButtonContainer = styled.div`
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

const CardContainer = styled.div`
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

const ColorChip = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15.4rem;
  height: 15.4rem;
  flex-shrink: 0;
  border-radius: 16px;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  background: var(--purple-200, #ecd9ff);
  box-shadow: 0 0.2rem 1.2rem 0 rgba(0, 0, 0, 0.08);

  @media (min-width: 768px) {
    width: 16.8rem;
    height: 16.8rem;
  }
`;

const Button = styled.button`
  width: 122px;
  padding: 7px 14px;
  font-size: 16px;
  text-align: center;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: -0.16px;
  // color: var(--purple-700, #861dee);
  border-radius: 6px;
  // border: 2px solid var(--purple-600, #9935ff);
  // background: var(--white, #fff);
`;
