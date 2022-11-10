import styled from 'styled-components';
import { Button } from 'styles/layout';

export const Pictures = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;

  .picture {
    flex: 1 1 350px;
  }
`;

export const LoadMoreButton = styled(Button)`
  margin: 1rem 0;
  font-size: 1.35rem;
`;
