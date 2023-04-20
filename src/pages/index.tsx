import { HomeContainer } from '../styles/HomeStyles';
import Experience from './components/Experience';
import Header from './components/Header';
import HomeHero from './components/HomeHero';

export default function Home() {
  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeHero />
        <Experience />
      </main>
    </HomeContainer>
  );
}
