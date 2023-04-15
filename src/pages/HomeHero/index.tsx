import { Container, TextContainer } from './styles';
import picture from '../../assets/Foto_perfil.jpeg';

function HomeHero() {
  return (
    <Container>
      <img
        src={picture}
        alt="Foto de perfil de uma mulher sorrindo ao lado de um computador "
      />
      <div>
        <TextContainer>
          <h1>Olá! </h1>
          <h2>Me chamo Lidiane!</h2>
        </TextContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
