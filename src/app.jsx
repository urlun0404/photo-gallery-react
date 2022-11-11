import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AboutPage from 'pages/about';
import ErrorPage from 'pages/error';
import GlobalStyles from 'styles/global';
import HomePage from 'pages/home';
import { OVERLOAD } from 'constants';
import { PIXABAY_ENDPOINT } from 'constants';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import useFetch from 'hooks/use-fetch';

let init = false;

const initialSearchUrl = `${PIXABAY_ENDPOINT}&page=${1}&per_page=${15}`;

export default function App() {
  const { fetchData } = useFetch();
  const [error, setError] = useState(null);

  // Fetch initial photo data when the page loads up
  useEffect(() => {
    try {
      if (init) return;
      init = true;
      fetchData(initialSearchUrl, OVERLOAD);
    } catch (err) {
      setError(err);
    }
  }, []);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}
