import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 5rem;

  > img {
    width: 40rem;
    flex: 1;
    border-right: 10px solid ${({ theme }) => theme.primary};
    border-radius: 50%;

    //border: 10px solid ${({ theme }) => theme.primary};
    background-color: transparent;

    > div {
      flex: 4;
    }
  }

  @media (max-width: 1450px) {
    > img {
      width: 30rem;
    }
  }

  @media (max-width: 1000px) {
    > img {
      width: 20rem;
    }
  }

  @media (max-width: 680px) {
    flex-direction: column-reverse;
    display: flex;
    align-items: center;

    > div {
      width: 100%;
    }
  }
`;

export const TextContainer = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 2rem;

  h1 {
    font-size: 8rem;
    color: ${({ theme }) => theme.primary};
  }

  h2 {
    font-size: 3rem;
    font-weight: 400;
    color: ${({ theme }) => theme.secondary};
  }

  @media (max-width: 1450px) {
    h1 {
      font-size: 5rem;
    }

    h2 {
      font-size: 2rem;
    }
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 3rem;
    }

    h2 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 680px) {
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 0.9rem;
    }
  }
`;

export const InfoContainer = styled.span`
  color: #179bd7;
`;

export const InfoItem = styled.p`
  color: #83b655;
  width: 50;
  height: 5rem;
  padding: 0 auto;
  background: linear-gradient(45deg, #293a4a, #151d25);
  margin-bottom: 0.5rem;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 1rem;

  &:hover {
    background: linear-gradient(45deg, #21729b, #293a4a);
  }
`;
