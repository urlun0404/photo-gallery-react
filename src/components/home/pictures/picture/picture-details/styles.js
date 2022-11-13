import styled from 'styled-components';
import * as L from 'styles/layout';

export const Portal = styled(L.Portal)`
  overflow: hidden;
`;

export const Dialog = styled(L.Dialog)`
  position: absolute;
  z-index: 100;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  min-width: 300px;
  width: 85%;
  height: 90%;
  padding: 40px 10px 20px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  overflow-x: hidden;

  #close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    display: inline-block;
    width: 25px;
    height: 25px;
    padding: 0;
    background-color: ${(props) => props.theme.colors.black10};
    transition: all ease 0.2s;

    svg {
      width: 100%;
      height: 100%;
      line-height: 1em;
      color: ${(props) => props.theme.themes.light.$secondaryDark};
    }

    &:hover {
      color: ${(props) => props.theme.colors.black};
      background-color: ${(props) => props.theme.colors.black30};
      transform: scale(1.25);
    }
  }
`;

export const CloseCircleButton = styled.button`
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.white};
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (max-width: ${(props) => props.theme.breakpoints.$md}) {
    flex-direction: column;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  max-width: 50%;
  margin: 0.75rem 0.5rem;

  &#image {
    justify-content: center;
    width: 100%;
    height: 100%;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.$md}) {
    width: 80%;
    max-width: unset;
    padding: 0 1rem;
  }
`;

export const Line = styled.div`
  width: 60%;
  height: 2px;
  margin: 0.5rem 0 0.75rem;
  background-color: ${(props) => props.theme.colors.black50};
  border-radius: 1px;
`;

export const Info = styled.section`
  width: 100%;

  ul > li {
    margin: 0.5rem 0 1rem;
    font-size: ${(props) => props.theme.fontSizes.$md};

    &:last-child {
      text-align: center;
    }

    span,
    .tag {
      padding: 0.25rem;
    }

    .tag {
      color: ${(props) => props.theme.themes.light.$secondary};
    }

    a.check-link {
      margin-top: 2rem;
      font-size: ${(props) => props.theme.fontSizes.$sm};
      text-decoration: underline;
      color: ${(props) => props.theme.themes.light.$primary};
      cursor: pointer;

      &:hover {
        color: ${(props) => props.theme.themes.light.$primaryHover};
      }
    }
  }

  &#info-photographer {
    ul > li {
      text-align: center;
    }

    #photographer {
      width: 150px;
      margin: 0.75rem auto;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
        object-position: center;
      }
    }
  }
`;

export const InfoTitle = styled.h5`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.themes.light.$secondary};
`;

export const Overlay = styled(L.Overlay)`
  z-index: 1;
`;
