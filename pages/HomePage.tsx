
import React, { useState, useMemo } from 'react';
import { CATEGORIES, FEATURED_PRODUCTS_IDS, PRODUCTS } from '../constants';
import { Category } from '../types';
import ProductCard from '../components/ProductCard';

const Banner: React.FC = () => (
    <div className="bg-brand-green text-white p-8 rounded-lg mb-8 text-center bg-[url('https://picsum.photos/seed/grocerybg/1200/400')] bg-cover bg-center bg-blend-overlay bg-black/50">
      <h1 className="text-4xl font-bold text-brand-gold">Welcome to Muqaddas Traders</h1>
      <p className="mt-2 text-lg text-brand-beige">Quality Groceries at the Best Prices</p>
    </div>
);

const FeaturedProducts: React.FC = () => {
    const featured = useMemo(() => PRODUCTS.filter(p => FEATURED_PRODUCTS_IDS.includes(p.id)), []);
    return (
        <div className="mb-12">
            <h2 className="text-3xl font-bold text-brand-green mb-6 text-center">Featured Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                {featured.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};


const HomePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') {
      return PRODUCTS;
    }
    return PRODUCTS.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div>
      <Banner />
      <FeaturedProducts />

      <h2 className="text-3xl font-bold text-brand-green mb-6 text-center">Our Products</h2>
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
              selectedCategory === category
                ? 'bg-brand-green text-white shadow-md'
                : 'bg-white text-brand-green hover:bg-brand-beige'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
