'use client';

import { useEffect, useState } from 'react';

import useClassStore from '@/app/_components/class/store';
import * as styles from './index.css';

interface Props {
  id: number;
  name: string;
}

const TitleBox = ({ id, name }: Props) => {
  const status = useClassStore(
    (state) => state.getClass(id)?.status ?? 'default',
  );

  const [color, setColor] = useState<'basic' | 'orange' | 'skyblue'>('basic');

  useEffect(() => {
    if (status === 'cart') {
      setColor('orange');
    } else if (status === 'purchase') {
      setColor('skyblue');
    } else {
      setColor('basic');
    }
  }, [status]);

  return <div className={styles.TitleTextColor({ color })}>{name}</div>;
};

export default TitleBox;
