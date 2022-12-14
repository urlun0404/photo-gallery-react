import styled from 'styled-components';
import { ThemeButton } from 'styles/layout';

export const Pictures = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  .picture {
    flex: 1 1 350px;
  }
`;

export const SelectPerPageNum = styled.div`
  padding: 0.25rem 0.75rem;
  text-align: right;

  label {
    font-size: ${(props) => props.theme.fontSizes.$xs};
    margin: 0 0.5rem;
  }

  select {
    width: 100px;
    background-color: ${(props) => props.theme.themes.light.$secondaryLight};
    border: 1.5px solid ${(props) => props.theme.themes.light.$secondary};
    border-radius: 5px;
  }
`;

export const LoadMoreButton = styled(ThemeButton)`
  display: block;
  margin: 1rem auto;
  font-size: 1.35rem;
`;
