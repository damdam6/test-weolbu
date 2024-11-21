import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@/app/_styles/vars.css';

const colorVariants = {
  basic: style({
    backgroundColor: vars.colors.white, // 기본 색상 없음
    color: vars.colors.black,
  }),
  orange: style({
    backgroundColor: vars.colors.orange,
    color: vars.colors.white,
  }),
  skyblue: style({
    backgroundColor: vars.colors.skyblue,
    color: vars.colors.white,
  }),
};
export const ButtonStyle = recipe({
  base: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '136px',
    height: '48px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: vars.colors.gray,
    cursor: 'pointer',
  }),
  variants: {
    color: colorVariants, // colorVariants 매핑
  },
  defaultVariants: {
    color: 'basic', // 기본값으로 'basic' 설정
  },
});
