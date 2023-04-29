import Link from 'next/Link';
import SectionTitle from '../SectionTitle';
import { ProjectsItem } from './ProjectsItem';
import { Container } from './styles';

export function Projects() {
  return (
    <Container>
      <SectionTitle title="#Meus Projetos" />
      <section>
        <ProjectsItem
          title="Projeto 01"
          type="Coffe Delivery"
          img="https://github.com/LidianeDiniz/Projeto-Coffe-Delivery/blob/main/src/assets/screenchot-coffee.png?raw=true"
          slug="https://projeto-coffe-delivery.vercel.app"
        />
        <ProjectsItem
          title="Projeto 02"
          type="Carrinho de compras"
          img="https://user-images.githubusercontent.com/80908772/200186782-e68d1a7a-f5b9-4ed8-8409-00dc994e81da.png"
          slug="https://github.com/LidianeDiniz/Desafio-01-carrinho-de-compras"
        />
        <ProjectsItem
          title="Projeto Coffee Delivery"
          type="Website"
          img="https://github.com/LidianeDiniz/Projeto-Coffe-Delivery/blob/main/src/assets/screenchot-coffee.png?raw=true"
          slug="https://projeto-coffe-delivery.vercel.app"
        />
        <ProjectsItem
          title="Projeto Carrinhos de compras "
          type="Website"
          img="https://user-images.githubusercontent.com/80908772/200186782-e68d1a7a-f5b9-4ed8-8409-00dc994e81da.png"
          slug="https://github.com/LidianeDiniz/Desafio-01-carrinho-de-compras"
        />
      </section>
      <button type="button">
        <Link href="/ProjectsPages">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}
