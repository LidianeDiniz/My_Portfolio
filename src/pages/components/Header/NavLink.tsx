import { useRouter } from 'next/Router';
import Link from 'next/Link';
import { NavLinkContainer } from './styles';

interface NavLinkProps {
  title: string;
  path: string;
}

export default function NavLink({ title, path }: NavLinkProps) {
  const router = useRouter();
  const isActive = router.pathname === path;
  return (
    <NavLinkContainer isActive={isActive}>
      <Link href={path}>
        <a>{title}</a>
      </Link>
    </NavLinkContainer>
  );
}
