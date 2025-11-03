
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Page } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activePage: Page;
  setActivePage: (page: Page) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activePage, setActivePage }) => {
  return (
    <div className="min-h-screen bg-background font-sans text-secondary flex flex-col">
      <Header activePage={activePage} setActivePage={setActivePage} />
      <main className="w-full flex-grow">
        {children}
      </main>
       <div className="w-full mt-auto">
         <Footer setActivePage={setActivePage} />
       </div>
    </div>
  );
};

export default Layout;
