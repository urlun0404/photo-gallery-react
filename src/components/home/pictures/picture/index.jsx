import { downloadPhoto } from './helpers';
import * as s from './styles';

export default function Picture({ photo }) {
  return (
    <s.Picture>
      <s.ImageWrapper className="card">
        <s.Image src={photo.src.large} alt="" />
      </s.ImageWrapper>
      <s.TextContainer>
        <p>
          Photo by <strong>{photo.photographer}</strong>
        </p>
        <p>
          Download photo:
          <s.DownloadButton onClick={() => downloadPhoto(photo.src.original)}>
            Here
          </s.DownloadButton>
        </p>
      </s.TextContainer>
    </s.Picture>
  );
}
