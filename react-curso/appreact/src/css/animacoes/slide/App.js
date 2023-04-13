import React from 'react';
import Slide from './Slide';

const App = () => {
  const slides = [
    {
      id: 'slide1',
      item: 'Slide 1',
    },
    {
      id: 'slide2',
      item: 'Slide 2',
    },
    {
      id: 'slide3',
      item: 'Slide 3',
    },
  ];
  return (
    <div>
      <Slide slides={slides} />
    </div>
  );
};

export default App;
