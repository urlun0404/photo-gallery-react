import styled from 'styled-components';
import { ThemeButton } from 'styles/layout';

export const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.5rem 0;

  input,
  button {
    padding: 0.5rem 0.75rem;
    margin: 0.5rem 0.75rem;
    font-size: 1.25rem;
    border-radius: 6px;
    transition: all ease-in 0.15s;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.$sm}) {
    flex-direction: column;
  } ;
`;

export const SearchInput = styled.input`
  border: 1.5px solid #c7c7c7;

  &:hover {
    outline: #61468a42;
  }

  &:focus {
    border-color: #4f005f;
    background-color: #f6dbfc;

    & + button {
      background-color: #61468a;
    }

    &.isInvalid {
      border-color: #ff0000;
      background-color: #fbdada;

      & + button {
        background-color: #959595;
      }
    }
  }
`;

export const SearchButton = styled(ThemeButton)`
  font-weight: bold;
`;
