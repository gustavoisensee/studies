import { useEffect, useState } from 'react';
import { fetchData } from '../actions';

function useData() {
  const [state, setState] = useState({
    data: [],
    loading: true
  });

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();

      setState({
        data,
        loading: false
      });
    };
    getData();
  }, []);

  return { ...state };
}

export default useData;
