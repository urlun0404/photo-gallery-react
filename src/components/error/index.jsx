import * as s from './styles';
import { FaRegSadTear } from 'react-icons/fa';

export default function Error(props) {
  console.error(props.error);

  if (props.error) {
    return <s.Title>{props.error}</s.Title>;
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
