import GlobalStyles from 'styles/global';
import Home from 'components/home';
import About from 'components/about';
import NavBar from 'components/nav-bar';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
