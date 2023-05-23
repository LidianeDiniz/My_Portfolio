import { FaWhatsapp } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import Head from "next/head";
import Form from "../../components/FormContact/Form";
import Header from "../../components/Header";
import SectionTitle from "../../components/SectionTitle";

import { Footer } from "../../components/Footer/index";
import { Container, Button, Contents } from "../../styles/ContactStyles";

function Contact() {
  function handleRedirect(url: string) {
    window.open(url);
  }
  return (
    <Contents>
      <Header />
      <Head>
        <title>Fale comigo</title>
      </Head>
      <Container>
        <SectionTitle
          title={<>Descubra os links para nossa conexão!</>}
          description={
            <>
              Entre em contato comigo e assim que possível, retornarei para
              darmos continuidade à nossa conversa. Seja para discutir um
              projeto, compartilhar ideias ou explorar possíveis colaborações,
              estou aqui para ajudar. Sua mensagem é muito importante e farei
              questão de responder assim que puder. Estou ansiosa para ouvir
              você e começarmos a construir grandes coisas juntos!
              <br />
              Além disso, fique à vontade para entrar em contato diretamente
              pelo WhatsApp ou pelo LinkedIn. Estou sempre presente nessas
              plataformas, buscando oportunidades e estabelecendo conexões
              valiosas. Vamos aproveitar todas as formas de comunicação
              disponíveis para tornar nossa interação mais ágil e eficiente.
              <br /> Aguardo seu contato e prometo que retornarei o mais rápido
              possível.
            </>
          }
        />
        <Form />

        <ul>
          <li>
            <Button
              onClick={() => handleRedirect("https://contate.me/lidiane_dev")}
            >
              WhatsApp
              <FaWhatsapp />
            </Button>
          </li>
          <li>
            <Button
              onClick={() =>
                handleRedirect(
                  "https://www.linkedin.com/in/lidiane-cristina-diniz/"
                )
              }
            >
              Linkedin
              <AiFillLinkedin />
            </Button>
          </li>
        </ul>
        <Footer />
      </Container>
    </Contents>
  );
}

export default Contact;
