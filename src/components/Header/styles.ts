import { lighten } from 'polished';
import styled from 'styled-components';

interface NaviLinkProps {
  isActive: boolean;
}

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  border-bottom: 1px solid ${({ theme }) => theme.backgroundLight};

  
  ul {
    display: flex;
    gap: 2rem;
    align-items: center;

    
  }
`;

export const NavLinkContainer = styled.li<NaviLinkProps>`
  a {
    text-transform: uppercase;
    color: ${props =>
      props.isActive ? props.theme.primary : props.theme.textlight};
    transition: 0.5s;

    &:hover {
      color: ${props =>
        props.isActive
          ? lighten(0.2, props.theme.primary)
          : lighten(0.2, props.theme.textlight)};
      border-bottom: 1px solid ${({ theme }) => theme.primary};
    }

    @media (max-width: 480px) {
    width: 100%;
    display: contents;
    
  }

  }
`;
