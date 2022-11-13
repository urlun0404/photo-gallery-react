import * as s from './styles';
import { FaRegSadTear } from 'react-icons/fa';
import { ImSad } from 'react-icons/im';

export default function Error({ status }) {
  return (
    <s.Error>
      <s.Container>
        {status.hasError ? (
          <>
            <s.Title>{status.errorMessages}</s.Title>
            <s.Image>
              <ImSad />
            </s.Image>
          </>
        ) : (
          <>
            <s.Title className="title">
              404
              <s.SubTitle className="sub-title">Page Not Found</s.SubTitle>
            </s.Title>
            <s.Image>
              <FaRegSadTear />
            </s.Image>
            <s.Text>The page you are looking for doesn't exist.</s.Text>
          </>
        )}
      </s.Container>
    </s.Error>
  );
}
