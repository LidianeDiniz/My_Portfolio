import * as Icon from 'phosphor-react';
import Link from 'next/dist/client/link';
import { ItemContainer } from './styles';
import { ReactNode } from 'react';

interface CertificatesProps {
  year: number | string;
  title: string;
  description: string;
  icon?: ReactNode;
  slug?: string;
}

function CerificateItem({
  year,
  title,
  description,
  icon,
  slug
}: CertificatesProps) {
  return (
    <ItemContainer data-aos="zoom-in-up">
      <div>
        <h1>{year}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
        <Link href={slug}>
          <a target="_blank" rel="noreferrer">
            <span>{icon}</span>
          </a>
        </Link>
      </div>
    </ItemContainer>
  );
}

export default CerificateItem;
