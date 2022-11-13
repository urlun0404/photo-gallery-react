import * as s from './styles';
import Pictures from 'components/home/pictures';

export default function Home({ status }) {
  return (
    <s.Container>
      {status.isLoading ? (
        <s.Loading>Is Loading...</s.Loading>
      ) : (
        !status.hasError && <Pictures />
      )}
    </s.Container>
  );
}
