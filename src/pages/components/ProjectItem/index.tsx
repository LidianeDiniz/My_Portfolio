import Link from 'next/Link';
import { GrDeploy } from 'react-icons/gr';
import { AiFillGithub } from 'react-icons/ai';
import { Container } from './styles';

interface ProjectItemProps {
  title: string;
  type: string;
  imgUrl: string;
  slug: string;
}

export function ProjectItem({ title, type, imgUrl, slug }: ProjectItemProps) {
  return (
    <Container imgUrl={imgUrl}>
      <Link href={`/ProjectsPages/${slug}`}>
        <a href="">
          <div className="overlay" />
          <section>
            <h1>{title}</h1>
            <h2>{type}</h2>
          </section>
        </a>
      </Link>

      <div>
        <button type="button">
          Veja o Deploy <GrDeploy />
        </button>

        <button type="button">
          Repositório no Github <AiFillGithub />
        </button>
      </div>
    </Container>
  );
}
