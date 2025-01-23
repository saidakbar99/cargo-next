import React from 'react';
import Link from 'next/link';
// import { languages } from '../../../lib/utils';
// import LanguageDropdown from './ui/LanguageDropdown';
interface AuthLayoutProps {
  children: React.ReactNode;
  backgroundImage: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, backgroundImage }) => {
  return (
    <div className="flex lg:h-screen">
      <div className="w-full lg:w-1/2 flex flex-col lg:justify-between">
        <nav className="flex justify-between py-4 px-6">
          <Link href='/'>
            <img className='w-12 h-6 lg:w-[85px] lg:h-[42px]' src='/svgs/cargo_black.svg' alt="Logo" />
          </Link>
          {/* <LanguageDropdown options={languages} /> */}
        </nav>
        <div className="flex items-center justify-center">
          {children}
        </div>
        <footer className="hidden lg:flex justify-between py-5 px-6">
          <span>©The Cargo 2024</span>
          <span>Privacy Policy</span>
        </footer>
      </div>
      <div
        className="hidden lg:block lg:w-1/2 bg-cover bg-center m-5 rounded-lg"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
    </div>
  );
};

export default AuthLayout;