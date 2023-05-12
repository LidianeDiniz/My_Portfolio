import Link from 'next/Link';
import { GrDeploy } from 'react-icons/gr';
import { AiFillGithub } from 'react-icons/ai';

import { Container } from './styles';

interface ProjectItemProps {
  title: string;
  type: string;
  imgUrl: string;
  slug: string;
  repUrl: string;
}

export function ProjectItem({
  title,
  type,
  imgUrl,
  slug,
  repUrl
}: ProjectItemProps) {
  return (
    <Container imgUrl={imgUrl}>
      <Link href="">
        <a href="">
          <div className="overlay" />
          <section>
            <h1>{title}</h1>
            <h2>{type}</h2>
          </section>
        </a>
      </Link>

      <div className="LinkProjects">
        <button type="button">
          <Link href={slug}>
            <a target="_blank" rel="noreferrer">
              Veja o Deploy <GrDeploy />
            </a>
          </Link>
        </button>

        <button type="button">
          <Link href={repUrl}>
            <a target="_blank" rel="noreferrer">
              Repositório no Github <AiFillGithub />
            </a>
          </Link>
        </button>
      </div>
    </Container>
  );
}
