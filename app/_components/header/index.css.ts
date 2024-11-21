import { style } from '@vanilla-extract/css';

import { vars } from '@/app/_styles/vars.css';

export const HeaderStyle = style({
  backgroundColor: vars.colors.navy,
  color: vars.colors.white,
  fontSize: vars.fontSize['24'],
  height: '80px',
  width: '1080px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
