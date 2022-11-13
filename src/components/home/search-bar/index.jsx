import * as s from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { OVERLOAD } from 'constants';
import { PIXABAY_ENDPOINT } from 'constants';
import { photoActions } from 'store/photo-slice';
import useFetch from 'hooks/use-fetch';
import { CloseCircleButton } from 'components/layout/buttons';

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const photo = useSelector((state) => state.photo);
  const { fetchData } = useFetch();
  const dispatch = useDispatch();

  const inputHandler = (event) => {
    setSearchInput(event.target.value);
  };

  const clearSearchInput = (event) => {
    event.preventDefault();
    setSearchInput('');
  };

  const searchPhotos = (event) => {
    event.preventDefault();
    if (searchInput == '') return;

    // Fetch data from new searched result
    const searchInputUrl = `${PIXABAY_ENDPOINT}&q=${searchInput}&page=${1}&per_page=${
      photo.perPagePhotoNum
    }`;

    fetchData(searchInputUrl, OVERLOAD, true);

    // Record current searched result
    dispatch(photoActions.setCurrentSearch(searchInput));

    // Clear search bar after searching
    setSearchInput('');
  };

  useEffect(() => {
    const dispatchSearchInput = setTimeout(() => {
      if (searchInput.trim() === '' || searchInput === photo.currentSearch)
        return;

      dispatch(photoActions.setCurrentSearch(searchInput.trim()));
    }, 500);

    // Clear the last side effect
    return () => {
      clearTimeout(dispatchSearchInput);
    };
  }, [searchInput]);

  return (
    <s.Search>
      <s.SearchInput>
        <input
          id="search-input"
          type="text"
          placeholder="Please Enter Something for Search"
          value={searchInput}
          onChange={inputHandler}
          className={`${searchInput.trim() !== '' ? 'isActive' : 'isInvalid'}`}
        />
        <CloseCircleButton
          id="clear-input-btn"
          onClick={clearSearchInput}
          title="Clear Current Search"
        />
      </s.SearchInput>
      <s.SearchButton
        id="search-btn"
        title="Submit Current Search"
        onClick={searchPhotos}
      >
        Search
      </s.SearchButton>
    </s.Search>
  );
}
