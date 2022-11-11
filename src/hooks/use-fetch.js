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
  },
  {
    user: 'Céline',
    webformatURL: Img.harper,
    largeImageURL: Img.harper,
    views: 25,
    likes: 100,
    downloads: 100,
  },
  {
    user: 'Céline',
    webformatURL: Img.céline,
    largeImageURL: Img.céline,
    views: 25,
    likes: 100,
    downloads: 100,
  },
  {
    user: 'Dominika Mazur',
    webformatURL: Img.dominika,
    largeImageURL: Img.dominika,
    views: 25,
    likes: 100,
    downloads: 100,
  },
  {
    user: 'Céline',
    webformatURL: Img.jessika,
    largeImageURL: Img.jessika,
    views: 25,
    likes: 100,
    downloads: 100,
  },
  {
    user: 'Céline',
    webformatURL: Img.harper,
    largeImageURL: Img.harper,
    views: 25,
    likes: 100,
    downloads: 100,
  },
  {
    user: 'Céline',
    webformatURL: Img.céline,
    largeImageURL: Img.céline,
    views: 25,
    likes: 100,
    downloads: 100,
  },
  {
    user: 'Dominika Mazur',
    webformatURL: Img.dominika,
    largeImageURL: Img.dominika,
    views: 25,
    likes: 100,
    downloads: 100,
  },
  {
    user: 'Céline',
    webformatURL: Img.jessika,
    largeImageURL: Img.jessika,
    views: 25,
    likes: 100,
    downloads: 100,
  },
  {
    user: 'Céline',
    webformatURL: Img.harper,
    largeImageURL: Img.harper,
    views: 25,
    likes: 100,
    downloads: 100,
  },
  {
    user: 'Céline',
    webformatURL: Img.céline,
    largeImageURL: Img.céline,
    views: 25,
    likes: 100,
    downloads: 100,
  },
  {
    user: 'Dominika Mazur',
    webformatURL: Img.dominika,
    largeImageURL: Img.dominika,
    views: 25,
    likes: 100,
    downloads: 100,
  },
  {
    user: 'Céline',
    webformatURL: Img.jessika,
    largeImageURL: Img.jessika,
    views: 25,
    likes: 100,
    downloads: 100,
  },
  {
    user: 'Céline',
    webformatURL: Img.harper,
    largeImageURL: Img.harper,
    views: 25,
    likes: 100,
    downloads: 100,
  },
  {
    user: 'Céline',
    webformatURL: Img.céline,
    largeImageURL: Img.céline,
    views: 25,
    likes: 100,
    downloads: 100,
  },
  {
    user: 'Dominika Mazur',
    webformatURL: Img.dominika,
    largeImageURL: Img.dominika,
    views: 25,
    likes: 100,
    downloads: 100,
  },
];

export default function useFetch() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const currentPhotos = useSelector((state) => state.photo.photos);
  const dispatch = useDispatch();

  const fetchData = useCallback(async (url, overLoad, isNewSearch = false) => {
    setHasError(false);
    setIsLoading(true);

    try {
      const response = await fetch(url, overLoad);
      const data = await response.json();
      if (isNewSearch) {
        dispatch(photoActions.setPhotos(data['hits']));
      } else {
        dispatch(photoActions.setPhotos([...currentPhotos, ...data['hits']]));
      }
      if (!response.ok) throw new Error(response);

      // dispatch(photoActions.setPhotos(test_photos));
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
