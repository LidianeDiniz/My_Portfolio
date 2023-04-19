import { ReactNode } from 'react';

interface ExperienceProps {
  children: ReactNode;
}

export function Experience({ children }: ExperienceProps) {
  return (
    <>
      <h1>Experience</h1>
      {children}
    </>
  );
}
