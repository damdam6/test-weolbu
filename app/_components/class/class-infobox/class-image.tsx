import Image from 'next/image';

import * as styles from '@/app/_components/class/class-infobox/index.css';

interface Props {
  imgUrl: string;
  name: string;
}

export const ClassImage = ({ imgUrl, name }: Props) => {
  return (
    <Image
      className={styles.ClassImage}
      width={500}
      height={500}
      src={imgUrl}
      alt={name}
      priority
    />
  );
};
