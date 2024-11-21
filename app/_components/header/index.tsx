import { HeaderStyle } from '@/app/_components/header/index.css';

interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  return <div className={HeaderStyle}>{title}</div>;
};

export default Header;
