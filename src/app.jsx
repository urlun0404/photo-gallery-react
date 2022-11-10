import { Route, Routes } from 'react-router-dom';
import About from 'components/about';
import GlobalStyles from 'styles/global';
import Home from 'components/home';
import NavBar from 'components/nav-bar';
import { OVERLOAD } from 'constants';
import { useEffect } from 'react';
import useFetch from 'hooks/use-fetch';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

let init = false;

const initialSearchUrl = `https://api.pexels.com/v1/curated?page=${1}&per_page=${16}`;

export default function App() {
  const { fetchData } = useFetch();

  // Fetch initial photo data when the page loads up
  useEffect(() => {
    if (init) return;
    init = true;
    fetchData(initialSearchUrl, OVERLOAD);
  }, []);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}
