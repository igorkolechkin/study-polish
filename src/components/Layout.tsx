import React from 'react';
import Sidebar from '@components/sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = (props) => {
  return (
    <>
      <Sidebar />

      <div className='ml-96'>
        <header className='px-5 border-b-2'>
          header
        </header>

        <Outlet />
      </div>
    </>
  );
};

export default Layout;