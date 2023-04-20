import { ItemContainer } from './styles';

interface ExperienceProps {
  year: number | string;
  title: string;
  description: string;
}

function ExperiencieItem({ year, title, description }: ExperienceProps) {
  return (
    <ItemContainer>
      <div>
        <h1>{year}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </ItemContainer>
  );
}

export default ExperiencieItem;
