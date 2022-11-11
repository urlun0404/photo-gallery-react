import * as Img from 'images';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { photoActions } from 'store/photo-slice';

const test_photos = [
  {
    user: {
      name: 'Jessika Arraes',
    },
    urls: {
      small: Img.jessika,
      download_location: Img.jessika,
    },
  },
  {
    user: {
      name: 'Harper Sunday',
    },
    urls: {
      small: Img.harper,
      download_location: Img.harper,
    },
  },
  {
    user: {
      name: 'Céline',
    },
    urls: {
      small: Img.céline,
      download_location: Img.céline,
    },
  },
  {
    user: {
      name: 'Dominika Mazur',
    },
    urls: {
      small: Img.dominika,
      download_location: Img.dominika,
    },
  },
  {
    user: {
      name: 'Jessika Arraes',
    },
    urls: {
      small: Img.jessika,
      download_location: Img.jessika,
    },
  },
  {
    user: {
      name: 'Harper Sunday',
    },
    urls: {
      small: Img.harper,
      download_location: Img.harper,
    },
  },
  {
    user: {
      name: 'Céline',
    },
    urls: {
      small: Img.céline,
      download_location: Img.céline,
    },
  },
  {
    user: {
      name: 'Dominika Mazur',
    },
    urls: {
      small: Img.dominika,
      download_location: Img.dominika,
    },
  },
  {
    user: {
      name: 'Jessika Arraes',
    },
    urls: {
      small: Img.jessika,
      download_location: Img.jessika,
    },
  },
  {
    user: {
      name: 'Harper Sunday',
    },
    urls: {
      small: Img.harper,
      download_location: Img.harper,
    },
  },
  {
    user: {
      name: 'Céline',
    },
    urls: {
      small: Img.céline,
      download_location: Img.céline,
    },
  },
  {
    user: {
      name: 'Dominika Mazur',
    },
    urls: {
      small: Img.dominika,
      download_location: Img.dominika,
    },
  },
  {
    user: {
      name: 'Jessika Arraes',
    },
    urls: {
      small: Img.jessika,
      download_location: Img.jessika,
    },
  },
  {
    user: {
      name: 'Harper Sunday',
    },
    urls: {
      small: Img.harper,
      download_location: Img.harper,
    },
  },
  {
    user: {
      name: 'Céline',
    },
    urls: {
      small: Img.céline,
      download_location: Img.céline,
    },
  },
  {
    user: {
      name: 'Dominika Mazur',
    },
    urls: {
      small: Img.dominika,
      download_location: Img.dominika,
    },
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
        dispatch(photoActions.setPhotos([...data['results']]));
      } else {
        dispatch(photoActions.setPhotos([...currentPhotos, ...data]));
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
