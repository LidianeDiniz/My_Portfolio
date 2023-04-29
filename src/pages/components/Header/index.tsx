import NavLink from './NavLink';
import { Container } from './styles';

function Header() {
  return (
    <Container>
      <ul>
        <NavLink title="início" path="/" />
        <NavLink title="Projetos" path="/ProjectsPages" />
        <NavLink title="Sobre" path="/about" />
        <NavLink title="Contatos" path="/Contact" />
      </ul>
    </Container>
  );
}

export default Header;
