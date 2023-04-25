import * as Icon from 'phosphor-react';
import { ItemContainer } from './styles';

interface CertificatesProps {
  year: number | string;
  title: string;
  description: string;
  icon?: Icon.IconProps;
}

function ExperiencieItem({
  year,
  title,
  description,
  icon
}: CertificatesProps) {
  return (
    <ItemContainer>
      <div>
        <h1>{year}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
        <span>{icon}</span>
      </div>
    </ItemContainer>
  );
}

export default ExperiencieItem;
