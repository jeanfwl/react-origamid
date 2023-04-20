import React from 'react';

const Head = ({ title }) => {
  React.useEffect(() => {
    document.title = 'Ranek | ' + title;
  }, [title]);

  return <></>;
};

export default Head;
