import styled from 'styled-components';


export const ProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: auto;

  .container {
    display: flex;
    margin-top: auto;
    justify-content: center;
    width: 100%;
    margin-top: 2rem;
    padding: 0 auto;

    div.Title {
      h1 {
        color: ${({ theme }) => theme.primary};
        font-size: 2rem;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
      }

      h2 {
        color: ${({ theme }) => theme.textlight};
        font-size: 1.5rem;
        font-weight: 300;
      }
    }

    justify-content: center;
    flex-direction: column;
  }
`;

export const ProjectsItensContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  margin-top: 5rem;
`;
