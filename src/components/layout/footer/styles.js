import styled from 'styled-components';

export const Footer = styled.footer`
  width: 100%;
  padding: 0.1rem 0;
  font-size: ${(props) => props.theme.fontSizes.$sm};
  text-align: center;
  vertical-align: middle;
  background-color: ${(props) => props.theme.themes.light.$primary};

  &,
  a {
    min-height: 30px;
    line-height: 30px;
    color: ${(props) => props.theme.colors.white};
  }

  a {
    margin: 0 0.5rem;

    img {
      height: 15px;
      object-fit: contain;
    }
  }
`;
