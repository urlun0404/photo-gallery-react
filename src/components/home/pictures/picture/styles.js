import styled from 'styled-components';
import { Card, ThemeButton } from 'styles/layout';

export const Picture = styled(Card)`
  min-height: 400px;
  width: 280px;
  height: 400px;
  margin: 1rem;
  padding: 1.25rem 0.5rem;

  & > ul {
    margin: 0.25rem auto;
  }
`;

export const ImageWrapper = styled.figure`
  position: relative;
  width: 100%;
  height: 55%;
  margin: 0 auto;
  overflow: hidden;

  #details-btn {
    opacity: 0;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.white70};

    img {
      transform: scale(1.25);
      opacity: 0.3;
    }

    #details-btn {
      opacity: 1;
    }
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  object-fit: contain;
  object-position: center;
  transition: all 0.2s ease-in;
`;

export const DetailsButton = styled(ThemeButton)`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 0.5rem 0.75rem;
  margin: 0;
  font-size: ${(props) => props.theme.fontSizes.$sm};
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-in;
`;

export const TagContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 0.2rem;
  font-size: ${(props) => props.theme.fontSizes.$xs};

  li {
    display: inline-block;
    padding: 0.2rem;
    margin: 0.15rem;
    color: #ffffff;
    background-color: #c7c7c7;
    border-radius: 5px;
  }
`;

export const TextContainer = styled.ul`
  font-size: ${(props) => props.theme.fontSizes.$sm};

  li {
    padding: 0.25rem 0.75rem;
  }

  .info {
    font-size: ${(props) => props.theme.fontSizes.$xs};
    font-weight: ${(props) => props.theme.fontWeights.bold};
  }
`;

export const DownloadButton = styled.button`
  margin: 0 0.25rem;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-decoration: underline;
  transition: all 0.1s ease-in;

  &:hover {
    color: #e60000;
  }
`;
