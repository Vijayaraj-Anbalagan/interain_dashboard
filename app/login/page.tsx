"use client"
import React from 'react';
import Login from '../../components/Login';
import { TypewriterEffectDemo } from '../../components/DynamicContent';
const Home: React.FC = () => {
  return (
    <div className="flex flex-row h-screen w-screen poppins-medium bg-right">
      <TypewriterEffectDemo />
      <Login />
    </div>
  );
}

export default Home;
