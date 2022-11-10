import * as s from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { photoActions } from 'store/photo-slice';
import { useState, useEffect } from 'react';

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const currentSearch = useSelector((state) => state.photo.currentSearch);
  const dispatch = useDispatch();

  const inputHandler = (event) => {
    setSearchInput(event.target.value);
  };

  const searchPhotos = (event) => {
    event.preventDefault();
    if (searchInput == '' || searchInput === currentSearch);

    const searchInputUrl = `https://api.pexels.com/v1/search?query=${searchInput}&page=${1}&per_page=${16}`;

    fetchData(searchInputUrl, overLoad, true);

    // Clear search bar after searching
    setSearchInput('');
  };

  useEffect(() => {
    const dispatchSearchInput = setTimeout(() => {
      if (searchInput.trim() === '' || searchInput === currentSearch) return;

      console.log('DISPATCH!!!!!!!!');
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
