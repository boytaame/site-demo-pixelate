
import React from 'react';
import { Page } from '../types';

interface HeaderProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ activePage, setActivePage }) => {
  const navItems = [Page.DASHBOARD, Page.PRICING, Page.GALLERY];

  return (
    <header className="w-full border-b border-primary/10">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center gap-3 mb-4 sm:mb-0">
          <div className="w-12 h-12 bg-light rounded-full flex items-center justify-center shadow-sm">
              <img src="https://i.imgur.com/kS5bY0j.png" alt="Pixelate Logo" className="h-5"/>
          </div>
          <h1 className="text-2xl font-bold text-primary tracking-tight font-serif">Pixelate Studio</h1>
        </div>
        <nav>
          <ul className="flex items-center gap-4 sm:gap-6">
            {navItems.map((page) => (
              <li key={page}>
                <button
                  onClick={() => setActivePage(page)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activePage === page
                      ? 'text-secondary font-semibold'
                      : 'text-primary hover:text-secondary'
                  }`}
                >
                  {page}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
