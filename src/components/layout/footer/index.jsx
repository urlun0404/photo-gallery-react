import * as s from './styles';
import pixabay from 'images/pixabay-logo.svg';

export default function Footer() {
  return (
    <s.Footer>
      The API used in this website comes from
      <a
        href="https://pixabay.com"
        target="_blank"
        title="Visit their website!"
      >
        <img src={pixabay} />
      </a>
    </s.Footer>
  );
}
