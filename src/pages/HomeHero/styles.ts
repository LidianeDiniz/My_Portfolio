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
    border-radius: 50% 0 50% 50%;
    border: 10px solid ${({ theme }) => theme.primary};
  }

  > div {
    flex: 4;
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
`;
