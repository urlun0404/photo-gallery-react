import styled, { css } from 'styled-components';
import { ThemeButton } from 'styles/layout';

export const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 1.5rem 0;
  transition: all ease-in 0.15s;

  #search-input,
  #search-btn,
  #clear-input-btn {
    border-radius: 6px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.$sm}) {
    flex-direction: column;
  }
`;

export const ClearInputButtonCss = css`
  position: absolute;
  right: 2.5px;
  height: 70%;
  margin: 0.25rem;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.black30};
  background-color: ${(props) => props.theme.colors.white50};

  & > svg {
    width: 100%;
    height: 100%;
    line-height: 1em;
  }

  &:hover {
    color: ${(props) => props.theme.colors.black50};
    background-color: ${(props) => props.theme.colors.black10};
  }
`;

export const SearchInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 300px;
  max-width: 80%;

  #search-input {
    width: 100%;
    padding: 0.5rem;
    font-size: ${(props) => props.theme.fontSizes.$md};
    border: 1.5px solid ${(props) => props.theme.themes.light.$secondaryLight};

    &[placeholder] {
      font-size: ${(props) => props.theme.fontSizes.$xs};
    }
  }

  #search-input:hover {
    outline: ${(props) => props.theme.themes.light.$primaryHover};
  }

  #search-input:focus {
    border-color: ${(props) => props.theme.themes.light.$primaryHover};
    background-color: ${(props) => props.theme.themes.light.$primaryFocusLight};

    & + #search-btn {
      background-color: ${(props) => props.theme.themes.light.$primary};
    }

    &.isInvalid {
      border-color: ${(props) => props.theme.themes.light.$error};
      background-color: ${(props) => props.theme.themes.light.$errorLight};

      & + #search-btn {
        background-color: ${(props) => props.theme.themes.light.$secondary};
      }
    }
  }

  #clear-input-btn {
    ${ClearInputButtonCss}
  }
`;

export const SearchButton = styled(ThemeButton)`
  padding: 0.5rem 0.75rem;
  margin: 0.5rem 0.75rem;
  font-size: ${(props) => props.theme.fontSizes.$sm};
  font-weight: bold;
`;
