import * as s from './styles';

const downloadPhoto = async function (event, url) {
  event.preventDefault();
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(response);
    const blob = await response.blob();
    const blobURL = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    const fileName = new URL(url).pathname.split('/').pop();

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
        <s.Image src={photo.webformatURL} alt="" />
      </s.ImageWrapper>
      <s.TextContainer>
        <li>
          Photo by <strong>{photo.user}</strong>
        </li>
        <li>
          Download Original Photo:
          <s.DownloadButton
            onClick={(event) => downloadPhoto(event, photo.largeImageURL)}
          >
            Here
          </s.DownloadButton>
        </li>
        <li className="info">
          Views: <strong>{photo.views}</strong>
        </li>
        <li className="info">
          Likes: <strong>{photo.likes}</strong>
        </li>
        <li className="info">
          Downloads: <strong>{photo.downloads}</strong>
        </li>
      </s.TextContainer>
      <s.TagContainer>
        {photo.tags.split(',').map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </s.TagContainer>
    </s.Picture>
  );
}
