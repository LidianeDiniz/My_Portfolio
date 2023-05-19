import Aos from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';
import { useEffect } from 'react';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Certificate from '../components/Certificates';
import FormContact from '../components/FormContact';
import { Footer } from '../components/Footer';
import { Projects } from '../components/Projects';
import SkillItens from '../components/SkillsLanguages';

import { HomeContainer } from '../styles/HomeStyles';


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


