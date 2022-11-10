import Layout from 'components/layout';
import SearchBar from 'components/home/search-bar';
import Pictures from 'components/home/pictures';

export default function HomePage() {
  return (
    <Layout>
      <SearchBar />
      <Pictures />
    </Layout>
  );
}
