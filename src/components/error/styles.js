import styled from 'styled-components';

export const Error = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-row-gap: 10px;
  justify-items: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

export const SubTitle = styled.h5`
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

const imageSize = '48px';

export const Image = styled.figure`
  width: ${imageSize};
  height: ${imageSize};

  & > svg {
    width: 100%;
    height: 100%;
  }
`;

export const Text = styled.p`
  grid-column: 1/3;
  font-weight: ${(props) => props.theme.fontSizes.$sm};
  color: #8d8d8d;
`;
