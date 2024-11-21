'use client';

import { Class } from '../class-infobox';
import * as styles from './index.css';

interface ClassInfo {
  id: number;
  imgUrl: string;
  name: string;
}

interface Props {
  classesInfoData: ClassInfo[];
}

const ClassesInfo = ({ classesInfoData }: Props) => {
  return (
    <div className={styles.gridContainer}>
      {classesInfoData.map((classInfo) => (
        <Class
          key={classInfo.id}
          id={classInfo.id}
          imgUrl={classInfo.imgUrl}
          name={classInfo.name}
        />
      ))}
    </div>
  );
};

export default ClassesInfo;
