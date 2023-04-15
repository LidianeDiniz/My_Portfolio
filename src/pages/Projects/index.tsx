import { useRouter } from 'next/Router';

export default function Projects() {
  const router = useRouter();

  router.push('/projects');
}
