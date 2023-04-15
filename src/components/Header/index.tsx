import NavLink from './NavLink';
import { Container } from './styles';

function Header() {
  return (
    <Container>
      <ul>
        <NavLink title="início" path="/" />
        <NavLink title="Projetos" path="/projetos" />
        <NavLink title="Sobre" path="/sobre" />
        <NavLink title="Contatos" path="/contatos" />
      </ul>
    </Container>
  );
}

export default Header;
