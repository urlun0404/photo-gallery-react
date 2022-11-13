import styled from 'styled-components';

export const About = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 100%;
  text-align: center;
`;

export const Article = styled.article`
  align-items: center;
  min-height: 300px;
  margin: 1rem 0;
`;

export const Title = styled.h2`
  margin: 1rem 0 0.5rem;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.themes.light.$secondaryDark};
`;

export const Container = styled.div`
  width: 100%;
  padding: 0 1.5rem;
  margin: 1rem 0 2rem;

  @media (max-width: ${(props) => props.theme.breakpoints.$md}) {
    padding: 0 0.25rem;
  }

  img {
    width: 70%;

    @media (max-width: ${(props) => props.theme.breakpoints.$xl}) {
      width: 85%;
    }

    @media (max-width: ${(props) => props.theme.breakpoints.$md}) {
      width: 95%;
    }
  }
`;

export const SubTitle = styled.h5`
  margin: 0.75rem 0;
  font-size: ${(props) => props.theme.fontSizes.$lg};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.themes.light.$secondary};
`;

export const Text = styled.p``;

export const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: 2rem 0;

  a {
    width: 48px;
    height: 48px;
    padding: 0.5rem;
    margin: 0.25rem 0.5rem;
    background-color: ${(props) => props.theme.colors.black10};
    border-radius: 50%;

    svg {
      width: 100%;
      height: 100%;
      color: ${(props) => props.theme.themes.light.$secondaryDark};
      transition: all ease-in 0.15s;

      &:hover {
        color: ${(props) => props.theme.themes.light.$primaryLight};
      }
    }
  }
`;
