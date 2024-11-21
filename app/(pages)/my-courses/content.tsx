import ClassesList from '@/app/(pages)/my-courses/classes-list';
import { ContentWrapper } from '@/app/(pages)/my-courses/page.css';

const Content = () => {
  return (
    <div className={ContentWrapper}>
      <ClassesList status='purchase' />
      <ClassesList status='cart' />
    </div>
  );
};

export default Content;
