import { style } from '@vanilla-extract/css';

export const gridContainer = style({
  display: 'grid',
  alignItems: 'start',
  justifyContent: 'start',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridAutoRows: 'max-content',
  gap: '32px',
});
