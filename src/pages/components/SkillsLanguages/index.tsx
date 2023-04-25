import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact, FaWordpressSimple } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiStyledcomponents, SiTypescript } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { Container } from './styles';
import SectionTitle from '../SectionTitle';
import SkillItens from './SkillItens';

function SkillLanguages() {
  return (
    <Container>
      <SectionTitle title="Linguagens que Domino" />
      <section>
        <SkillItens title="HTML" icon={<AiFillHtml5 />} />
        <SkillItens title="CSS" icon={<FaCss3Alt />} />
        <SkillItens title="Javascript" icon={<IoLogoJavascript />} />
        <SkillItens title="React.js" icon={<FaReact />} />
        <SkillItens title="TypeScript" icon={<SiTypescript />} />
        <SkillItens title="Next.js" icon={<TbBrandNextjs />} />
        <SkillItens title="Styled-Components" icon={<SiStyledcomponents />} />
        <SkillItens title="WordPress" icon={<FaWordpressSimple />} />
      </section>
    </Container>
  );
}

export default SkillLanguages;
