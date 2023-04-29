import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  color: ${({ theme }) => theme.backgroundLight};
  margin-top: 10rem;

  ul {
    display: flex;
    padding: 0 auto;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    gap: 2rem;
    text-decoration: none;
    cursor: pointer;

    font-size: 2rem;

    li a {
      color: ${({ theme }) => theme.secondary};
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      transition: 0.5s;

      &:hover {
        color: ${({ theme }) => theme.textlight};
        gap: 0.5rem;
        font-size: 1.9rem;
      }
    }

    svg {
      width: 2rem;
      height: 2rem;
    }
  }
`;
