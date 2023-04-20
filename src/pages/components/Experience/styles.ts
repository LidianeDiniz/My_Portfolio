import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;

  > section {
    width: 100%;
    margin-top: 7rem;
    display: flex;
    gap: 1.5rem;

    padding-bottom: 8rem;
    border-bottom: 10px solid ${({ theme }) => theme.primary};

    @media (max-width: 980px) {
      gap: 1rem;
    }

    @media (max-width: 680px) {
      flex-direction: column;
      margin-top: 5rem;
      gap: 2rem;
    }
  }
`;

export const ItemContainer = styled.div`
  > div {
    background: ${({ theme }) => theme.gradient_secondary};
    padding: 1rem;
    padding-top: 2.5rem;
    height: 20rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    transition: 0.5s;

    h1 {
      color: ${({ theme }) => theme.text_secondary};

      font-size: 2rem;
      margin-bottom: 1.5rem;
    }

    h2 {
      color: ${({ theme }) => theme.primary};

      font-size: 1.5rem;
      font-weight: 300;
      margin-bottom: 1.5rem;
    }

    p {
      color: ${({ theme }) => theme.textlight};

      font-size: 1.5rem;
      font-weight: 300;
      margin-bottom: 1.5rem;
    }
  }

  &:hover > div {
    filter: brightness(1.3);
    transform: translateY(-20px);
  }

  &:nth-child(even) > div {
    margin-top: 4rem;
  }

  @media (max-width: 980px) {
    > div {
      height: 15rem;
      padding-top: 1.5rem;

      h1 {
        font-size: 1.2rem;
        margin-bottom: 1rem;
      }

      h2 {
        font-size: 1rem;
      }
      p {
        font-size: 0.9rem;
      }
    }

    @media (max-width: 680px) {
      &:nth-child(even) > div {
        margin-top: 0;
      }

      &:hover > div {
        transform: translateY(0);
      }
      > div {
        height: auto;
        padding: 2rem;

        h1 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        h2 {
          font-size: 1.5rem;
        }
        p {
          font-size: 1rem;
        }
      }
    }
  }
`;
