import Logo from '@ui/Logo'
import MainNav from './MainNav';

const Sidebar: React.FC = (props) => {
  return (
    <aside className='fixed top-0 left-0 h-screen w-96 bg-orange-950'>
      <Logo />
      <MainNav />
    </aside>
  );
};

export default Sidebar;