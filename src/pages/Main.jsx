import styled from 'styled-components';
import PrimaryButtonStyle from '@/styles/button/PrimaryButtonStyle';

function Main() {
  return (
    <div>
      <Button>신느</Button>
    </div>
  );
}

const Button = styled(PrimaryButtonStyle)`
  width: 10rem;
`;

export default Main;
