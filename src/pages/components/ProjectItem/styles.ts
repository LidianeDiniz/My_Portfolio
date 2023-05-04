import styled from 'styled-components';

interface ContainerProps {
  imgUrl: string;
}

export const Container = styled.div<ContainerProps>`
  > a {
    position: relative;
    width: 100%;
    background: url(${props => props.imgUrl}) no-repeat center;
    background-size: cover;
    height: 10rem;
    padding: 1.5rem;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.border};
    transition: 0.5s;
    cursor: pointer;
    overflow: hidden;

    &:hover {
      border: 1px solid ${({ theme }) => theme.primary};

      > div.overlay {
        opacity: 0.5;
      }
    }

    > section {
      z-index: 2;
      h1 {
        color: ${({ theme }) => theme.primary};
        font-size: 1.5rem;
      }

      h2 {
        color: ${({ theme }) => theme.textlight};
        font-size: 1rem;
        font-weight: 300;
      }
    }

    > div.overlay {
      left: 0;
      bottom: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.gradient_secondary};
      opacity: 0.7;
      transition: 0.5s;
    }
  }

  > div button {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row-reverse;
    width: 100%;
    height: 2rem;
    gap: 1rem;

    background-color: ${({ theme }) => theme.background};

    color: ${({ theme }) => theme.textlight};
    font-size: 0.8rem;
    border: none;
    border-radius: 6px;
    bottom: 1rem;
    right: 1rem;
    margin: 0;
    transition: 0.5s;

    svg path {
      fill: ${({ theme }) => theme.textlight};
    }

    &:hover {
      background-color: ${({ theme }) => theme.text_secondary};
    }

    > div button svg {
      color: ${({ theme }) => theme.textlight};

      gap: 0.5rem;

      &:hover {
        color: ${({ theme }) => theme.primary};

        font-size: 0.7rem;
      }
    }
  }

  &:hover {
    > section div.text {
      left: 2rem;
    }
  }
`;