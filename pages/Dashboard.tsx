
import React from 'react';
import { Page } from '../types';
import CameraIcon from '../components/icons/CameraIcon';
import SparklesIcon from '../components/icons/SparklesIcon';
import HeartIcon from '../components/icons/HeartIcon';
import WhatsappIcon from '../components/icons/WhatsappIcon';

interface DashboardProps {
  setActivePage: (page: Page) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ setActivePage }) => {
  return (
    <>
      {/* Hero Section */}
      <div 
        className="relative w-full flex items-center justify-center bg-cover bg-center min-h-[80vh] py-20"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518322126839-39665f85002a?q=80&w=2070&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/90 backdrop-blur-sm text-light p-8 md:p-16 rounded-3xl flex flex-col items-center text-center shadow-2xl">
            <h1 className="text-4xl md:text-7xl font-serif font-bold tracking-tight mb-4 animate-fade-in-down">
              Pixelate Photo Studio
            </h1>
            <p className="text-lg md:text-xl text-light/90 mb-12 max-w-2xl animate-fade-in-up">
              Capturing moments that last a lifetime. Professional photography services for every occasion.
            </p>
            
            <div className="flex flex-col items-center">
                <h2 className="text-sm font-semibold text-light/80 mb-4 tracking-widest uppercase">Contact Via Whatsapp</h2>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="#" 
                    className="bg-whatsapp-green text-light font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-whatsapp-green-dark hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-whatsapp-green"
                  >
                    <WhatsappIcon className="w-5 h-5" />
                    <span>Admin Surabaya</span>
                  </a>
                  <a 
                    href="#" 
                    className="bg-whatsapp-green text-light font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-whatsapp-green-dark hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-whatsapp-green"
                  >
                    <WhatsappIcon className="w-5 h-5" />
                    <span>Admin Sidoarjo</span>
                  </a>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Info and Location Section */}
        <section id="locations-section" className="py-16 md:py-24 text-center">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Pricing Info */}
            <div className="animate-fade-in-up">
              <p className="text-xl text-secondary mb-2">
                <span className="font-bold text-primary">Photo Studio Surabaya & Sidoarjo:</span> IDR 150K/Hour
              </p>
              <p className="text-xl text-secondary">
                <span className="font-bold text-primary">Studio & Photographer Package:</span> IDR 595K/Hour
              </p>
            </div>

            <hr className="border-primary/10 max-w-sm mx-auto" />

            {/* Location Info */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
                <div className="space-y-2">
                  <h3 className="font-serif text-3xl text-primary">East Surabaya</h3>
                  <p className="text-secondary/80 leading-relaxed">
                    Ruko Eastern Park Residence B-26
                    <br />
                    (Jl. Raya Sukolilo Mulia, Keputih)
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-3xl text-primary">West Surabaya</h3>
                  <p className="text-secondary/80 leading-relaxed">
                    Golf Avenue GV6/07, Citraland
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-3xl text-primary">Sidoarjo</h3>
                  <p className="text-secondary/80 leading-relaxed">
                    Ruko Heavenland Park BB-20
                    <br />
                    (Jl. Raya Lingkar Timur, Sidoarjo)
                  </p>
                </div>
              </div>
            </div>

            <hr className="border-primary/10 max-w-sm mx-auto" />

            {/* Contact Info */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <ul className="flex flex-col sm:flex-row justify-center items-center gap-x-8 gap-y-4 text-secondary text-lg">
                  <li className="flex items-center gap-2">
                      <span className="text-xl">📞</span>
                      <span>0822 3129 2233</span>
                  </li>
                  <li className="flex items-center gap-2">
                      <span className="text-xl">🎊</span>
                      <span>Events: <a href="#" className="text-primary hover:underline">@pixelate.events</a></span>
                  </li>
              </ul>
            </div>

          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-light p-10 md:p-16 rounded-3xl shadow-sm">
          <h2 className="font-serif text-4xl text-primary text-center mb-12">The Pixelate Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="bg-background rounded-full p-4 mb-4 inline-flex">
                <CameraIcon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-secondary mb-2">Professional Equipment</h3>
              <p className="text-secondary/80 text-sm">State-of-the-art lighting and camera gear to make you shine.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-background rounded-full p-4 mb-4 inline-flex">
                <SparklesIcon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-secondary mb-2">Creative Props & Sets</h3>
              <p className="text-secondary/80 text-sm">A wide variety of props and backgrounds to bring your vision to life.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-background rounded-full p-4 mb-4 inline-flex">
                <HeartIcon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-secondary mb-2">Friendly & Fun</h3>
              <p className="text-secondary/80 text-sm">Our team is here to ensure you have a comfortable and enjoyable photoshoot.</p>
            </div>
          </div>
        </section>
        
        {/* Gallery CTA Section */}
        <section className="text-center py-16 md:py-24">
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">Our Studio, Your Story</h2>
          <p className="text-lg text-secondary/80 max-w-2xl mx-auto mb-8">
            See how we've helped others capture their special moments. Explore our portfolio of beautiful photoshoots.
          </p>
          <button 
            onClick={() => setActivePage(Page.GALLERY)}
            className="bg-primary text-light font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:bg-secondary hover:shadow-lg transform hover:-translate-y-1"
          >
            View Our Work
          </button>
        </section>
      </div>
    </>
  );
};

export default Dashboard;
