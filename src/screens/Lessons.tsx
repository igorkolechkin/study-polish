import React from 'react';
import { Link } from 'react-router-dom';
const lessons = ['Lesson 1', 'Lesson 2', 'Lesson 3', 'Lesson 4']

const Lessons: React.FC = (props) => {
  return (
    <>
      <ul>
        { lessons && lessons.map((lesson, index) => {
          return <li>
            <Link to={`/lessons/${index + 1}`}>{lesson}</Link>
          </li>
        }) }
      </ul>
    </>
  );
};

export default Lessons;