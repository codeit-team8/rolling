import styled from 'styled-components';

const RELATIONSHIP = {
  지인: {
    background: 'var(--orange-100, #FFF0D6)',
    color: 'var(--orange-500, #ff8832)',
  },
  동료: {
    background: 'var(--purple-100, #F8F0FF)',
    color: 'var(--purple-600, #9935FF)',
  },
  가족: {
    background: 'var(--green-100, #E4FBDC)',
    color: 'var(--green-500, #2BA600)',
  },
  친구: {
    background: 'var(--green-100, #E4FBDC)',
    color: 'var(--blue-500, #00A2FE)',
  },
};

function Badge({ relationship }) {
  const badgeType = RELATIONSHIP[relationship];
  return (
    <BadgeWrapper $backgroundColor={badgeType.background}>
      <Title $color={badgeType.color}>{relationship}</Title>
    </BadgeWrapper>
  );
}

export default Badge;

const BadgeWrapper = styled.div`
  display: inline-flex;
  padding: 0 0.8rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 4px;
  background: ${({ $backgroundColor }) => $backgroundColor};
`;

const Title = styled.h4`
  color: ${({ $color }) => $color};
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: -0.007rem;
`;
