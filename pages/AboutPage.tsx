
import React from 'react';
import { CONTACT_INFO } from '../constants';
import { LocationIcon, PhoneIcon, WhatsAppIcon } from '../components/Icons';

const InfoCard: React.FC<{ icon: React.ReactNode, title: string, children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
        <div className="flex-shrink-0 text-brand-green">{icon}</div>
        <div>
            <h3 className="text-lg font-semibold text-brand-green mb-1">{title}</h3>
            <div className="text-gray-600">{children}</div>
        </div>
    </div>
);

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-brand-green mb-8 text-center">About & Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InfoCard icon={<LocationIcon className="w-8 h-8"/>} title="Our Address">
          <p>{CONTACT_INFO.address}</p>
        </InfoCard>

        <InfoCard icon={<PhoneIcon className="w-8 h-8"/>} title="WhatsApp Contact">
          <p>You can reach us directly on WhatsApp for any queries.</p>
          <a href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="text-brand-lightgreen font-semibold hover:underline">
            {CONTACT_INFO.phone}
          </a>
        </InfoCard>

        <div className="md:col-span-2">
            <InfoCard icon={<WhatsAppIcon className="w-8 h-8"/>} title="Join Our Community">
            <p className="mb-4">
                Be the first to know about our daily deals, special offers, and new arrivals. Join our exclusive WhatsApp community!
            </p>
            <a
                href={CONTACT_INFO.communityLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand-gold text-brand-green font-bold py-2 px-5 rounded-lg hover:bg-yellow-500 transition-colors"
            >
                Join Now
            </a>
            </InfoCard>
        </div>
      </div>

       <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-brand-green mb-4">Our Commitment</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
                At Muqaddas Traders, we are committed to providing our community with the highest quality groceries at the most competitive prices. Your satisfaction is our top priority.
            </p>
        </div>

    </div>
  );
};

export default AboutPage;
