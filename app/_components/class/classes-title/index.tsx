import * as styles from './index.css';
import TitleBox from '@/app/_components/class/classes-title/title-box';

interface ClassInfo {
  id: number;
  imgUrl: string;
  name: string;
}

interface Props {
  classesInfo: ClassInfo[];
}

const ClassesTitles = ({ classesInfo }: Props) => {
  return (
    <div className={styles.ClassTitles}>
      <div className={styles.ClassTitleWrapper}>
        {classesInfo.map((classInfo) => (
          <TitleBox
            key={classInfo.id}
            id={classInfo.id}
            name={classInfo.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ClassesTitles;
