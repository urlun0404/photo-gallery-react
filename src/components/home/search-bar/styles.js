import styled from 'styled-components';
import { Button } from 'styles/layout';

export const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8vh;
  padding: 1rem 0;
  margin: 2rem 0;

  input,
  button {
    padding: 0.5rem 0.75rem;
    font-size: 1.25rem;
    border-radius: 5px;
    transition: all 0.3s ease;
  }
`;

export const SearchInput = styled.input`
  border: 1px solid #1f0052;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const SearchButton = styled(Button)`
  margin-left: 1rem;
  font-weight: bold;

  &:hover {
    background-color: #61468a;
  }
`;
