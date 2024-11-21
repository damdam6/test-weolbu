'use client';

import { useRouter } from 'next/navigation';

import * as styles from './index.css';

const ConfirmButton = () => {
  const router = useRouter();
  const onClick = () => {
    router.push('/my-courses');
  };
  return (
    <button type='button' className={styles.ConfirmButton} onClick={onClick}>
      선택 완료
    </button>
  );
};

export default ConfirmButton;
