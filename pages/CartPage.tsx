
import React from 'react';
import { useCart } from '../contexts/CartContext';
import { CONTACT_INFO } from '../constants';
// FIX: Imported WhatsAppIcon which is used in the checkout button.
import { MinusIcon, PlusIcon, TrashIcon, WhatsAppIcon } from '../components/Icons';
import { Page } from '../types';

interface CartPageProps {
  setPage: (page: Page) => void;
}

const CartPage: React.FC<CartPageProps> = ({ setPage }) => {
  const { cartItems, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    let orderDetails = 'Hello Muqaddas Traders, I would like to place an order:\n\n';
    cartItems.forEach((item) => {
      orderDetails += `${item.name} - ${item.quantity} x Rs. ${item.price} = Rs. ${item.quantity * item.price}\n`;
    });
    orderDetails += `\n*Total: Rs. ${totalPrice}*`;

    const encodedMessage = encodeURIComponent(orderDetails);
    const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    clearCart();
  };

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-brand-green mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-6">Looks like you haven't added anything to your cart yet.</p>
        <button
          onClick={() => setPage('home')}
          className="bg-brand-green text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-lightgreen transition-colors"
        >
          Start Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-brand-green">Your Shopping Cart</h1>
        <button onClick={clearCart} className="text-sm text-red-500 hover:underline">Clear Cart</button>
      </div>

      <div className="bg-white rounded-lg shadow-md divide-y divide-gray-200">
        {cartItems.map((item) => (
          <div key={item.id} className="p-4 flex items-center justify-between gap-4">
            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md"/>
            <div className="flex-grow">
              <h3 className="font-semibold text-brand-green">{item.name}</h3>
              <p className="text-sm text-gray-500">Rs. {item.price}</p>
            </div>
            <div className="flex items-center gap-2 border border-gray-200 rounded-lg p-1">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 text-gray-600 hover:text-brand-green">
                <MinusIcon className="w-4 h-4" />
              </button>
              <span className="w-8 text-center font-semibold">{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 text-gray-600 hover:text-brand-green">
                <PlusIcon className="w-4 h-4" />
              </button>
            </div>
            <div className="font-bold text-brand-green w-20 text-right">
              Rs. {item.price * item.quantity}
            </div>
            <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 p-2">
              <TrashIcon className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-xl font-bold text-brand-green">
          Total: <span className="text-2xl text-brand-gold">Rs. {totalPrice}</span>
        </div>
        <button
          onClick={handleCheckout}
          className="w-full sm:w-auto flex items-center justify-center gap-3 bg-brand-gold text-brand-green font-bold py-3 px-8 rounded-lg hover:bg-yellow-500 transition-transform hover:scale-105 text-lg"
        >
            <WhatsAppIcon className="w-6 h-6"/>
            <span>Checkout via WhatsApp</span>
        </button>
      </div>
    </div>
  );
};

export default CartPage;
