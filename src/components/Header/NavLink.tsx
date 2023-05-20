import { useRouter } from "next/router";
import Link from "next/link";
import { NavLinkContainer } from "./styles";

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
