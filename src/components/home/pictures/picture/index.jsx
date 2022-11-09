import { useCallback } from 'react';
import * as s from './styles';

export default function Picture({ photo }) {
  const download = useCallback((url) => {
    fetch(url).then((response) => {
      response
        .arrayBuffer()
        .then((buffer) => {
          const urlParser = new URL(url);
          const fileName = urlParser.pathname.split('/').pop();
          const blobURL = window.URL.createObjectURL(
            new Blob([buffer], { type: 'application/jpeg' }),
          );
          const link = document.createElement('a');
          link.href = blobURL;
          link.setAttribute('download', fileName);
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, []);

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
          <s.DownloadButton onClick={() => download(photo.src.original)}>
            Here
          </s.DownloadButton>
        </p>
      </s.TextContainer>
    </s.Picture>
  );
}
