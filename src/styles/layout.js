import styled from 'styled-components';
import theme from 'styles/theme';

export const ThemeButton = styled.button`
  padding: 0.75rem;
  margin: 0.5rem 0;
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.white};
  background-color: ${theme.themes.light.$secondary};
  border-radius: 6px;

  font-size: 1rem;
  box-shadow: 0px 3px 8px ${theme.themes.light.$secondaryLight};
  transition: all ease-in 0.1s;

  &:hover {
    background-color: ${theme.themes.light.$primary};
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0px 3px 8px ${theme.themes.light.$secondaryLight};
  }
`;

export const Portal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
`;

export const Card = styled.div`
  border-radius: 8px;
  box-shadow: 3px 3px 5px ${theme.themes.light.$secondaryDark};
`;

export const Dialog = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${theme.themes.light.$secondary};
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${theme.colors.black70};
`;
