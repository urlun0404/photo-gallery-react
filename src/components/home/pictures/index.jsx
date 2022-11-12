import * as s from './styles';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OVERLOAD } from 'constants';
import { PIXABAY_ENDPOINT } from 'constants';
import Picture from './picture';
import { photoActions } from 'store/photo-slice';
import useFetch from 'hooks/use-fetch';

const Pictures = React.memo(function () {
  const dispatch = useDispatch();
  const { isLoading, hasError, fetchData } = useFetch();
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
    const currSearch = photo.currentSearch;

    const currSearchUrl =
      currSearch === ''
        ? `${PIXABAY_ENDPOINT}&page=${newPage}&per_page=${photo.perPagePhotoNum}`
        : `${PIXABAY_ENDPOINT}&q=${currSearch}&page=${newPage}&per_page=${photo.perPagePhotoNum}`;

    dispatch(photoActions.setPage(newPage));
    fetchData(currSearchUrl, OVERLOAD);
  };

  return (
    <s.Container>
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
        {isLoading && <h3>Loading...</h3>}
        {!isLoading && hasError ? (
          <h3>Opps! Something Goes Wrong!</h3>
        ) : (
          photo.photos &&
          photo.photos.map((photo) => {
            return <Picture key={photo.id} className="picture" photo={photo} />;
          })
        )}
      </s.Pictures>
      {!isLoading && !hasError && (
        <s.LoadMoreButton onClick={loadMorePhotos}>Load More</s.LoadMoreButton>
      )}
    </s.Container>
  );
});

export default Pictures;
