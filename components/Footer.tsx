
import React from 'react';
import { HomeIcon, PlusCircleIcon, UserIcon } from './Icons';

interface FooterProps {
  onSellClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onSellClick }) => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-surface-bg border-t border-gray-700 p-2 z-10">
      <div className="container mx-auto flex justify-around items-center h-16">
        <button className="flex flex-col items-center text-secondary">
          <HomeIcon className="w-7 h-7" />
          <span className="text-xs mt-1">Início</span>
        </button>
        <button 
          onClick={onSellClick}
          className="bg-gradient-to-r from-primary to-accent text-white rounded-full p-4 transform -translate-y-6 shadow-lg hover:scale-110 transition-transform duration-300"
        >
          <PlusCircleIcon className="w-8 h-8" />
        </button>
        <button className="flex flex-col items-center text-text-secondary hover:text-secondary transition-colors">
          <UserIcon className="w-7 h-7" />
          <span className="text-xs mt-1">Perfil</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
