'use client';

import { useState, useEffect } from 'react';

import { ClassImage } from './class-image';
import Button from '../../button/commerce-button';
import * as styles from './index.css';
import useClassStore from '@/app/_components/class/store';

interface Props {
  id: number;
  imgUrl: string;
  name: string;
}

export const Class = ({ id, imgUrl, name }: Props) => {
  const classState = useClassStore(
    (state) => state.getClass(id) ?? { id, status: 'default' },
  );
  const setClassStatus = useClassStore((state) => state.setClass);

  const [cartColor, setCartColor] = useState<'basic' | 'orange'>('basic');
  const [purchaseColor, setPurchaseColor] = useState<'basic' | 'skyblue'>(
    'basic',
  );

  const purchaseOnClick = () => {
    setClassStatus(
      id,
      classState.status !== 'purchase' ? 'purchase' : 'default',
      imgUrl,
    );
  };

  const cartOnClick = () => {
    setClassStatus(
      id,
      classState.status !== 'cart' ? 'cart' : 'default',
      imgUrl,
    );
  };

  useEffect(() => {
    if (classState.status === 'purchase') {
      setPurchaseColor('skyblue');
      setCartColor('basic');
    } else if (classState.status === 'cart') {
      setCartColor('orange');
      setPurchaseColor('basic');
    } else {
      setCartColor('basic');
      setPurchaseColor('basic');
    }
  }, [classState]);

  return (
    <div className={styles.ClassLayout}>
      <ClassImage imgUrl={imgUrl} name={name} />
      <div className={styles.ClassButtons}>
        <Button color={purchaseColor} text='구매' onClick={purchaseOnClick} />
        <Button color={cartColor} text='장바구니' onClick={cartOnClick} />
      </div>
    </div>
  );
};

export default Class;
