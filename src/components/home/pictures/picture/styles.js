import styled from 'styled-components';
import { Card } from 'styles/layout';

export const Picture = styled(Card)`
  min-width: 250px;
  min-height: 300px;
  width: 15%;
  max-width: 300px;
  max-height: 450px;
  margin: 1rem;
  padding: 1.25rem 0.5rem;
`;

export const ImageWrapper = styled.figure`
  height: 70%;
  max-height: 260px;
  margin: 0 auto;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.25);
  }
`;

export const TextContainer = styled.div`
  margin: 0.5rem auto;

  p {
    padding: 0.25rem 0.75rem;
  }
`;

export const DownloadButton = styled.button`
  font-size: 1rem;
  font-weight: 700;
  text-decoration: underline;
  transition: all ease-in 0.15s;

  &:hover {
    color: #e60000;
  }
`;
