import { Container, InfoContainer, InfoItem, TextContainer } from './styles';
import picture from '../../../assets/Foto_perfil.png';

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

        <InfoContainer>
          <InfoItem>
            <span>Especialidades </span>
            <br />
            {`{ Desenvolvedora: Front-end Júnior }`}
          </InfoItem>

          <InfoItem>
            <span>Minhas Habilidades </span>
            <br />
            {`{ React| Typescript| Javascript | Nextjs | Styled-Components | Sass | WordPress }`}
          </InfoItem>
        </InfoContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
