import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  margin-top: 10rem;
  border-top: 1px solid ${({ theme }) => theme.backgroundLight};

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: none;
      border: none;
      color: ${({ theme }) => theme.footer_background};
      text-transform: uppercase;
      font-weight: 300;
      font-size: 1.2rem;

      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
      transition: 0.5s;

      &:hover {
        border-bottom: 2px solid ${({ theme }) => theme.secondary};
        border-radius: 6px;
      }

      &:hover svg {
        color: ${({ theme }) => darken(0.4, theme.secondary)};
        font-size: 1.5rem;
      }

      @media (max-width: 450px){
        gap:30rem;
      }
    }

    > section {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
      color: ${({ theme }) => theme.secondary};

      font-size: 1.5rem;
      transition: 0.5s;

      

      svg {
        width: 2rem;
        height: 2rem;
        color: ${({ theme }) => theme.text};
        transition: 0ms.5s;
        cursor: pointer;

        &:hover {
          font-size: 1.6rem;
          color: ${({ theme }) => darken(0.4, theme.secondary)};
          border-bottom: 2px solid ${({ theme }) => theme.secondary};
          border-radius: 4px;
        }
      }

     
    }

    @media (max-width: 450px) {
     
      button {
        font-size: 0.9rem;
      }
      > section {
        gap: 0.5rem;

        svg {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }
`;
