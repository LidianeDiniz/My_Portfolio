import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  background: ${({ theme }) => theme.background};
  padding: 2rem;
  border-radius: 8px;
`;

export const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
`;

export const Subtitle = styled.h2`
  font-size: 24px;
  color: ${({ theme }) => theme.primary};
`;

export const InfoContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.textlight};
`;

export const Skills = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.textlight};
`;
