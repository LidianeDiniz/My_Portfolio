import { GrDeploy } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";

import Link from "next/link";
import { Container } from "./styles";

interface ProjectItemProps {
  title: string;
  type: string;
  imgUrl: string;
  slug: string;
  repUrl: string;
  isSubmitting?: boolean;
}

export function ProjectItem({
  title,
  type,
  imgUrl,
  slug,
  repUrl,
  isSubmitting,
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
            <a
              target="_blank"
              rel="noreferrer"
              style={{ cursor: isSubmitting ? "not-allowed" : "pointer" }}
            >
              Repositório no Github <AiFillGithub />
            </a>
          </Link>
        </button>
      </div>
    </Container>
  );
}
