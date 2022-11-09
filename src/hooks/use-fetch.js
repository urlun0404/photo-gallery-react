import * as Img from 'images';
import { useState, useCallback } from 'react';

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

export default function useFetch() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [photos, setPhotos] = useState([]);

  const fetchData = useCallback(async (url, overLoad) => {
    setHasError(false);
    setIsLoading(true);
    try {
      // const response = await fetch(url, overLoad);
      // const data = await response.json();
      // setPhotos([...photos, ...data.photos]);
      setPhotos(test_photos);
    } catch (error) {
      setHasError(true);
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    hasError,
    photos,
    fetchData,
  };
}
