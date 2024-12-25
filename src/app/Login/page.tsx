"use client"
import { useState,useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { signIn, signOut, useSession } from "next-auth/react";


  const LoginPage = () => {
  const [id, setId] =useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');


  const router = useRouter();


  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const result = await signIn("credentials", {
        redirect: true,
        email,
        password,
      });
  
      console.log("Výsledek signIn:", result); 
      if (result?.error) {
        console.error("Chyba při přihlášení:", result.error);
        setError(result.error); 
      } else {
        console.log("Přihlášení úspěšné");
       
      }
    } catch (err) {
      console.error("Neznámá chyba:", err);
      setError("Došlo k neznámé chybě.");
    }
  };
  
  return (
    //<AuthLoader>
    
    <div className="min-h-screen flex justify-center items-center ">
      <div className="bg-moje p-8 rounded-lg shadow-lg w-full max-w-sm ">
        
        <h2 className="text-3xl font-bold text-center mb-6">Přihlášení</h2>

        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium ">
              E-mail 
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
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
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
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
 
    // </AuthLoader>
  );
  
};

export default LoginPage;
