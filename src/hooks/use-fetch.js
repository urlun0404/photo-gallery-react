import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { photoActions } from 'store/photo-slice';

export default function useFetch() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessages, setErrorMessages] = useState(false);
  const dispatch = useDispatch();

  const fetchData = useCallback(async (url, overLoad, isNewSearch = false) => {
    setHasError(false);
    setIsLoading(true);
    try {
      const response = await fetch(url, overLoad);
      const data = await response.json();
      if (!response.ok || Number(data['total']) === 0) {
        throw new Error(
          response.statusText || "Couldn't find any matched photos",
        );
      } else {
        dispatch(
          photoActions.setPhotos({
            isNewSearch,
            newPhotos: data['hits'],
          }),
        );
      }
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
