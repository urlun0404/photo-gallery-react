import * as Img from 'images';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { photoActions } from 'store/photo-slice';

const test_photos = [
  {
    user: 'Céline',
    webformatURL: Img.jessika,
    largeImageURL: Img.jessika,
    views: 25,
    likes: 100,
    downloads: 100,
    tags: 'a, b, c',
  },
  {
    user: 'Céline',
    webformatURL: Img.harper,
    largeImageURL: Img.harper,
    views: 25,
    likes: 100,
    downloads: 100,
    tags: 'a, b, c',
  },
  {
    user: 'Céline',
    webformatURL: Img.céline,
    largeImageURL: Img.céline,
    views: 25,
    likes: 100,
    downloads: 100,
    tags: 'a, b, c',
  },
  {
    user: 'Dominika Mazur',
    webformatURL: Img.dominika,
    largeImageURL: Img.dominika,
    views: 25,
    likes: 100,
    downloads: 100,
    tags: 'a, b, c',
  },
  {
    user: 'Céline',
    webformatURL: Img.jessika,
    largeImageURL: Img.jessika,
    views: 25,
    likes: 100,
    downloads: 100,
    tags: 'a, b, c',
  },
  {
    user: 'Céline',
    webformatURL: Img.harper,
    largeImageURL: Img.harper,
    views: 25,
    likes: 100,
    downloads: 100,
    tags: 'a, b, c',
  },
  {
    user: 'Céline',
    webformatURL: Img.céline,
    largeImageURL: Img.céline,
    views: 25,
    likes: 100,
    downloads: 100,
    tags: 'a, b, c',
  },
  {
    user: 'Dominika Mazur',
    webformatURL: Img.dominika,
    largeImageURL: Img.dominika,
    views: 25,
    likes: 100,
    downloads: 100,
    tags: 'a, b, c',
  },
  {
    user: 'Céline',
    webformatURL: Img.jessika,
    largeImageURL: Img.jessika,
    views: 25,
    likes: 100,
    downloads: 100,
    tags: 'a, b, c',
  },
  {
    user: 'Céline',
    webformatURL: Img.harper,
    largeImageURL: Img.harper,
    views: 25,
    likes: 100,
    downloads: 100,
    tags: 'a, b, c',
  },
  {
    user: 'Céline',
    webformatURL: Img.céline,
    largeImageURL: Img.céline,
    views: 25,
    likes: 100,
    downloads: 100,
    tags: 'a, b, c',
  },
  {
    user: 'Dominika Mazur',
    webformatURL: Img.dominika,
    largeImageURL: Img.dominika,
    views: 25,
    likes: 100,
    downloads: 100,
    tags: 'a, b, c',
  },
  {
    user: 'Céline',
    webformatURL: Img.jessika,
    largeImageURL: Img.jessika,
    views: 25,
    likes: 100,
    downloads: 100,
    tags: 'a, b, c',
  },
  {
    user: 'Céline',
    webformatURL: Img.harper,
    largeImageURL: Img.harper,
    views: 25,
    likes: 100,
    downloads: 100,
    tags: 'a, b, c',
  },
  {
    user: 'Céline',
    webformatURL: Img.céline,
    largeImageURL: Img.céline,
    views: 25,
    likes: 100,
    downloads: 100,
    tags: 'a, b, c',
  },
  {
    user: 'Dominika Mazur',
    webformatURL: Img.dominika,
    largeImageURL: Img.dominika,
    views: 25,
    likes: 100,
    downloads: 100,
    tags: 'a, b, c',
  },
];

export default function useFetch() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const dispatch = useDispatch();

  const fetchData = useCallback(async (url, overLoad, isNewSearch = false) => {
    setHasError(false);
    setIsLoading(true);
    try {
      const response = await fetch(url, overLoad);
      const data = await response.json();
      dispatch(
        photoActions.setPhotos({
          isNewSearch,
          newPhotos: data['hits'],
        }),
      );
      if (!response.ok) throw new Error(response);
      // dispatch(
      //   photoActions.setPhotos({
      //     isNewSearch,
      //     newPhotos: test_photos,
      //   }),
      // );
    } catch (err) {
      console.error(err);
      setHasError(true);
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    hasError,
    fetchData,
  };
}
