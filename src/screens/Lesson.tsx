import React from 'react';
import { useParams } from 'react-router-dom';

const Lesson: React.FC = (props) => {
  const{ id } = useParams()

  return (
    <>Lesson { id }</>
  );
};

export default Lesson;