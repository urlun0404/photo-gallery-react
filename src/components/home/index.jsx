import { useState, useEffect, useCallback } from 'react';
import SearchBar from './search-bar';
import Pictures from './pictures';
import * as s from './styles';
import * as Img from 'images';

const test_photos = [
  {
    photographer: 'Jessika Arraes',
    src: {
      original: Img.jessika,
      large: Img.jessika,
    },
  },
  {
    photographer: 'Harper Sunday',
    src: {
      original: Img.harper,
      large: Img.harper,
    },
  },
  {
    photographer: 'Céline',
    src: {
      original: Img.céline,
      large: Img.céline,
    },
  },
  {
    photographer: 'Dominika Mazur',
    src: {
      original: Img.dominika,
      large: Img.dominika,
    },
  },
  {
    photographer: 'Jessika Arraes',
    src: {
      original: Img.jessika,
      large: Img.jessika,
    },
  },
  {
    photographer: 'Harper Sunday',
    src: {
      original: Img.harper,
      large: Img.harper,
    },
  },
  {
    photographer: 'Céline',
    src: {
      original: Img.céline,
      large: Img.céline,
    },
  },
  {
    photographer: 'Dominika Mazur',
    src: {
      original: Img.dominika,
      large: Img.dominika,
    },
  },
  {
    photographer: 'Jessika Arraes',
    src: {
      original: Img.jessika,
      large: Img.jessika,
    },
  },
  {
    photographer: 'Harper Sunday',
    src: {
      original: Img.harper,
      large: Img.harper,
    },
  },
  {
    photographer: 'Céline',
    src: {
      original: Img.céline,
      large: Img.céline,
    },
  },
  {
    photographer: 'Dominika Mazur',
    src: {
      original: Img.dominika,
      large: Img.dominika,
    },
  },
  {
    photographer: 'Jessika Arraes',
    src: {
      original: Img.jessika,
      large: Img.jessika,
    },
  },
  {
    photographer: 'Harper Sunday',
    src: {
      original: Img.harper,
      large: Img.harper,
    },
  },
  {
    photographer: 'Céline',
    src: {
      original: Img.céline,
      large: Img.céline,
    },
  },
  {
    photographer: 'Dominika Mazur',
    src: {
      original: Img.dominika,
      large: Img.dominika,
    },
  },
  {
    photographer: 'Jessika Arraes',
    src: {
      original: Img.jessika,
      large: Img.jessika,
    },
  },
  {
    photographer: 'Harper Sunday',
    src: {
      original: Img.harper,
      large: Img.harper,
    },
  },
  {
    photographer: 'Céline',
    src: {
      original: Img.céline,
      large: Img.céline,
    },
  },
];

const auth = process.env.REACT_APP_PEXELS_API_KEY;
const overLoad = {
  headers: {
    Authorization: auth,
    Accept: 'application/json',
  },
};
const PER_PAGE_PHOTO_NUM = 15;

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [photos, setPhotos] = useState(null);
  const [page, setPage] = useState(1);
  const [currSearchedPhotos, setCurrSearchedPhotos] = useState('');
  const initURL = `https://api.pexels.com/v1/curated?page=${page}&per_page=${PER_PAGE_PHOTO_NUM}`;
  const searchURL = `https://api.pexels.com/v1/search?query=${searchInput}&page=${page}&per_page=${PER_PAGE_PHOTO_NUM}`;

  // // Fetch photo data from pexels api
  const searchPhotos = useCallback(async (url) => {
    if (url.trim() === '') {
      return;
    }
    setHasError(false);
    setIsLoading(true);
    try {
      // const response = await fetch(url, overLoad);
      // const data = await response.json();
      // setPhotos(data.photos);
      setPhotos(test_photos);
      setCurrSearchedPhotos(searchInput);
    } catch (error) {
      setHasError(true);
    }
    setIsLoading(false);
  }, []);

  // // // Fetch photo data from clicking "Load More" button
  const loadMorePictures = async () => {
    setHasError(false);
    try {
      setPage((prevPage) => prevPage + 1);
      const url =
        currSearchedPhotos === ''
          ? `https://api.pexels.com/v1/curated?page=${page}&per_page=${PER_PAGE_PHOTO_NUM}`
          : `https://api.pexels.com/v1/search?query=${currSearchedPhotos}&page=${page}&per_page=${PER_PAGE_PHOTO_NUM}`;
      const response = await fetch(url, overLoad);
      const data = await response.json();
      setPhotos([...photos, ...data.photos]);
    } catch (error) {
      setHasError(true);
    }
  };

  // Fetch photo data when the page loads up
  useEffect(() => {
    searchPhotos(initURL);
  }, []);

  // Clear search bar after searching
  useEffect(() => {
    setSearchInput('');
  }, [photos]);

  return (
    <s.Home>
      <SearchBar
        searchPhotos={() => searchPhotos(searchURL)}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <Pictures
        isLoading={isLoading}
        hasError={hasError}
        photos={photos}
        loadMorePictures={loadMorePictures}
      />
    </s.Home>
  );
}
