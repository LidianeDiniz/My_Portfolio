import Link from 'next/Link';
import { CaretDoubleRight } from 'phosphor-react';
import { ProjectContainer } from './styles';

interface ProjectsProps {
  title: string;
  type: string;
  slug: string;
  img: string;
}

export function ProjectsItem({ title, type, slug, img }: ProjectsProps) {
  return (
    <ProjectContainer imgUrl={img}>
      <section>
        <div className="overlay" />
        <div className="text">
          <h1># {title}</h1>
          <h2>-{type}</h2>
        </div>
      </section>
      <button type="button">
        <Link href={slug}>
          <a target="_blank" rel="noreferrer">
            Ver mais <CaretDoubleRight />
          </a>
        </Link>
      </button>
    </ProjectContainer>
  );
}
