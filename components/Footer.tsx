
import React from 'react';
import { CONTACT_INFO } from '../constants';
import { WhatsAppIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-green text-brand-beige">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="max-w-md">
            <h3 className="text-xl font-bold text-white mb-2">Muqaddas Traders</h3>
            <p className="text-sm text-brand-beige/80">{CONTACT_INFO.address}</p>
            <p className="text-sm text-brand-beige/80 mt-1">WhatsApp: {CONTACT_INFO.phone}</p>
          </div>
          <div className="flex flex-col items-center">
             <h4 className="font-semibold text-white mb-2">Get Daily Deals!</h4>
            <a
              href={CONTACT_INFO.communityLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-brand-gold text-brand-green font-bold py-2 px-4 rounded-full hover:bg-yellow-500 transition-transform hover:scale-105"
            >
              <WhatsAppIcon className="h-5 w-5" />
              <span>Join WhatsApp Community</span>
            </a>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-brand-lightgreen/50 text-center text-xs text-brand-beige/60">
          <p>&copy; {new Date().getFullYear()} Muqaddas Traders. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
