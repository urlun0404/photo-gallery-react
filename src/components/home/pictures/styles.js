import styled from 'styled-components';
import { Button } from 'styles/layout';

export const Container = styled.section`
  width: 100%;
  padding: 0.75rem 0.5rem;
`;

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

export const LoadMoreButton = styled(Button)`
  display: block;
  margin: 1rem auto;
  font-size: 1.35rem;
`;
