import SectionTitle from '../SectionTitle';
import ExperiencieItem from './ExperienceItem';
import { Container } from './styles';

function Experience() {
  return (
    <Container>
      <SectionTitle
        title="#01 Ano"
        description="de experciência em projetos e desafios pessoais."
      />
      <section>
        <ExperiencieItem
          year="2023"
          title="Dev Front-end"
          description="Especiliazação em React Curso Ignite"
        />
        <ExperiencieItem
          year="2022"
          title="Dev Back-end"
          description="Curso Explorer com carga horária de 100hrs"
        />

        <ExperiencieItem
          year="2022"
          title="Dev Back-end"
          description="Curso Explorer com carga horária de 100hrs"
        />

        <ExperiencieItem
          year="2023"
          title="Dev Front-end"
          description="Especiliazação em React Curso Ignite"
        />
      </section>
    </Container>
  );
}

export default Experience;
