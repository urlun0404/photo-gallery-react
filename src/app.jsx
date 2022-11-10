import { useEffect } from 'react';
import useFetch from 'hooks/use-fetch';
import { OVERLOAD } from 'constants';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import GlobalStyles from 'styles/global';
import HomePage from 'pages/home';
import AboutPage from 'pages/about';
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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}
