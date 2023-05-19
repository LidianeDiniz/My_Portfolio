import { Container } from './styles';
import { ReactNode } from 'react';

interface SectionTitleProps {
  title: string | ReactNode;
  description?: string | ReactNode;
}

function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <Container data-aos="fade-right">
      <h1>{title}</h1>
      {description && <h2>{description}</h2>}
    </Container>
  );
}

export default SectionTitle;
