import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@/app/_styles/vars.css';

export const ClassTitles = style([
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '400px',
    paddingTop: '80px',
    paddingBottom: '80px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: vars.colors.gray,
    boxSizing: 'border-box',
  },
]);

export const ClassTitleWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: 'auto',
  height: '100%',
  gap: '64px',
});

const colorVariants = {
  basic: style({
    color: vars.colors.black,
  }),
  orange: style({
    color: vars.colors.orange,
  }),
  skyblue: style({
    color: vars.colors.skyblue,
  }),
};

export const TitleTextColor = recipe({
  base: style({
    display: 'flex',
    textAlign: 'left',
    width: '100%',
    fontSize: '24px',
    fontWeight: 'bold',
  }),
  variants: {
    color: colorVariants,
  },
  defaultVariants: {
    color: 'basic', // 기본값으로 'basic' 설정
  },
});
