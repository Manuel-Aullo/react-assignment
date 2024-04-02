import { useState } from 'react';
import { getUserPool } from '../utils';
import { useAuth } from '../context/AuthContext';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { signIn, error, clearError } = useAuth();

    const handleLoginClick =  () => {
      const userPool = getUserPool();
      signIn(username, password, userPool);
       console.log('userPool', userPool, 'getUserPool', );
    };

    return (
      <div className="max-w-md w-full space-y-8">
        <div className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                    id="email-address"
                    value={username}
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    required
                  className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-b-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <button className="group relative w-full flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-indigo-500"
            type="button" onClick={() => handleLoginClick()}>Login</button>
            </div>
        </div>
      </div>
    );
};

export default LoginForm;
