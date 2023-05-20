import { FilePdf } from "phosphor-react";
import SectionTitle from "../SectionTitle";
import CertificatesItem from "./CertificatesItem";
import { Container } from "./styles";

function Certificates() {
  return (
    <Container>
      <div className="containerTitle">
        <SectionTitle
          title="#Certificados"
          description="Cursos Concluídos e em andamento."
        />
      </div>
      <section>
        <CertificatesItem
          year="2023"
          title="Dev Front-end"
          description="Especialização em React.js curso Ignite. Em andamento.(Rocketseat)."
          slug="/"
        />

        <CertificatesItem
          year="2022"
          title="Dev Full-Stack"
          description="Formação Explorer Front-end, Back-end, API RESTful. Carga horária 100h."
          icon={<FilePdf size={50} color="#ff6c2c" />}
          slug="https://drive.google.com/file/d/1VVRMl2JmF_SJ1KSfjep9QieLpghuNfj4/view?usp=share_link"
        />

        <CertificatesItem
          year="2022"
          title="Dev Full-Stack"
          description="Trilha Conectar, fundamentos da progamção carga horária 2h23."
          icon={<FilePdf size={50} color="#ff6c2c" />}
          slug="https://drive.google.com/file/d/1idbLqZyWlcEsDZ-4TI0mxSm1RSwoEfOw/view?usp=sharing"
        />

        <CertificatesItem
          year="2022"
          title="Dev Mobile"
          description="Desenvolvimento Mobile Nativo Androide, carga horária 2h."
          icon={<FilePdf size={50} color="#ff6c2c" />}
          slug="https://www.dio.me/certificate/E3F357E4/share"
        />

        <CertificatesItem
          year="2022"
          title="Pensamento lógico"
          description="Introdução à progamação e pensamento Computacional, carga horária 5h."
          icon={<FilePdf size={50} color="#ff6c2c" />}
          slug="https://www.dio.me/certificate/55A9AFCD/share"
        />

        <CertificatesItem
          year="2022"
          title="Lógica"
          description="Lógica de programação essencial, carga horária 4h."
          icon={<FilePdf size={50} color="#ff6c2c" />}
          slug="https://www.dio.me/certificate/8422374F/share"
        />

        <CertificatesItem
          year="2022"
          title="Coleções javaScript"
          description="Coleções Mapas e conjuntos com javaScript, carga horária 1h."
          icon={<FilePdf size={50} color="#ff6c2c" />}
          slug="https://www.dio.me/certificate/EC5C488C/share"
        />
      </section>
    </Container>
  );
}

export default Certificates;
