import { style } from '@vanilla-extract/css';

export const mainWrapper = style([
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '700px',
  },
]);

export const ContentWrapper = style([
  {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
]);

export const CommerceWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});
