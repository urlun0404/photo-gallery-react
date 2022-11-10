import styled from 'styled-components';

export const Header = styled.header`
  padding: 1rem 2rem;
  text-align: center;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 100%;
`;

export const Button = styled.button`
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

export const Card = styled.div`
  border-radius: 8px;
  box-shadow: 3px 3px 5px rgba(87, 87, 87, 0.7);
`;
