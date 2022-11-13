import * as Img from 'images';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { photoActions } from 'store/photo-slice';
import { useNavigate } from 'react-router-dom';

const test_photos = [
  {
    id: 1,
    user: 'Céline',
    webformatURL: Img.jessika,
    largeImageURL: Img.jessika,
    views: 25,
    likes: 100,
    downloads: 100,
    tags: 'a, b, c',
  },
  {
    id: 2,
    user: 'Céline',
    webformatURL: Img.harper,
    largeImageURL: Img.harper,
    views: 25,
    likes: 100,
    downloads: 100,
    tags: 'a, b, c',
  },
  {
    id: 3,
    user: 'Céline',
    webformatURL: Img.céline,
    largeImageURL: Img.céline,
    views: 25,
    likes: 100,
    downloads: 100,
    tags: 'a, b, c',
  },
  {
    id: 4,
    user: 'Dominika Mazur',
    webformatURL: Img.dominika,
    largeImageURL: Img.dominika,
    views: 25,
    likes: 100,
    downloads: 100,
    tags: 'a, b, c',
  },
  {
    id: 5,
    user: 'Céline',
    webformatURL: Img.jessika,
    largeImageURL: Img.jessika,
    views: 25,
    likes: 100,
    downloads: 100,
    tags: 'a, b, c',
  },
  {
    id: 6,
    user: 'Céline',
    webformatURL: Img.harper,
    largeImageURL: Img.harper,
    views: 25,
    likes: 100,
    downloads: 100,
    tags: 'a, b, c',
  },
  {
    id: 7,
    user: 'Céline',
    webformatURL: Img.céline,
    largeImageURL: Img.céline,
    views: 25,
    likes: 100,
    downloads: 100,
    tags: 'a, b, c',
  },
  {
    id: 8,
    user: 'Dominika Mazur',
    webformatURL: Img.dominika,
    largeImageURL: Img.dominika,
    views: 25,
    likes: 100,
    downloads: 100,
    tags: 'a, b, c',
  },
  {
    id: 9,
    user: 'Céline',
    webformatURL: Img.jessika,
    largeImageURL: Img.jessika,
    views: 25,
    likes: 100,
    downloads: 100,
    tags: 'a, b, c',
  },
  {
    id: 10,
    user: 'Céline',
    webformatURL: Img.harper,
    largeImageURL: Img.harper,
    views: 25,
    likes: 100,
    downloads: 100,
    tags: 'a, b, c',
  },
  {
    id: 11,
    user: 'Céline',
    webformatURL: Img.céline,
    largeImageURL: Img.céline,
    views: 25,
    likes: 100,
    downloads: 100,
    tags: 'a, b, c',
  },
  {
    id: 12,
    user: 'Dominika Mazur',
    webformatURL: Img.dominika,
    largeImageURL: Img.dominika,
    views: 25,
    likes: 100,
    downloads: 100,
    tags: 'a, b, c',
  },
  {
    id: 13,
    user: 'Céline',
    webformatURL: Img.harper,
    largeImageURL: Img.harper,
    views: 25,
    likes: 100,
    downloads: 100,
    tags: 'a, b, c',
  },
  {
    id: 14,
    user: 'Céline',
    webformatURL: Img.céline,
    largeImageURL: Img.céline,
    views: 25,
    likes: 100,
    downloads: 100,
    tags: 'a, b, c',
  },
  {
    id: 15,
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
  const [errorMessages, setErrorMessages] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchData = useCallback(async (url, overLoad, isNewSearch = false) => {
    setHasError(false);
    setIsLoading(true);
    try {
      const response = await fetch(url, overLoad);
      const data = await response.json();
      console.log(data);
      dispatch(
        photoActions.setPhotos({
          isNewSearch,
          newPhotos: data['hits'],
        }),
      );
      if (!response.ok || Number(data['total']) === 0) {
        throw new Error(
          response.statusText || "Couldn't find any matched photos",
        );
      }
      // dispatch(
      //   photoActions.setPhotos({
      //     isNewSearch,
      //     newPhotos: test_photos,
      //   }),
      // );
    } catch (err) {
      setHasError(true);
      setErrorMessages(err);
      console.error(err);
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    hasError,
    errorMessages,
    fetchData,
  };
}
