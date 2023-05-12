import Head from 'next/head';
import { ProjectsContainer } from '../../styles/ProjectsStyles';
import Header from '../components/Header';
import { ProjectItem } from '../components/ProjectItem';

function ProjectsPage() {
  return (
    <ProjectsContainer>
      <Head>
        <title>Meus projetos</title>
      </Head>
      <Header />
      <main className="container">
        <ProjectItem
          title="Desafio concluído"
          type="Coffe-Delivery"
          slug="https://projeto-coffe-delivery.vercel.app"
          imgUrl="https://github.com/LidianeDiniz/Projeto-Coffe-Delivery/blob/main/src/assets/screenchot-coffee.png?raw=true"
          repUrl=""
        />

        <ProjectItem
          title="Projeto em aula"
          type="Ignite-Shopping"
          slug="https://ignite-shop-azure.vercel.app/"
          imgUrl="https://camo.githubusercontent.com/a8f4f784380166e9f571d224437c85807200e0d9ca5958054036030b8cf81b6e/68747470733a2f2f696d6775722e636f6d2f687944733055302e706e67"
          repUrl="https://github.com/LidianeDiniz/Ignite-Shop"
        />

        <ProjectItem
          title="Desafio final Explorer Frontend/Backend"
          type="Food Explorer"
          slug="https://frontend-food-explorer.vercel.app"
          repUrl="https://github.com/LidianeDiniz/Frontend_FoodExplorer"
          imgUrl="https://github.com/LidianeDiniz/Frontend_FoodExplorer/blob/main/src/assets/imgPrincipal.png?raw=true"
        />

        <ProjectItem
          title="Desafio Ingite"
          type="Ignite Call/ Projeto em produção"
          slug="https://ignite-call-lidianediniz.vercel.app/"
          repUrl="https://github.com/LidianeDiniz/ignite-call"
          imgUrl="https://ignite-call-lidianediniz.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapp-preview.786e5de9.png&w=750&q=100"
        />
      </main>
    </ProjectsContainer>
  );
}

export default ProjectsPage;
