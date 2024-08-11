import { v4 as uuid } from 'uuid';

const userSessionStorage = () => {
  const storedData = (place) => {
    const key = uuid();
    sessionStorage.setItem(key, JSON.stringify(place));
    return key;
  };

  const getData = (key) => {
    const data = sessionStorage.getItem(key);
    return data ? JSON.parse(data) : null; // Parse JSON if data exists, otherwise return null
  };

  return { storedData, getData };
};

export default userSessionStorage;