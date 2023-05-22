// import Head from 'next/head';
// import picture from '../../assets/Foto_perfil.png';
// import Header from '../components/Header';

import Certificates from "../../components/Certificates";
import {
  Container,
  Subtitle,
  TextContainer,
  ProfileImage,
  TextDescription,
} from "../../styles/AboutStyles";
import SectionTitle from "../../components/SectionTitle";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";

import SkillLanguages, {  } from "../../components/SkillsLanguages";

const About = () => (
  <Container>
  
      <Header />
    <TextContainer data-aos="zoom-out-right">
      
      <div className="ContainerBox">
        <ProfileImage
          data-aos="fade-left"
          src="/images/Foto_perfil.png"
          height={120}
          width={120}
        />
        <SectionTitle
          title="Conheça mais sobre mim."
          description="E aí, galera! Aqui é a Lidiane, e sou desenvolvedora."
        />
      </div>
      <TextDescription>
        <Subtitle>
          <h2
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            {" "}
            Estou muito animada em estar aqui e compartilhar um pouco sobre mim
            com vocês. Recentemente comecei minha carreira nessa área incrível e
            estou amando cada segundo. Minha paixão é trabalhar com React.js e
            explorar todas as possibilidades que ele oferece para criar
            interfaces de usuário incríveis. <br />
            Atualmente, estou me concentrando em aprimorar minhas habilidades em
            desenvolvimento front-end, mas também estou super animada para
            aprender mais sobre back-end e quero começar a explorar o mundo do
            Node.js em breve. <br />
            Sinto que estou no caminho certo e estou muito feliz por estar aqui,
            fazendo parte dessa comunidade incrível. <br />
            Espero contribuir com minha equipe e aprender muito ao longo do
            caminho. Vamos juntos nessa! <br /> Estou muito orgulhosa do meu
            trabalho e dos projetos que tenho realizado. Se você está procurando
            por alguém que seja comprometida, dedicada e apaixonada pelo que
            faz, então não hesite em entrar em contato comigo, será um prazer
            trabalharmos juntos em projetos desafiadores e contribuir para seu
            sucesso.
          </h2>
        </Subtitle>
      </TextDescription>

    </TextContainer>
      <Certificates/>
      <SkillLanguages/>
    <Footer />
  </Container>
);

export default About;
