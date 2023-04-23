import { useEffect, useState } from 'react';

const useFetch = uri => {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(uri)
      .then(res => res.json())
      .then(res => setData(res));
  }, [uri]);

  return data;

};

export default useFetch;