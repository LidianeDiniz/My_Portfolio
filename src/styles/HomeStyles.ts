import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    width: 100%;
    display: inline-grid;
    
  }

 
  > .main {
    display: flex;
    flex-direction: column;

    gap: 8rem;
  }
`;
