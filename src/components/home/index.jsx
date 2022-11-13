import * as s from './styles';
import SearchBar from 'components/home/search-bar';
import Pictures from 'components/home/pictures';

export default function Home({ status }) {
  return (
    <s.Container>
      {status.isLoading ? (
        <s.Loading>Is Loading...</s.Loading>
      ) : (
        <>
          <SearchBar />
          {!status.hasError && <Pictures />}
        </>
      )}
    </s.Container>
  );
}
