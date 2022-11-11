import * as s from './styles';

const downloadPhoto = async function (url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(response);
    const urlParser = new URL(url);
    const fileName = urlParser.pathname.split('/').pop();
    const blob = await response.blob();
    const blobURL = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobURL;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (err) {
    console.error(err);
  }
};

export default function Picture({ photo }) {
  return (
    <s.Picture>
      <s.ImageWrapper className="card">
        <s.Image src={photo.urls.small} alt={photo.alt_description} />
      </s.ImageWrapper>
      <s.TextContainer>
        <p>
          Photo by <strong>{photo.user.name}</strong>
        </p>
        <p>
          Download Original Photo:
          <s.DownloadButton onClick={() => downloadPhoto(photo.urls.raw)}>
            Here
          </s.DownloadButton>
        </p>
      </s.TextContainer>
    </s.Picture>
  );
}
