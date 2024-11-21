import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  colors: {
    navy: '#1c2a4b',
    white: '#ffffff',
    orange: '#d74b00',
    skyblue: '#006ebe',
    gray: '#a5a5a5',
    black: '#323232',
    blue: '#1f51f2',
  },

  fontSize: {
    '24': '24px',
    '32': '32px',
  },
});
