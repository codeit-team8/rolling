import yellowPattern from '@/assets/images/card_pattern_yellow.png';
import purplePattern from '@/assets/images/card_pattern_purple.png';
import bluePattern from '@/assets/images/card_pattern_blue.png';
import greenPattern from '@/assets/images/card_pattern_green.png';

export const BACKGROUND_COLORS = [
  { name: 'beige', color: 'var(--orange-200, #FFE2AD)', pattern: yellowPattern },
  { name: 'purple', color: 'var(--purple-200, #ECD9FF)', pattern: purplePattern },
  { name: 'blue', color: 'var(--blue-200, #B1E4FF)', pattern: bluePattern },
  { name: 'green', color: 'var(--green-200, #D0F5C3)', pattern: greenPattern },
];

export const BACKGROUND_COLOR_PALETTE = {
  beige: {
    color: 'var(--orange-200, #FFE2AD)',
    pattern: yellowPattern,
  },
  purple: {
    color: 'var(--purple-200, #ECD9FF)',
    pattern: purplePattern,
  },
  blue: {
    color: 'var(--blue-200, #B1E4FF)',
    pattern: bluePattern,
  },
  green: {
    color: 'var(--green-200, #D0F5C3)',
    pattern: greenPattern,
  },
};
