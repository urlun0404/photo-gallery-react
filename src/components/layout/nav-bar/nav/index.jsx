import { Link } from 'react-router-dom';
import * as s from './styles';

export default function Nav(props) {
  return (
    <s.Nav>
      <Link to={props.path}>{props.nav}</Link>
    </s.Nav>
  );
}
