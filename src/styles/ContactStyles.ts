import styled from "styled-components";

export const Contents = styled.div`

@media (max-width:980px){

  >header{
          ul li{
            a {
              font-size: 0.8rem;
            }
          }
        }
       
}
 
 @media (max-width:680px){
  >header{
    width: auto;
          ul li{
            a {
              font-size: 0.6rem;
            }
          }
        }

 }

 
`;

export const Container = styled.div`
  width: 100%;
  display: flex;

  align-items: center;

  justify-content: center;
  padding: 2rem;
  flex-direction: column;
  color: ${({ theme }) => theme.backgroundLight};
  margin-top: 3rem;

  @media (max-width: 980px) {
    display: flex;
    flex-direction: space-between;
    margin-top: 1rem;

    > section {
      h1 {
        font-size: 1.8rem;
      }

      h2 {
        font-size: 1.2rem;
      }
    }
  }

  @media (max-width: 680px) {
    display: flex;
    padding: 2rem;
    justify-content: center;
    align-items: center;
  }

  > section {
    h1 {
      font-size: 1.3rem;
    }

    h2 {
      font-size: 1rem;
    }
  }

  > form {
    width: 100%;
    margin-bottom: 5rem;

    @media (max-width: 1200px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 5rem;
    }

    @media (max-width: 680px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 auto;
    }
  }

  ul {
    width: 100%;

    display: flex;

    align-items: center;
    justify-content: flex-end;
    gap: 5rem;
    text-decoration: none;
    cursor: pointer;
    margin-top: 5rem;
    margin-bottom: -5rem;
    font-size: 2rem;

    @media (max-width: 680px) {
      display: flex;

      justify-content: center;
      align-items: center;
    }
  }

  > footer {
    width: 100%;
    margin-bottom: 1rem;
    display: flex;

    @media (max-width: 680px) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 5rem;

      button {
        font-size: 0.8rem;
      }
    }

    section {
      svg {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  display: flex;

  align-items: center;
  justify-content: flex-end;
  gap: 5rem;
  text-decoration: none;
  cursor: pointer;
  margin-top: 5rem;

  font-size: 2rem;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.secondary};

  gap: 1rem;
  transition: 0.5s;

  &:hover {
    color: ${({ theme }) => theme.primary};
    gap: 0.5rem;
    font-size: 1.9rem;
  }

  @media (max-width: 1200px) {
    display: flex;

    justify-content: space-between;
    font-size: 1.5rem;
  }

  @media (max-width: 980px) {
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
  }

  @media (max-width: 680px) {
    display: flex;
    justify-content: flex-end;
    font-size: 1.2rem;
    margin-top: 1rem;
    gap: 1rem;

    padding: 0 auto;
  }
`;

