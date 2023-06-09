import React from 'react';

const Head = (props) => {
  React.useEffect(() => {
    document.title = 'Sys | ' + props.title;
    document
      .querySelector('meta[name="description"]')
      .setAttribute('content', props.content);
  }, [props]);

  return <></>;
};

export default Head;
