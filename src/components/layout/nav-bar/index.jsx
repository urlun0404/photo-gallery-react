import * as s from './styles';
import Nav from './nav';

export default function Navbar() {
  return (
    <s.NavBar>
      <ul>
        <Nav path="/" nav="Home" />
        <Nav path="/about" nav="About" />
      </ul>
    </s.NavBar>
  );
}
