import React from 'react';

const useLocalStorage = (key, initialValue) => {
  const [itemValue, setItemValue] = React.useState(() => {
    const localData = window.localStorage.getItem(key);
    console.log(localData);
    return localData ? localData : initialValue;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, itemValue);
  }, [itemValue, key]);

  return [itemValue, setItemValue];
};

export default useLocalStorage;
