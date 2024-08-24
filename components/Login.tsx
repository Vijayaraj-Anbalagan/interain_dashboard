import React, { useState, FormEvent } from 'react';
import type { NextPage } from 'next';

const Login: NextPage = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="flex flex-col justify-center items-center h-full p-5 text-black w-4/12">
            <div className="flex flex-col flex-[12] justify-center items-center">
                <h1 className="font-bold text-4xl mb-4">Get Started</h1>
                <form onSubmit={handleSubmit} className="w-80 flex flex-col">
                    <div className="mb-2">
                        <label htmlFor="email" className="block mb-1 text-sm font-medium">Email:</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block mb-1 text-sm font-medium">Password:</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="mt-2 p-2 bg-blue-600 rounded-xl hover:bg-blue-700 text-white">
                        Login
                    </button>
                </form>
            </div>
            <footer className="text-stone-500 text-sm flex-1 mt-4">
                Terms of Use | Privacy Policy
            </footer>
        </div>
    );
};

export default Login;
