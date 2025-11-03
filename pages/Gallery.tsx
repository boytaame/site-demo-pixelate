
import React from 'react';

const galleryItems = [
  {
    title: 'Prewedding',
    imageUrl: 'https://images.unsplash.com/photo-1523438903339-3a185c8e3ddd?q=80&w=1887&auto=format&fit=crop',
  },
  {
    title: 'Maternity',
    imageUrl: 'https://images.unsplash.com/photo-1559535332-db1c296bf423?q=80&w=1887&auto=format&fit=crop',
  }
];

const Gallery: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="font-serif text-5xl md:text-7xl font-bold text-primary mb-2">
          ONE PRICE
        </h2>
        <p className="text-xl text-primary/80 mb-12">
          for all kinds of photoshoots
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
          {galleryItems.map((item) => (
            <div key={item.title} className="group">
              <div className="overflow-hidden rounded-2xl shadow-sm mb-4">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-secondary">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
