import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Logo from '../../../public/svgs/cargo_black.svg'
import Dropdown from './ui/Dropdown';
import { languages } from '../../utils/utils';

interface AuthLayoutProps {
  children: React.ReactNode;
  backgroundImage: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, backgroundImage }) => {
  return (
    <div className="flex h-screen">
      <div className="w-full md:w-1/2 flex flex-col justify-between">
        <div>
          <nav className="flex justify-between py-4 px-6">
            <Image src={Logo} alt="Logo" />
            <Dropdown variant="white" options={languages} />
          </nav>
          <div className="flex-grow flex items-center justify-center">
            {children}
          </div>
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