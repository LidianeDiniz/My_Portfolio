import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';
import { HomeContainer } from '../styles/HomeStyles';
import Certificate from './components/Certificates';
import { Footer } from './components/Footer';
import FormContact from './components/FormContact';
import Header from './components/Header';
import HomeHero from './components/HomeHero';
import { Projects } from './components/Projects';
import SkillItens from './components/SkillsLanguages';

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <HomeContainer>
      <Head>
        <title>Página inicial</title>
      </Head>
      <Header />

      <main className="container">
        <HomeHero />
        <Certificate />
        <Projects />
        <SkillItens />
        <FormContact />
      </main>

      <Footer />
    </HomeContainer>
  );
}
