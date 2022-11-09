import * as s from './styles';
import { useEffect, useState } from 'react';
import Pictures from './pictures';
import SearchBar from './search-bar';
import useFetch from '../../hooks/use-fetch';

const auth = process.env.REACT_APP_PEXELS_API_KEY;
const overLoad = {
  headers: {
    Authorization: auth,
    Accept: 'application/json',
  },
};
const PER_PAGE_PHOTO_NUM = 16;

export default function Home() {
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState('');
  const { isLoading, hasError, photos, fetchData } = useFetch();

  const initSearchUrl = `https://api.pexels.com/v1/curated?page=${page}&per_page=${PER_PAGE_PHOTO_NUM}`;

  // Fetch photo data from pexels api
  const searchPhotos = (url) => {
    if (url.trim() === '') {
      return;
    }
    fetchData(url, overLoad);
  };

  // Fetch photo data from clicking "Load More" button
  const loadMorePhotos = () => {
    setPage((prevPage) => prevPage + 1);
    const currSearch = searchInput.trim();
    const currSearchUrl =
      currSearch === ''
        ? `https://api.pexels.com/v1/curated?page=${page}&per_page=${PER_PAGE_PHOTO_NUM}`
        : `https://api.pexels.com/v1/search?query=${currSearch}&page=${page}&per_page=${PER_PAGE_PHOTO_NUM}`;

    fetchData(currSearchUrl, overLoad);
  };

  // Fetch initial photo data when the page loads up
  useEffect(() => {
    searchPhotos(initSearchUrl);
  }, []);

  // Clear search bar after searching
  useEffect(() => {
    setSearchInput('');
  }, [photos]);

  return (
    <s.Home>
      <SearchBar
        searchPhotos={() => searchPhotos(currSearchUrl)}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <Pictures
        isLoading={isLoading}
        hasError={hasError}
        photos={photos}
        loadMorePhotos={loadMorePhotos}
      />
    </s.Home>
  );
}
