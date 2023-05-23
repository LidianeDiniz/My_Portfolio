import styled from "styled-components";

export const Container = styled.div`

  width: 100%;
  display: flex;
  align-items: center;
  margin: auto;
  justify-content: center;
  flex-direction: column;
  padding: 0rem;

 >section {
      h1{
        display: flex;
      justify-content: center;
      align-items: center;
    margin-left: 5rem;
      
  @media (max-width:450px){
    h1{
        font-size: 3rem;
        color: red;
    }
  }
}}
  
  > section .SkillTypes{
    width: auto;

    svg {
    width: 2.5rem;
    height: 2.5rem;
    color: ${({ theme }) => theme.textlight};
    transition: 2s;

    &:hover {
     
      color: ${({ theme }) => theme.text};
      transform: scale(0.95);
    
    }
  }

 

  }

  @media (max-width: 1450px) {
    width: 100%;
  display: flex;
  align-items: center;
  margin: auto;
    > img {
      width: 18rem;
    }
  }

  @media (max-width: 980px) {
    > img {
      width: 15rem;
    }
  }

  @media (max-width: 680px) {
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1rem;

   > header{
   
    width: auto;
          ul li{
            a {
              font-size: 0.6rem;
            }
          }
        

    @media (max-width: 380px) {

      width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.backgroundLight};

  ul {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  li{
    font-size: 0.9rem;
  }
    }
    }
    
   

    
   }
  
`;

export const ProfileImage = styled.img`
  width: 15rem;
  height: 10rem;
  border-radius: 15px;

  display: flex;
  position: relative;
  background-image: none;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 5rem;

  

  

  .ContainerBox {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 2rem;

    margin-bottom: 3rem;
    margin-top: 3rem;

    @media (max-width: 680px) {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin-bottom: auto;
    }

    @media (max-width: 480px) {

      
      > img {
        display: none;
      }
    }

    > section {
      @media (max-width: 980px) {
        h1 {
          font-size: 2rem;
        }

        h2 {
          font-size: 1.5rem;
        }
      }

      @media (max-width: 680px) {
        h1 {
          font-size: 1.5rem;
        }

        h2 {
          font-size: 1.3rem;
        }
      }

      @media (max-width: 480px) {
        h1 {
          font-size: 1rem;
        }

        h2 {
          font-size: 0.8rem;
        }
      }
    }
  }
`;

export const TextDescription = styled.div`
  

  width: 100%;
  border-radius: 18px;
  display: flex;
 
  align-items: center;
 
  background: ${({ theme }) => theme.gradient_secondary};
  margin-top: 2rem;

  border: 10px solid ${({ theme }) => theme.secondary};
  transition: 1s;

  @media (max-width: 680px) {
  
    border: 2px solid ${({ theme }) => theme.secondary};
   
  }

  &:hover {
    border: 12px solid ${({ theme }) => theme.text_secondary};
    border-radius: 20px;
    margin-top: 3rem;
  }
`;

export const Subtitle = styled.h2`
  
  color: ${({ theme }) => theme.textlight};
 
  transition: 0.5s;

  >h2{
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100;
    height: auto;
    padding: 1.5rem;

    @media (max-width: 680px) {
    font-size: 0.8rem;
    width: auto;
    
  }

  @media (max-width: 980px) {
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  }
 

 
 
`;
