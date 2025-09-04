
import React, { useState } from 'react';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CartPage from './pages/CartPage';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'cart':
        return <CartPage setPage={setCurrentPage} />;
      default:
        return <HomePage />;
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col font-sans bg-brand-beige/20">
        <Header setPage={setCurrentPage} currentPage={currentPage} />
        <main className="flex-grow container mx-auto px-4 py-6">
          {renderPage()}
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;
