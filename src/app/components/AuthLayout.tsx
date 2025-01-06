import React from 'react';
import Link from 'next/link';
import { languages } from '../../lib/utils';
import LanguageDropdown from './ui/LanguageDropdown';
interface AuthLayoutProps {
  children: React.ReactNode;
  backgroundImage: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, backgroundImage }) => {
  return (
    <div className="flex h-screen">
      <div className="w-full md:w-1/2 flex flex-col justify-between">
        <nav className="flex justify-between py-4 px-6">
          <Link href='/'>
            <img src='/svgs/cargo_black.svg' alt="Logo" />
          </Link>
          <LanguageDropdown options={languages} />
        </nav>
        <div className="flex-grow flex items-center justify-center">
          {children}
        </div>
        <footer className="flex justify-between py-5 px-6">
          <span>©The Cargo 2024</span>
          <span>Privacy Policy</span>
        </footer>
      </div>
      <div
        className="hidden md:block md:w-1/2 bg-cover bg-center m-5 rounded-lg"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
    </div>
  );
};

export default AuthLayout;