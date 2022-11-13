import styled from 'styled-components';

export const NavBar = styled.nav`
  width: 100%;
  height: 100%;
  box-shadow: 0 5px 5px ${(props) => props.theme.themes.light.$secondary};
  background-color: ${(props) => props.theme.themes.light.$primary};

  ul {
    display: flex;
    justify-content: flex-end;
    height: 100%;
    margin-right: 2rem;
  }
`;
