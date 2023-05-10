import { FaWhatsapp } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import Head from 'next/head';
import Form from '../components/FormContact/Form';
import Header from '../components/Header';
import SectionTitle from '../components/SectionTitle';
import { Container } from './styles';

function Contact() {
  return (
    <div>
      <Head>
        <title>Fale comigo</title>
      </Head>
      <Header />
      <Container>
        <SectionTitle
          title={<>Entre em contato comigo!</>}
          description={
            <>
              Preencha o formulário abaixo <br />
              que em breve retornarei.
            </>
          }
        />
        <Form />

        <ul>
          <li>
            <a href="">
              WhatsApp <FaWhatsapp />
            </a>
          </li>

          <li>
            <a href="">
              Linkedin <AiFillLinkedin />
            </a>
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Contact;
