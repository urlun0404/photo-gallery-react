import * as s from './styles';
import { FaRegSadTear } from 'react-icons/fa';
import { ImSad } from 'react-icons/im';
import useFetch from 'hooks/use-fetch';

export default function Error() {
  const { hasError, errorMessages } = useFetch();

  if (hasError) {
    return (
      <s.Error>
        <s.Container>
          <s.Title>{errorMessages}</s.Title>
          <s.Image>
            <ImSad />
          </s.Image>
        </s.Container>
      </s.Error>
    );
  } else {
    return (
      <s.Error>
        <s.Container>
          <s.Title className="title">
            404
            <s.SubTitle className="sub-title">Page Not Found</s.SubTitle>
          </s.Title>
          <s.Image>
            <FaRegSadTear />
          </s.Image>
          <s.Text>The page you are looking for doesn't exist.</s.Text>
        </s.Container>
      </s.Error>
    );
  }
}
