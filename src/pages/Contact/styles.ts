import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem;
  flex-direction: column;
  color: ${({ theme }) => theme.backgroundLight};
  margin-top: 10rem;

  @media (max-width: 680px) {
    grid-column: 1;
  }

  > form {
    width: 100%;
    margin-bottom: 5rem;
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
`;
