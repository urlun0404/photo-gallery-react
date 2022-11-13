import * as s from './styles';
import Footer from './footer';
import NavBar from './nav-bar';

export default function Layout(props) {
  return (
    <>
      <s.Header>
        <NavBar />
      </s.Header>
      <s.Main>{props.children}</s.Main>
      <s.Footer>
        <Footer />
      </s.Footer>
    </>
  );
}
