import ReactDOM from 'react-dom';
import * as s from './styles';
import { CloseCircleButton } from 'components/layout/buttons';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function PictureDetails() {
  const {
    state: { photo },
  } = useLocation();

  const navigate = useNavigate();

  const clickCloseBtn = (event) => {
    event.preventDefault();
    navigate('/', { replace: true });
  };

  return ReactDOM.createPortal(
    <s.Portal>
      <s.Dialog>
        <CloseCircleButton
          id="close-btn"
          title="Close"
          onClick={clickCloseBtn}
        />
        <s.Details>
          <s.Container id="image">
            <img src={photo.largeImageURL} />
          </s.Container>
          <s.Container id="info">
            <s.Info id="info-photo">
              <s.InfoTitle>Photo</s.InfoTitle>
              <ul>
                <li>
                  Total Likes: {photo.likes || 0}
                  <span>💗</span>
                </li>
                <li>
                  Total Views : {photo.views || 0}
                  <span>👀</span>
                </li>
                <li>
                  Total Downloads: {photo.downloads || 0}
                  <span>📥</span>
                </li>
                <li>
                  tags:
                  {photo.tags.split(',').map((tag, index) => (
                    <a
                      key={index}
                      className="tag"
                      href={`https://pixabay.com/images/search/${tag}`}
                      target="_blank"
                      title={`Search ${tag} on Pixabay`}
                    >
                      #{tag}
                    </a>
                  ))}
                </li>
                <li>
                  <a
                    className="check-link"
                    href={photo.pageURL}
                    target="_blank"
                  >
                    Check out this photo on Pixabay page!
                  </a>
                </li>
              </ul>
            </s.Info>
            <s.Line />
            <s.Info id="info-photographer">
              <s.InfoTitle>Photographer</s.InfoTitle>
              <ul>
                <li id="photographer">
                  <img src={photo.userImageURL} />
                </li>
                <li>
                  <strong>{photo.user}</strong>
                </li>
                <li>
                  <a
                    className="check-link"
                    href={`https://pixabay.com/users/${photo.user_id}`}
                  >
                    See {photo.user}'s more photos on Pixabay!
                  </a>
                </li>
              </ul>
            </s.Info>
          </s.Container>
        </s.Details>
      </s.Dialog>
      <s.Overlay onClick={clickCloseBtn} />
    </s.Portal>,
    document.getElementById('portal'),
  );
}
