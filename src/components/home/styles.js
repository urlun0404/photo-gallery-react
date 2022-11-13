import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100%;
  padding: 0.75rem 0.5rem;
`;

export const Loading = styled.h3`
  color: ${(props) => props.theme.themes.light.$primary};
`;
