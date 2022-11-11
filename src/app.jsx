import { useState, useEffect } from 'react';
import useFetch from 'hooks/use-fetch';
import { OVERLOAD } from 'constants';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import GlobalStyles from 'styles/global';
import HomePage from 'pages/home';
import AboutPage from 'pages/about';
import ErrorPage from 'pages/error';
import theme from 'styles/theme';

let init = false;

const initialSearchUrl = `https://api.unsplash.com/photos?page=${1}&per_page=${16}`;

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
