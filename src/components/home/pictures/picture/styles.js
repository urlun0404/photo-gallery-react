import styled from 'styled-components';
import { Card } from 'styles/layout';

export const Picture = styled(Card)`
  width: 260px;
  height: 380px;
  margin: 1rem;
  padding: 1.25rem 0.5rem;
`;

export const ImageWrapper = styled.figure`
  width: 100%;
  height: 60%;
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
