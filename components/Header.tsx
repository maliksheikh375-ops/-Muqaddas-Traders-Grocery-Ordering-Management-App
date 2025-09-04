
import React from 'react';
import { useCart } from '../contexts/CartContext';
import { Page } from '../types';
// FIX: Removed UserIcon as it is not exported from Icons.tsx and not used.
import { LeafIcon, ShoppingCartIcon } from './Icons';

interface HeaderProps {
  setPage: (page: Page) => void;
  currentPage: Page;
}

const Header: React.FC<HeaderProps> = ({ setPage, currentPage }) => {
  const { cartCount } = useCart();

  const NavLink: React.FC<{ page: Page; children: React.ReactNode }> = ({ page, children }) => (
    <button
      onClick={() => setPage(page)}
      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
        currentPage === page
          ? 'text-brand-gold bg-brand-green'
          : 'text-brand-beige hover:bg-brand-lightgreen/50'
      }`}
    >
      {children}
    </button>
  );

  return (
    <header className="bg-brand-green shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setPage('home')}
          >
            <LeafIcon className="h-8 w-8 text-brand-gold" />
            <span className="text-white text-xl font-bold tracking-tight">
              Muqaddas Traders
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <nav className="hidden sm:flex items-center gap-2">
              <NavLink page="home">Home</NavLink>
              <NavLink page="about">About Us</NavLink>
            </nav>
            <button
              onClick={() => setPage('cart')}
              className="relative p-2 text-brand-beige hover:text-white transition-colors rounded-full hover:bg-brand-lightgreen"
            >
              <ShoppingCartIcon className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 block h-5 w-5 rounded-full bg-brand-gold text-white text-xs flex items-center justify-center ring-2 ring-brand-green">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
        {/* Mobile Nav */}
        <nav className="sm:hidden flex justify-around items-center pb-3 border-t border-brand-lightgreen/50">
          <NavLink page="home">Home</NavLink>
          <NavLink page="about">About Us</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
