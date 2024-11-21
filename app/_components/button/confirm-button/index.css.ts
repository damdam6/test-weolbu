import { style } from '@vanilla-extract/css';

import { vars } from '@/app/_styles/vars.css';

export const ConfirmButton = style({
  width: '400px',
  height: '80px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '24px',
  fontWeight: 'bold',
  color: vars.colors.white,
  borderStyle: 'none',
  backgroundColor: vars.colors.blue,
  cursor: 'pointer',
});
