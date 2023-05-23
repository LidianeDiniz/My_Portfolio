import styled from "styled-components";

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 680px) {
    > header {
      width: auto;
      ul li {
        a {
          font-size: 0.6rem;
        }
      }
    }
    div.LinkProjects {
      flex-direction: column;

      height: auto;
      gap: 1rem;
      margin-top: 0.5rem;
      margin-bottom: 5rem;
    }
  }

  div.Title {
    > section {
      margin-bottom: 3rem;
    }
    h1 {
      color: ${({ theme }) => theme.primary};
      font-size: 2rem;
      font-family: "Montserrat", sans-serif;
      font-weight: 600;
      margin-top: 3rem;

      @media (max-width: 680px) {
        font-size: 1.2rem;
      }
    }

    h2 {
      color: ${({ theme }) => theme.textlight};
      font-size: 1.5rem;
      font-weight: 300;

      @media (max-width: 680px) {
        font-size: 0.8rem;
      }
    }
  }
`;

export const ProjectsItensContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  margin-top: 5rem;

  @media (max-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
  }

  @media (max-width: 980px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
  }

  @media (max-width: 680px) {
    display: inline-block;
    gap: 1.5rem;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;
