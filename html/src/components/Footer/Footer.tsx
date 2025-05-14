import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="site-footer bg-gray-100 p-4 mt-auto">
      <div className="container mx-auto flex items-center justify-center space-x-2">
        <a href="https://discord.derpgame.net" target="_blank" rel="noopener noreferrer">
          <img src="/discord-logo.svg" alt="Discord Logo" className="h-6" />
        </a>
        <span>Join us on Discord</span>
      </div>
    </footer>
  );
};

export default Footer;