import NavBar from './nav-bar';
import * as s from './styles';

export default function Layout(props) {
  return (
    <>
      <s.Header>
        <NavBar />
      </s.Header>
      <s.Main>{props.children}</s.Main>
    </>
  );
}
