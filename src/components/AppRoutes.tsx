import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '@components/Layout';
import Main from '@screens/Main';
import Lessons from '@screens/Lessons';
import Lesson from '@screens/Lesson';
import Videos from '@screens/Videos';
import Interactive from '@screens/Interactive';
import UsefulLinks from '@screens/UsefulLinks';
import Books from '@screens/Books';
import Page404 from '@screens/Page404'

const AppRoutes: React.FC = (props) => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Main />} />
        <Route path='lessons' element={<Lessons />} />
        <Route path='lessons/:id' element={<Lesson />} />
        <Route path='videos' element={<Videos />} />
        <Route path='interactive' element={<Interactive />} />
        <Route path='useful-links' element={<UsefulLinks />} />
        <Route path='books' element={<Books />} />
        <Route path='*' element={<Page404 />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;