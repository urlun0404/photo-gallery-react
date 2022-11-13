import { Route, Routes } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import AboutPage from 'pages/about';
import ErrorPage from 'pages/error';
import GlobalStyles from 'styles/global';
import HomePage from 'pages/home';
import Layout from 'components/layout';
import { OVERLOAD } from 'constants';
import { PIXABAY_ENDPOINT } from 'constants';
import PictureDetailsPage from 'pages/picture-details';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import useFetch from 'hooks/use-fetch';

let init = false;

const initialSearchUrl = `${PIXABAY_ENDPOINT}&page=${1}&per_page=${15}`;

export default function App() {
  const { isLoading, hasError, errorMessages, fetchData } = useFetch();
  const status = useMemo(() => {
    return { isLoading, hasError, errorMessages };
  }, [isLoading, hasError, errorMessages]);

  // Fetch initial photo data when the page loads up
  useEffect(() => {
    if (init) return;
    init = true;
    fetchData(initialSearchUrl, OVERLOAD, true);
  }, []);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage status={status} />}>
              <Route
                path="/pictures/:pictureId"
                element={<PictureDetailsPage />}
              />
            </Route>
            <Route path="about" element={<AboutPage />} />
            <Route path="error" element={<ErrorPage status={status} />} />
            <Route path="*" element={<ErrorPage status={status} />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </>
  );
}
