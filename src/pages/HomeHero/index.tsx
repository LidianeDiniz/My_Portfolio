import { Container, InfoContainer, InfoItem, TextContainer } from './styles';
import picture from '../../assets/Foto_perfil.jpg';

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
          <span>Cargo</span>
          <InfoItem>{`{ Desenvolvedora: Front-end Júnior }`}</InfoItem>
          <span>Minhas Habilidades</span>
          <InfoItem>
            {`{ React| Typescript| Javascript | Nextjs | Styled-Components | Sass | WordPress }`}
          </InfoItem>
        </InfoContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
