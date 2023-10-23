import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItemType } from '@globalTypes/nav';

const setClasses = (isActive: boolean): string => {
  let baseClasses = 'text-white text-lg block py-2 px-5 mb-1 rounded-md hover:bg-yellow-950'
  
  return isActive ? baseClasses += ' bg-yellow-950' : baseClasses
}

const NavItem: React.FC<NavItemType> = ({name, to}) => {
  return (
    <li>
      <NavLink to={to} className={({ isActive }) => setClasses(isActive)}>
        {name}
      </NavLink>
    </li>
  );
};

export default NavItem;