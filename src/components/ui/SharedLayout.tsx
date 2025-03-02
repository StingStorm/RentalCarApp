import { Suspense } from 'react';
import Header from '@/components/Header/Header';

type SLProps = {
  children: React.ReactNode;
};

const SharedLayout = ({ children }: SLProps) => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={'...loading'}>{children}</Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
