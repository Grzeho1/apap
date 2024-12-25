
import Head from 'next/head';
import Dashboard from './components/Dashboard';
import { SessionProvider } from 'next-auth/react';
import SessionWrapper from './components/SessionWrapper';

export default function Home(){
 
    return (
      <SessionWrapper>
    <main className='max-w-7x mx-auto my-12'>
      <Dashboard/>


    </main>
    </SessionWrapper>
    )
};


