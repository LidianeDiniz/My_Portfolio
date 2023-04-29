import { FaWhatsapp } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import Form from '../components/FormContact/Form';
import Header from '../components/Header';
import SectionTitle from '../components/SectionTitle';
import { Container } from './styles';

function Contact() {
  return (
    <div>
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
