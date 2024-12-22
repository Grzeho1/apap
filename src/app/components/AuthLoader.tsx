'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface AuthLoaderProps {
  children: React.ReactNode;
}

const AuthLoader = ({ children }: AuthLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const GetTokenFromCookie = () => {
    const match = document.cookie.match(/(^| )token=([^;]+)/);
    return match ? match[2] : null;
  };

  useEffect(() => {
    const cookieToken = GetTokenFromCookie();
    if (cookieToken) {
      router.push('/');
    } else {
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p>Načítání...</p>
      </div>
    );
  }

  return <>{children}</>;
};

export default AuthLoader;
