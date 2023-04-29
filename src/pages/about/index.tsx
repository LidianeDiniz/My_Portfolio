import picture from '../../assets/Foto_perfil.png';
import Header from '../components/Header';

import {
  Container,
  InfoContainer,
  InfoItem,
  Label,
  ProfileImage,
  Skills,
  Subtitle,
  TextContainer,
  Title
} from './styles';

const About = () => (
  <Container>
    <Header />
    <ProfileImage
      src={picture}
      alt="Foto de perfil de uma mulher sorrindo ao lado de um computador "
    />
    <TextContainer>
      <Title>Olá!</Title>
      <Subtitle>É imenso prazer te ver por aqui!</Subtitle>
      <InfoContainer>
        <InfoItem>
          <Label>Cargo:</Label>
          <Skills>Desenvolvedora Front-end Júnior</Skills>
        </InfoItem>
        <InfoItem>
          <Label>Minhas Habilidades:</Label>
          <Skills>
            React | Typescript | Javascript | Next.js | Styled-Components | Sass
            | WordPress
          </Skills>
        </InfoItem>
      </InfoContainer>
    </TextContainer>
  </Container>
);

export default About;
