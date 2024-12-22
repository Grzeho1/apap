
'use client'
import { useState,useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AuthLoader from '../components/AuthLoader';
import cookie from 'cookie'


  const LoginPage = () => {
  const [id, setId] =useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [token, setToken] = useState<string | null>(null);
  const [isLoading,setIsloading] = useState(true);
  const router = useRouter();




   // Uloží token 
   const saveTokenToCookie = (token: any) => {
    const expires = new Date();
    expires.setHours(expires.getHours() + 1); // Nastaví expiraci na 1 hodinu
    document.cookie = `token=${token}; expires=${expires.toUTCString()}; path=/; secure; samesite=strict`;
  };

  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    
    if (!email || !password) {
      setError('Prosím vyplňte všechny údaje');
      return;
    }


try {
  const response = await fetch ('/api/login',{
    method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({id, email, password }),
      });

      const data = await response.json();


      if(!response.ok)
      {
        throw new Error(data.message || "chyba");
      }
      else
      {
      setToken(data.token);
      saveTokenToCookie(data.token);
     router.push('/')

      setEmail('');
      setPassword('');
      setError('');
      }

} catch (err:any){
  setError(err.message);
}

 };

  return (
    <AuthLoader>
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
   
    </AuthLoader>
  );
};

export default LoginPage;
