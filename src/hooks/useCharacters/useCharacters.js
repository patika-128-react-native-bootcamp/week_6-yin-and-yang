import {useEffect, useState} from 'react';
import axios from 'axios';

const URL =
  'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=64db28cd226245f53f4c8ab2c62bbafd&hash=07ed8cc60a3326b2ced80fe0b8056835';

export default function useCharacters() {
  const [characterData, setCharacterData] = useState(null);
  const [characterError, setCharacterError] = useState(null);
  const [characterLoading, setCharacterLoading] = useState(true);

  async function fetchCharacters() {
    try {
      setCharacterLoading(true);
      const response = await axios.get(URL);
      setCharacterData(
        response.data.data.results.filter(
          character => (character.notFavourite = true),
        ),
      );
    } catch (error) {
      setCharacterError(error);
    } finally {
      setCharacterLoading(false);
    }
  }

  useEffect(() => {
    fetchCharacters();
  }, []);

  return {
    characterData,
    characterError,
    characterLoading,
    fetchCharacters,
  };
}
