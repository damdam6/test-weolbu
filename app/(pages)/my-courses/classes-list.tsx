'use client';

import { useEffect, useState } from 'react';

import useClassStore from '@/app/_components/class/store';
import ClassesImages from '@/app/_components/class/classes-images';
import * as styles from '@/app/(pages)/my-courses/page.css';

interface Props {
  status: 'purchase' | 'cart';
}

interface ClassState {
  id: number;
  status: 'default' | 'cart' | 'purchase';
  imgUrl: string;
}

interface StatusType {
  status: 'purchase' | 'cart';
  color: 'skyblue' | 'orange';
  text: string;
}

const ClassesList = ({ status }: Props) => {
  const statusType: Record<'purchase' | 'cart', StatusType> = {
    purchase: {
      status: 'purchase',
      color: 'skyblue',
      text: '구매 목록',
    },
    cart: {
      status: 'cart',
      color: 'orange',
      text: '장바구니 목록',
    },
  };

  const state = useClassStore.getState();
  const statusStyle = statusType[status];
  const filteredClasses = Object.values(state.classes).filter(
    (classItem) => classItem.status === status,
  );

  return (
    <div className={styles.ClassListWrapper({ color: statusStyle.color })}>
      <div className={styles.ClassListText({ color: statusStyle.color })}>
        {statusStyle.text}
      </div>
      <ClassesImages classeseState={filteredClasses} />
    </div>
  );
};

export default ClassesList;
