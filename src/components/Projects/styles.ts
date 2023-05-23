import { darken } from "polished";
import styled from "styled-components";

interface ProjectProps {
  imgUrl: string;
}

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;

 

  > section {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;

    @media (max-width: 980px) {
      gap: 2rem;
    }
  }

  > button {
    background: ${({ theme }) => theme.text_secondary};
    padding: 0.8rem 3rem;
    border-radius: 8px;
    border: none;
    transition: 0.5s;

    &:hover {
      background: ${({ theme }) => darken(0.05, theme.primary)};
    }

    a {
      text-transform: uppercase;
      color: ${({ theme }) => theme.white};
      font-size: 1.5rem;
      font-weight: 300;
    }

    @media (max-width: 500px) {
      padding: 1rem;
      font-size: 1rem;
    }

    @media (max-width: 400px) {
      padding: 0.3rem;
      font-size: 0.5rem;
    }
  }
`;

export const ProjectContainer = styled.div<ProjectProps>`
  width: 100%;
  display: flex;
  height: 25rem;
  align-items: flex-end;
  position: relative;

  &:hover {
    > section {
      > div.text {
        right: -15rem;
      }

      > div.overlay {
        opacity: 0.4;
      }
    }

    > button a {
      color: ${({ theme }) => theme.primary};
    }
  }

  > button {
    height: 4rem;
    margin: 0 0 3rem 5rem;
    background: none;
    border: none;

    a {
      color: #fff;
      font-size: 2rem;
      font-weight: 300;
      display: flex;
      align-items: center;
      gap: 0.8rem;
      transition: 0.5s;
    }
  }

  > section {
    width: 50rem;
    height: 100%;
    background: url(${(props) => props.imgUrl}) no-repeat center;
    background-size: cover;
    position: relative;

    > div.overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.gradient_secondary};
      opacity: 0.75;
      transition: 0.5s;
    }

    > div.text {
      position: absolute;
      top: 3rem;
      right: -8rem;
      transition: 0ms.5s;
      width: fit-content;

      h1 {
        color: ${({ theme }) => theme.primary};
        font-size: 2.5rem;
        text-shadow: -4px 5px 22px #11172b;
      }

      h2 {
        color: ${({ theme }) => theme.textlight};
        font-weight: 300;
        font-size: 2rem;
        text-shadow: -4px 5px 22px #11172b;
      }
    }
  }

  &:nth-child(even) {
    flex-direction: row-reverse;

    > button {
      margin: 0 5rem 3rem 0;
    }

    > section > div.text {
      text-align: right;
      right: 0;
      left: -10rem;
    }

    &:hover {
      > section > div.text {
        left: -22rem;
      }
    }
  }

  @media (max-width: 1380px) {
    > section {
      width: 40rem;
    }
  }

  @media (max-width: 980px) {
    > section {
      width: 100%;

      > div.text {
        left: 1rem;
        top: 1rem;
      }
    }

    > button {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      margin: 0;
    }

    &:nth-child(even) {
      flex-direction: row;

      > section {
        width: 100%;

        > div.text {
          left: 1rem;
          top: 1rem;
          text-align: left;
        }
      }

      > button {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        margin: 0;
      }

      &:hover {
        > section div.text {
          left: 2rem;
        }
      }
    }
  }

  @media (max-width: 680px) {
    height: 17rem;

    > button {
      height: auto;

      a {
        font-size: 1.5rem;
        gap: 0.5rem;
      }
    }

    > section {
      width: 100%;

      > div.text {
        h1 {
          font-size: 1.5rem;
        }

        h2 {
          font-size: 1rem;
        }
      }

      > div.overlay {
        opacity: 0.4;
      }
    }
  }
`;
