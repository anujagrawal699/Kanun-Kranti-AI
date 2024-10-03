import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImage from '../assets/image.png';

const LoginPage = ({onLogin}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulating login process
    setTimeout(() => {
      setIsLoading(false);
      onLogin(); // Call this function when login is successful
      navigate('/');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-400 to-[#302A2A] flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl transform transition-all duration-500 ease-in-out hover:scale-105">
      <div className="text-center">
          {/* Updated logo container */}
          <div className="mx-auto w-24 h-24 flex items-center justify-center mb-4">
            <img src={logoImage} alt="Kanun Kranti Logo" className="max-w-full max-h-full object-contain rounded-full border-2 border-black" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Kanun Kranti AI</h2>
          <p className="mt-2 text-sm text-gray-600">AI-Driven Legal Research Engine</p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username (Optional)"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password (Optional)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
          <button
              type="submit"
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#302A2A] hover:bg-[#0b0b0b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 ${
                isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              
            >
              Skip</button>
            <button
              type="submit"
              className={`group relative w-full top-4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#302A2A] hover:bg-[#0b0b0b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 ${
                isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={isLoading}
            >
              {isLoading ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : null}
              {isLoading ? 'Logging in...' : 'Log in'}
            </button>

          </div>
        </form>

        <div className="mt-6 bg-yellow-100 border-l-4 border-yellow-500 text-[#302A2A] p-4" role="alert">
          <p className="font-bold">Note</p>
          <p>The Login is currently dummy and the user can just Login by clicking Login button, Login IDs for judges and judiciary officers will be created using their official credentials once the platform is in production.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;