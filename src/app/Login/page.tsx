// pages/login.tsx
'use client'
import { useState } from 'react';
import NoNavbarLayout from '../components/NoNavbar';

const LoginPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Jednoduchá validace (email a heslo)
    if (!email || !password) {
      setError('Prosím vyplňte všechny údaje');
      return;
    }

    // Zde můžeš provést autentifikaci (např. pomocí API)
    console.log('Přihlášení', { email, password });

    // Resetovat formulář a chybu
    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    
    <div className="min-h-screen flex justify-center items-center ">
      <div className="bg-moje p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-3xl  font-bold text-center mb-6 ">Přihlášení</h2>

        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium ">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium ">
              Heslo
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Vaše heslo"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Přihlásit se
          </button>
        </form>
      </div>
    </div>
   
    
  );
};

export default LoginPage;
