'use client';

import * as styles from './index.css';

interface Props {
  color: 'orange' | 'skyblue' | 'basic';
  text: string;
  onClick: () => void;
}

const Button = ({ color, text, onClick }: Props) => {
  return (
    <button
      type='button'
      className={styles.ButtonStyle({ color })}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
