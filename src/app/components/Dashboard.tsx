'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';

const Dashboard = () => {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-moje">
      {session ? (
        <div className="text-center">
          <img
            src={session.user?.image || '/default-avatar.png'}
            alt="User Avatar"
            className="rounded-full h-24 w-24 mb-4 border border-gray-300"
          />
          <h1 className="text-xl font-semibold mb-2">
            Welcome back, <span className="text-blue-500">{session.user.email}</span>!
          </h1>
          <button
            onClick={() => signOut()}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-500 mb-6">Not Logged In</h1>
          <div className="flex space-x-4">
            <button
              onClick={() => signIn('google')}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Sign in with Google
            </button>
            <button
              onClick={() => signIn('github')}
              className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
            >
              Sign in with GitHub
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;