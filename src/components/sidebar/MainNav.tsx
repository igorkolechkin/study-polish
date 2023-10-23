import React from 'react';
import NavItem from '@ui/NavItem';
import { navList } from '@constants/nav'


const MainNav: React.FC = () => {
  return <ul className='px-6'>
    { navList.map(item => <NavItem key={item.to} to={item.to} name={item.name} />) }
  </ul>
};

export default MainNav;