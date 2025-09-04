
import React from 'react';
import { Product } from '../types';
import { useCart } from '../contexts/CartContext';
import { PlusIcon } from './Icons';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 group flex flex-col">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 bg-brand-green text-white text-xs font-bold px-2 py-1 rounded-full">
            Rs. {product.price}
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-brand-green flex-grow">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-3">per {product.unit}</p>
        <button
          onClick={() => addToCart(product)}
          className="w-full mt-auto bg-brand-gold text-brand-green font-bold py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-yellow-500 transition-colors"
        >
          <PlusIcon className="h-5 w-5" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
