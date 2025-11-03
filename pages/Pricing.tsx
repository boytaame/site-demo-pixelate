
import React from 'react';

const pricingPackages = [
  {
    name: 'Studio Rent',
    price: 'IDR 150.000/Hour',
    description: '(Choose one room - lighting & props provided)',
  },
  {
    name: 'Studio & Photographer',
    price: 'IDR 595.000/Hour',
    description: '(Get all raw files & 10 edited photos)',
  },
  {
    name: 'Studio, Photographer, Makeup, Hairdo',
    price: 'IDR 1.225.000',
    description: '(2-hours makeup session, 1-hour photo session)',
  },
];

const Pricing: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="bg-light p-8 md:p-12 rounded-3xl shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 md:h-full w-full rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1595893798219-0552a0571a02?q=80&w=1887&auto=format&fit=crop" 
              alt="Couple posing in a photo studio" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-serif text-5xl md:text-6xl text-primary tracking-tight mb-8">
              PRICELIST
            </h2>
            <div className="space-y-8">
              {pricingPackages.map((pkg) => (
                <div key={pkg.name} className="border-b border-primary/10 pb-6">
                  <h3 className="font-serif text-2xl text-secondary font-medium">{pkg.name}</h3>
                  <p className="text-lg text-primary font-bold my-2">{pkg.price}</p>
                  <p className="text-secondary/70">{pkg.description}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-primary/80 mt-8">
              *Weekends & Public Holidays: IDR 50.000/Hour
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
