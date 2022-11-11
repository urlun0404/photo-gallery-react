import styled from 'styled-components';
import { Card } from 'styles/layout';

export const Picture = styled(Card)`
  width: 270px;
  height: 380px;
  margin: 1rem;
  padding: 1.25rem 0.5rem;
`;

export const ImageWrapper = styled.figure`
  width: 100%;
  height: 70%;
  margin: 0 auto;
  overflow: hidden;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  object-fit: contain;
  object-position: center;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.25);
  }
`;

export const TextContainer = styled.ul`
  margin: 0.5rem auto;
  font-size: ${(props) => props.theme.fontSizes.$sm};

  li {
    padding: 0.25rem 0.75rem;
  }

  #likes {
    font-weight: ${(props) => props.theme.fontWeights.bold};
    color: #959595;
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
