import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  > section {
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 8rem;

    gap: 8rem;

    @media (max-width: 980px) {
      gap: 5rem;
    }

    @media (max-width: 780px) {
      gap: 3rem;
      flex-wrap: wrap;
      margin-top: 5rem;
    }
  }
`;

export const SkillItensContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;

  p {
    color: ${({ theme }) => theme.secondary};
    font-weight: 300;
    font-size: 1.5rem;
    text-transform: uppercase;
  }

  svg {
    width: 6.5rem;
    height: 6.5rem;
    color: ${({ theme }) => theme.textlight};
    transition: 2s;
  }

  &:hover {
    svg {
      color: ${({ theme }) => darken(0.4, theme.secondary)};
      transform: scale(0.95);
    }
  }

  @media (max-width: 980px) {
    p {
      font-size: 1rem;
    }
    svg {
      width: 5rem;
      height: 5rem;
    }
  }
`;
