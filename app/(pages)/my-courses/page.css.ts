import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@/app/_styles/vars.css';

export const ContentWrapper = style({
  width: '100%',
  height: 'auto',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'start',
});

export const ClassListWrapper = recipe({
  base: {
    display: 'flex',
    width: '400px',
    height: 'auto',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: '2px',
    paddingTop: '48px',
    paddingBottom: '48px',
  },
  variants: {
    color: {
      skyblue: {
        borderColor: vars.colors.skyblue,
      },
      orange: {
        borderColor: vars.colors.orange,
      },
    },
  },
  defaultVariants: {
    color: 'skyblue',
  },
});

export const ClassListText = recipe({
  base: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  variants: {
    color: {
      skyblue: {
        color: vars.colors.skyblue,
      },
      orange: {
        color: vars.colors.orange,
      },
    },
  },
  defaultVariants: {},
});
