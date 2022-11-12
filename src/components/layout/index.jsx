import NavBar from './nav-bar';
import Footer from './footer';
import * as s from './styles';

export default function Layout(props) {
  return (
    <s.Layout>
      <s.Header>
        <NavBar />
      </s.Header>
      <s.Main>{props.children}</s.Main>
      <Footer />
    </s.Layout>
  );
}
