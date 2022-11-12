import SearchBar from 'components/home/search-bar';
import Pictures from 'components/home/pictures';
import { Outlet } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <SearchBar />
      <Pictures />
      <Outlet />
    </>
  );
}
