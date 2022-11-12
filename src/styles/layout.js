import styled from 'styled-components';
import theme from 'styles/theme';

export const ThemeButton = styled.button`
  padding: 0.75rem;
  margin: 0.5rem 0;
  font-weight: bolder;
  color: #ffffff;
  background-color: #959595;
  border-radius: 6px;

  font-size: 1rem;
  box-shadow: 0 1.75rem 3.5rem rgba(0, 0, 0, 0.1);
  transition: all ease-in 0.1s;

  &:hover {
    background-color: #61468a;
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
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
  box-shadow: 3px 3px 5px rgba(87, 87, 87, 0.7);
`;

export const Dialog = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${theme.colors.white};
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${theme.colors.black70};
`;
