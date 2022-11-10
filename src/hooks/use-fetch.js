import * as Img from 'images';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { photoActions } from 'store/photo-slice';

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
        dispatch(photoActions.setPhotos([...data.photos]));
      } else {
        dispatch(photoActions.setPhotos([...currentPhotos, ...data.photos]));
      }

      // dispatch(photoActions.setPhotos(test_photos));
    } catch (error) {
      console.error(error);
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
