import Link from "next/link";
import SectionTitle from "../SectionTitle";
import { ProjectsItem } from "./ProjectsItem";
import { Container } from "./styles";

export function Projects() {
  return (
    <Container>
      <SectionTitle title="#Meus Projetos" />
      <section>
        <ProjectsItem
          title="Desafio concluído"
          type="Coffe-Delivery"
          slug="https://projeto-coffe-delivery.vercel.app"
          img="https://github.com/LidianeDiniz/Projeto-Coffe-Delivery/blob/main/src/assets/screenchot-coffee.png?raw=true"
        />
        <ProjectsItem
          title="Frontend/Backend"
          type="Food Explorer"
          slug="https://frontend-food-explorer.vercel.app"
          img="https://github.com/LidianeDiniz/Frontend_FoodExplorer/blob/main/src/assets/imgPrincipal.png?raw=true"
        />

        <ProjectsItem
          title="Projeto em aula"
          type="Ignite-Shopping"
          slug="https://ignite-shop-azure.vercel.app/"
          img="https://camo.githubusercontent.com/a8f4f784380166e9f571d224437c85807200e0d9ca5958054036030b8cf81b6e/68747470733a2f2f696d6775722e636f6d2f687944733055302e706e67"
        />

        <ProjectsItem
          title="Desafio Ingite"
          type="Ignite Call/ Projeto em produção"
          slug="https://ignite-call-lidianediniz.vercel.app/"
          img="https://ignite-call-lidianediniz.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapp-preview.786e5de9.png&w=750&q=100"
        />

        <ProjectsItem
          title="Trabalho voluntário"
          type="Site produtoras de café (AmeCafe Mantiqueira)"
          slug="https://amecafemantiqueira.com.br/"
          img="https://amecafemantiqueira.com.br/wp-content/uploads/2021/06/top-imagem-amecafe-2.png"
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

export default Projects;
