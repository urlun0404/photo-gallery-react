import styled from 'styled-components';

export const Footer = styled.p`
  width: 100%;
  height: 100%;
  padding: 0.1rem 0;
  font-size: ${(props) => props.theme.fontSizes.$sm};
  text-align: center;
  vertical-align: middle;

  &,
  a {
    min-height: 30px;
    line-height: 30px;
  }

  a {
    margin: 0 0.5rem;
    /* color: ${(props) => props.theme.themes.light.$primary}; */

    img {
      height: 15px;
      object-fit: contain;
    }
  }
`;
