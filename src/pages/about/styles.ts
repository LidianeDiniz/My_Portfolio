import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 5rem;
  width: 100%;
  display: flex;

  justify-content: center;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  align-items: flex-start;

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

    > img {
      width: 15rem;
    }
  }
`;

export const ProfileImage = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  display: flex;
  position: relative;
  background-image: none;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  padding: 3rem;
`;

export const TextDescription = styled.div`
  height: auto;
  background: ${({ theme }) => theme.gradient_secondary};
  width: 100%;
  border-radius: 18px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
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
  font-size: 15px;
  color: ${({ theme }) => theme.textlight};
  margin-top: 3rem;
  margin-bottom: 3rem;
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;
