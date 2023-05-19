import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 5rem;
  justify-content: center;
  flex-direction: row-reverse;
  flex-wrap: wrap;

  @media (max-width: 1450px) {
    > img {
      width: 18rem;
    }
  }

  @media (max-width: 980px) {
    > img {
      width: 15rem;
    }
  }

  @media (max-width: 680px) {
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    > img {
      width: 15rem;
    }
  }
`;

export const ProfileImage = styled.img`
  width: 15rem;
  height: 10rem;
  border-radius: 15px;

  display: flex;
  position: relative;
  background-image: none;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: auto;

  .ContainerBox {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 2rem;

    margin-bottom: 3rem;
    margin-top: 3rem;

    @media (max-width: 680px) {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin-bottom: auto;
    }

    @media (max-width: 480px) {
      > img {
        display: none;
      }
    }

    > section {
      @media (max-width: 980px) {
        h1 {
          font-size: 2rem;
        }

        h2 {
          font-size: 1.5rem;
        }
      }

      @media (max-width: 680px) {
        h1 {
          font-size: 1.5rem;
        }

        h2 {
          font-size: 1.3rem;
        }
      }
    }
  }
`;

export const TextDescription = styled.div`
  height: auto;

  width: 100%;
  border-radius: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: ${({ theme }) => theme.gradient_secondary};
  margin-top: 2rem;

  border: 10px solid ${({ theme }) => theme.secondary};
  transition: 1s;

  &:hover {
    border: 12px solid ${({ theme }) => theme.text_secondary};
    border-radius: 20px;
    margin-top: 3rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.textlight};
  margin-top: 3rem;
  margin-bottom: 3rem;
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 980px) {
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  @media (max-width: 680px) {
    font-size: 0.5rem;
  }
`;
