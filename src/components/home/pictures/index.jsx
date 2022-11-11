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
    const newPage = photo.page + 1;
    const currSearch = photo.currentSearch;
    const currSearchUrl =
      currSearch === ''
        ? `https://api.unsplash.com/photos?page=${newPage}&per_page=${16}`
        : `https://api.unsplash.com/search/photos?query=${currSearch}&page=${newPage}&per_page=${16}`;

    dispatch(photoActions.setPage(newPage));
    fetchData(currSearchUrl, OVERLOAD);
  };

  return (
    <s.Container>
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
}
