import * as s from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { photoActions } from 'store/photo-slice';
import { useState, useEffect } from 'react';
import useFetch from 'hooks/use-fetch';
import { OVERLOAD } from 'constants';

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const currentSearch = useSelector((state) => state.photo.currentSearch);
  const { fetchData } = useFetch();
  const dispatch = useDispatch();

  const inputHandler = (event) => {
    setSearchInput(event.target.value);
  };

  const searchPhotos = (event) => {
    event.preventDefault();
    if (searchInput == '' || searchInput === currentSearch) return;

    // Record current searched result
    dispatch(photoActions.setCurrentSearch(searchInput));

    // Fetch data from new searched result
    const searchInputUrl = `https://api.unsplash.com/search/photos?query=${searchInput}&page=${1}&per_page=${16}`;

    fetchData(searchInputUrl, OVERLOAD, true);

    // Clear search bar after searching
    setSearchInput('');
  };

  useEffect(() => {
    const dispatchSearchInput = setTimeout(() => {
      if (searchInput.trim() === '' || searchInput === currentSearch) return;

      dispatch(photoActions.setCurrentSearch(searchInput.trim()));
    }, 500);

    // Clear the last side effect
    return () => {
      clearTimeout(dispatchSearchInput);
    };
  }, [searchInput]);

  return (
    <s.Search>
      <s.SearchInput
        type="text"
        value={searchInput}
        onChange={inputHandler}
        className={`${searchInput.trim() !== '' ? 'isActive' : 'isInvalid'}`}
      />
      <s.SearchButton onClick={searchPhotos}>Search</s.SearchButton>
    </s.Search>
  );
}
