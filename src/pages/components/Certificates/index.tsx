import { FilePdf } from 'phosphor-react';
import SectionTitle from '../SectionTitle';
import CertificatesItem from './CertificatesItem';
import { Container } from './styles';

function Certificates() {
  return (
    <Container>
      <SectionTitle
        title="#Certificados"
        description="Cursos Concluídos e em andamentos."
      />
      <section>
        <a href="http://github.com/LidianeDiniz" target="/">
          <CertificatesItem
            year="2023"
            title="Dev Front-end"
            description="Especiliazação em React Curso Ignite"
            icon={<FilePdf size={50} color="#ff6c2c" />}
          />
        </a>
        <CertificatesItem
          year="2022"
          title="Dev Back-end"
          description="Curso Explorer com carga horária de 100hrs"
        />

        <CertificatesItem
          year="2022"
          title="Dev Back-end"
          description="Curso Explorer com carga horária de 100hrs"
        />

        <CertificatesItem
          year="2023"
          title="Dev Front-end"
          description="Especiliazação em React Curso Ignite"
        />
      </section>
    </Container>
  );
}

export default Certificates;
