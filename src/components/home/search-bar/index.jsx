import * as s from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { photoActions } from 'store/photo-slice';
import { useEffect } from 'react';

let currSearchInput = '';

export default function SearchBar() {
  const photo = useSelector((state) => state.photo);
  const currSearch = useSelector((state) => state.photo.currentSearch);
  const dispatch = useDispatch();

  const inputHandler = (event) => {
    if (event.target.value.trim() === '') {
      return;
    }
    currSearchInput = event.target.value.trim();
  };

  const searchPhotos = (event) => {
    event.preventDefault();
    dispatch(photoActions.setCurrentSearch(currSearchInput));
    const currentSearchUrl = `https://api.pexels.com/v1/search?query=${currSearchInput}&page=${1}&per_page=${16}`;
    fetchData(currentSearchUrl, overLoad);
  };

  // Clear search bar after searching
  useEffect(() => {
    dispatch(photoActions.setCurrentSearch(''));
    console.warn(photo.photos);
    console.log(
      `UPDATED: ${photo.page}, ${photo.currentSearch}, `,
      photo.currentSearchUrl,
    );
  }, [photo.photos]);

  return (
    <s.Search>
      <s.SearchInput type="text" value={currSearch} onChange={inputHandler} />
      <s.SearchButton onClick={searchPhotos}>Search</s.SearchButton>
    </s.Search>
  );
}
