import React from 'react';
import { Page } from '../types';

interface FooterProps {
  setActivePage: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ setActivePage }) => {
  const handleLocationClick = () => {
    setActivePage(Page.DASHBOARD);
    
    setTimeout(() => {
      const element = document.getElementById('locations-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <footer className="w-full bg-light py-12 px-4 sm:px-6 lg:px-8 border-t border-primary/10 mt-12">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* About Section */}
        <div>
          <h3 className="font-serif text-xl font-bold text-primary mb-4">Pixelate Studio</h3>
          <p className="text-sm text-secondary/70">
            Capturing moments that last a lifetime. Professional photography services for every occasion.
          </p>
        </div>
        
        {/* Locations Section */}
        <div>
          <h3 className="font-serif text-xl font-bold text-primary mb-4">Our Studios</h3>
          <ul className="space-y-2 text-sm text-secondary/70">
            <li>
              <button onClick={handleLocationClick} className="hover:text-primary transition-colors duration-200 text-left md:text-center">
                East Surabaya
              </button>
            </li>
            <li>
              <button onClick={handleLocationClick} className="hover:text-primary transition-colors duration-200 text-left md:text-center">
                West Surabaya
              </button>
            </li>
            <li>
              <button onClick={handleLocationClick} className="hover:text-primary transition-colors duration-200 text-left md:text-center">
                Sidoarjo
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="font-serif text-xl font-bold text-primary mb-4">Get In Touch</h3>
          <ul className="space-y-2 text-sm text-secondary/70">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-lg">📞</span>
              <a href="tel:082231292233" className="hover:text-primary">0822 3129 2233</a>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
               <span className="text-lg">🎊</span>
              <span>Events: <a href="#" className="hover:text-primary underline">@pixelate.events</a></span>
            </li>
             <li className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-lg">✉️</span>
              <a href="mailto:info@pixelate.studio" className="hover:text-primary">info@pixelate.studio</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-primary/60 mt-10 pt-8 border-t border-primary/10">
        © 2024 Pixelate Photo Studio. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
