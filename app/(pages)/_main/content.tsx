import * as styles from './page.css';
import ClassesInfo from '@/app/_components/class/classes-info';
import ClassTitles from '@/app/_components/class/classes-title/index';
import ConfirmButton from '@/app/_components/button/confirm-button';

const fetchClasses = async () => {
  const url =
    'https://script.google.com/macros/s/AKfycbwF8CI36bLHJqG9uDPlSsmun4W6JxQkWcC86-DVXuS0u41BSXRkETn6CocYQtqU1St9/exec?delay=2';
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
};

interface Props {
  data: Array<{
    id: number;
    imgUrl: string;
    name: string;
  }>;
}

const Content = async () => {
  let data: Props['data'] = [];

  try {
    data = await fetchClasses();
  } catch (error) {
    console.error('Error fetching data:', error);
  }

  return (
    <div className={styles.ContentWrapper}>
      <ClassesInfo classesInfoData={data} />
      <div className={styles.CommerceWrapper}>
        <ClassTitles classesInfo={data} />
        <ConfirmButton />
      </div>
    </div>
  );
};

export default Content;
