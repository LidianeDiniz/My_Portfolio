import { HomeContainer } from '../styles/HomeStyles';
import Header from './Header';
import HomeHero from './HomeHero';

export default function Home() {
  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeHero />
      </main>
    </HomeContainer>
  );
}
