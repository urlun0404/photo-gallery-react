import * as s from './styles';
import { OVERLOAD } from 'constants';
import Pictures from './pictures';
import SearchBar from './search-bar';
import { useEffect } from 'react';
import useFetch from 'hooks/use-fetch';

let init = false;

const initialSearchUrl = `https://api.pexels.com/v1/curated?page=${1}&per_page=${16}`;

export default function Home() {
  const { fetchData } = useFetch();

  // Fetch initial photo data when the page loads up
  useEffect(() => {
    if (init) return;
    init = true;
    fetchData(initialSearchUrl, OVERLOAD);
  }, []);

  return (
    <s.Home>
      <SearchBar />
      <Pictures />
    </s.Home>
  );
}
