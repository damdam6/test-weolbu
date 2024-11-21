import * as styles from './index.css';
import { ClassImage } from '@/app/_components/class/class-infobox/class-image';

interface ClassSate {
  id: number;
  status: 'default' | 'cart' | 'purchase';
  imgUrl: string;
}

interface Props {
  classeseState: ClassSate[];
}

const ClassesImages = ({ classeseState }: Props) => {
  return (
    <div className={styles.ClassImagesWrapper}>
      {classeseState.map((classInfo) => (
        <ClassImage
          imgUrl={classInfo.imgUrl}
          name={`${classInfo.id}`}
          key={classInfo.id}
        />
      ))}
    </div>
  );
};

export default ClassesImages;
