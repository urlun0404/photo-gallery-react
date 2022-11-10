import * as s from './styles';
import { OVERLOAD } from 'constants';
import Picture from './picture';
import { photoActions } from 'store/photo-slice';
import { useDispatch } from 'react-redux';
import useFetch from 'hooks/use-fetch';
import { useSelector } from 'react-redux';
import { PER_PAGE_PHOTO_NUM } from 'constants';

export default function Pictures() {
  const dispatch = useDispatch();
  const { isLoading, hasError, fetchData } = useFetch();
  const photo = useSelector((state) => state.photo);

  // Fetch photo data from clicking "Load More" button
  const loadMorePhotos = () => {
    console.log('call load more');
    const newPage = photo.page + 1;
    const currSearch = photo.currentSearch;
    const currSearchUrl =
      currSearch === ''
        ? `https://api.pexels.com/v1/curated?page=${newPage}&per_page=${PER_PAGE_PHOTO_NUM}`
        : `https://api.pexels.com/v1/search?query=${currSearch}&page=${newPage}&per_page=${PER_PAGE_PHOTO_NUM}`;

    dispatch(photoActions.setPage(newPage));
    fetchData(currSearchUrl, OVERLOAD);
  };

  return (
    <>
      <s.Pictures>
        {isLoading && <h3>Loading...</h3>}
        {!isLoading && hasError && <h3>Something goes wrong</h3>}
        {!isLoading &&
          !hasError &&
          photo.photos &&
          photo.photos.map((photo) => {
            return <Picture key={photo.id} className="picture" photo={photo} />;
          })}
      </s.Pictures>
      {!isLoading && !hasError && (
        <s.LoadMoreButton
          onClick={() => {
            console.log('click load more');
            loadMorePhotos();
          }}
        >
          Load More
        </s.LoadMoreButton>
      )}
    </>
  );
}
