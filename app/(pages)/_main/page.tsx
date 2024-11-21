import Header from '@/app/_components/header';
import { PageWrapper } from '@/app/_styles/page-wrapper.css';
import Content from '@/app/(pages)/_main/content';

const MainPage = () => {
  return (
    <div className={PageWrapper}>
      <Header title='강의 메인' />
      <Content />
    </div>
  );
};

export default MainPage;
