import styled from 'styled-components';

export const Nav = styled.li`
  padding: 0.75rem 1.75rem;
  font-size: 1.5rem;
  transition: all ease-in 0.2s;

  a {
    color: ${(props) => props.theme.colors.white};
  }

  &:hover {
    background-color: ${(props) => props.theme.themes.light.$primaryLight};
  }
`;
