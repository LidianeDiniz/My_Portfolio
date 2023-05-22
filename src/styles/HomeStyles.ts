import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  @media (max-width:680px){
    display: flex;
    justify-content: center;
    align-items: center;
  }
 
  > main {
    display: flex;
    flex-direction: column;

    gap: 8rem;
  }
`;
