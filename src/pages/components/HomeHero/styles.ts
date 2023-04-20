import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  width: 100%;
  gap: 2rem;
  margin-top: 5rem;

  > img {
    margin-bottom: 0.5rem;
    width: 40rem;

    border-right: 10px solid ${({ theme }) => theme.primary};
    border-radius: 50%;

    //border: 10px solid ${({ theme }) => theme.primary};
  }

  @media (max-width: 1450px) {
    > img {
      width: 27rem;
    }
  }

  @media (max-width: 980px) {
    > img {
      width: 22rem;
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
      font-size: 1rem;
    }
  }
`;

export const InfoContainer = styled.span`
  color: #179bd7;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-self: self-start;
`;

export const InfoItem = styled.p`
  font-size: 'JetBrains Mono', monospace;
  font-weight: 300;
  color: ${({ theme }) => theme.text_secondary};
  width: 40rem;
  height: 10rem;
  padding: 1rem;
  background: ${({ theme }) => theme.gradient_secondary};
  margin-bottom: 0.5rem;
  align-self: flex-start;
  transition: 1s;

  font-size: 1.5rem;

  > span {
    font-size: 'JetBrains Mono', monospace;
    font-weight: 300;
    color: ${({ theme }) => theme.secondary};

    display: flex;
    flex-direction: column;
  }

  &:hover {
    background: linear-gradient(45deg, #21729b, #293a4a);
  }

  &:last-child {
    margin-left: 10rem;
    align-self: flex-end;
  }

  @media (max-width: 1450px) {
    width: 100%;
    padding: 0.5rem;

    font-size: 1.5rem;
  }
  @media (max-width: 980px) {
    width: 100%;
    font-size: 1.3rem;
  }

  @media (max-width: 680px) {
    width: 100%;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
