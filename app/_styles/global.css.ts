import { globalStyle } from '@vanilla-extract/css';

globalStyle('*', {
  margin: 0,
  padding: 0,
  border: 0,
  boxSizing: 'border-box',
  lineHeight: '16px',
});

globalStyle('commerce-button:hover', {
  cursor: 'pointer',
});

globalStyle('html, body, #root', {
  height: '100vh',
  width: '100vw',
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
});
