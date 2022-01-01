import {useEffect, useState} from 'react';
import axios from 'axios';

const URL =
  'https://gateway.marvel.com/v1/public/comics?ts=1&apikey=64db28cd226245f53f4c8ab2c62bbafd&hash=07ed8cc60a3326b2ced80fe0b8056835';

export default function useComics() {
  const [comicsData, setComicsData] = useState(null);
  const [comicsError, setComicsError] = useState(null);
  const [comicsLoading, setComicsLoading] = useState(true);

  async function fetchComics() {
    try {
      setComicsLoading(true);
      const response = await axios.get(URL);
      setComicsData(response.data.data.results);
    } catch (error) {
      setComicsError(error);
    } finally {
      setComicsLoading(false);
    }
  }

  useEffect(() => {
    fetchComics();
  }, []);

  return {
    comicsData,
    comicsError,
    comicsLoading,
    fetchComics,
  };
}
