import Header from '@/app/_components/header';
import Content from '@/app/(pages)/my-courses/content';
import { PageWrapper } from '@/app/_styles/page-wrapper.css';

const MyCourse = () => {
  return (
    <div className={PageWrapper}>
      <Header title='강의 선택 목록' />
      <Content />
    </div>
  );
};

export default MyCourse;
