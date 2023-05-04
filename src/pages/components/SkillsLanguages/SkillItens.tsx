import { ReactNode } from 'react';
import { SkillItensContainer } from './styles';

interface SkillProps {
  title: string;
  icon: ReactNode;
}

export default function SkillItens({ title, icon }: SkillProps) {
  return (
    <SkillItensContainer data-aos="fade-up">
      <p>{title}</p>
      {icon}
    </SkillItensContainer>
  );
}
