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
          title="Projeto 0111"
          type="Coffe-Delivery"
          slug="/https://projeto-coffe-delivery.vercel.app"
          imgUrl="https://github.com/LidianeDiniz/Projeto-Coffe-Delivery/blob/main/src/assets/screenchot-coffee.png?raw=true"
        />

        <ProjectItem
          title="Projeto 01"
          type="Coffe-Delivery"
          slug="{slug}"
          imgUrl="https://github.com/LidianeDiniz/Projeto-Coffe-Delivery/blob/main/src/assets/screenchot-coffee.png?raw=true"
        />

        <ProjectItem
          title="Projeto 01"
          type="Coffe-Delivery"
          slug="test"
          imgUrl="https://github.com/LidianeDiniz/Projeto-Coffe-Delivery/blob/main/src/assets/screenchot-coffee.png?raw=true"
        />

        <ProjectItem
          title="Projeto 01"
          type="Coffe-Delivery"
          slug="test"
          imgUrl="https://github.com/LidianeDiniz/Projeto-Coffe-Delivery/blob/main/src/assets/screenchot-coffee.png?raw=true"
        />
      </main>
    </ProjectsContainer>
  );
}

export default ProjectsPage;
