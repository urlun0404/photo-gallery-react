import Picture from './picture';
import * as s from './styles';

export default function Pictures(props) {
  return (
    <>
      <s.Pictures>
        {props.isLoading && <h3>Loading...</h3>}
        {!props.isLoading && props.hasError && <h3>Something goes wrong</h3>}
        {!props.isLoading &&
          !props.hasError &&
          props.photos &&
          props.photos.map((photo) => {
            return <Picture key={photo.id} className="picture" photo={photo} />;
          })}
      </s.Pictures>
      {!props.isLoading && !props.hasError && (
        <s.LoadMoreButton onClick={props.loadMorePictures}>
          Load More
        </s.LoadMoreButton>
      )}
    </>
  );
}
