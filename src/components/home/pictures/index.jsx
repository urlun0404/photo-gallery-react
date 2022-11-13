import * as s from './styles';
import { OVERLOAD } from 'constants';
import { Outlet } from 'react-router-dom';
import { PIXABAY_ENDPOINT } from 'constants';
import Picture from './picture';
import React from 'react';
import SearchBar from 'components/home/search-bar';
import { photoActions } from 'store/photo-slice';
import { useDispatch, useSelector } from 'react-redux';
import useFetch from 'hooks/use-fetch';

const Pictures = React.memo(function () {
  const { fetchData } = useFetch();
  const dispatch = useDispatch();
  const photo = useSelector((state) => state.photo);

  const selectPerPagePhotoNum = (event) => {
    event.preventDefault();
    const perPagePhotoNum = event.target.value;
    dispatch(photoActions.setPerPagePhotoNum(perPagePhotoNum));

    const currSearch = photo.currentSearch;
    const currSearchUrl =
      currSearch === ''
        ? `${PIXABAY_ENDPOINT}&page=${photo.page}&per_page=${perPagePhotoNum}`
        : `${PIXABAY_ENDPOINT}&q=${currSearch}&page=${photo.page}&per_page=${perPagePhotoNum}`;

    // Reload page
    fetchData(currSearchUrl, OVERLOAD, true);
  };

  // Fetch photo data from clicking "Load More" button
  const loadMorePhotos = (event) => {
    event.preventDefault();
    const newPage = photo.page + 1;
    dispatch(photoActions.setPage(newPage));

    const currSearch = photo.currentSearch;
    const currSearchUrl =
      currSearch === ''
        ? `${PIXABAY_ENDPOINT}&page=${newPage}&per_page=${photo.perPagePhotoNum}`
        : `${PIXABAY_ENDPOINT}&q=${currSearch}&page=${newPage}&per_page=${photo.perPagePhotoNum}`;

    fetchData(currSearchUrl, OVERLOAD);
  };

  return (
    <>
      <SearchBar />
      <s.SelectPerPageNum>
        <label htmlFor="select-photo-num">
          Show the Number of Photos Per Page:
        </label>
        <select name="select-photo-num" onChange={selectPerPagePhotoNum}>
          <option value={15}>15</option>
          <option value={30}>30</option>
        </select>
      </s.SelectPerPageNum>
      <s.Pictures>
        {photo.photos.length !== 0 &&
          photo.photos.map((photo) => (
            <Picture key={photo.id} className="picture" photo={photo} />
          ))}
        <Outlet />
      </s.Pictures>
      <s.LoadMoreButton onClick={loadMorePhotos}>Load More</s.LoadMoreButton>
    </>
  );
});
export default Pictures;
