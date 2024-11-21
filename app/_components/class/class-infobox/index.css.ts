import { style } from '@vanilla-extract/css';

export const ClassImage = style({
  width: '288px',
  height: 'auto',
});

export const ClassLayout = style({
  display: 'flex',
  flexDirection: 'column',
  width: '288px',
  height: 'auto',
  gap: '16px',
});

export const ClassButtons = style({
  display: 'flex',
  width: '288px',
  height: 'auto',
  justifyContent: 'space-between',
  flexDirection: 'row',
});
