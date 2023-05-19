import SectionTitle from '../SectionTitle';
import Form from './Form';
import { Container } from './styles';

function FormContact() {
  return (
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
    </Container>
  );
}

export default FormContact;
