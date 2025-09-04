
import { Category, Product } from './types';

export const CATEGORIES: Category[] = [
  'All',
  'Rice',
  'Flour',
  'Milk & Dairy',
  'Oil & Ghee',
  'Sugar & Tea',
  'Household Essentials',
];

export const PRODUCTS: Product[] = [
  { id: 1, name: 'Basmati Rice', price: 250, image: 'https://picsum.photos/seed/rice/400', category: 'Rice', unit: 'kg' },
  { id: 2, name: 'Sella Rice', price: 220, image: 'https://picsum.photos/seed/sella/400', category: 'Rice', unit: 'kg' },
  { id: 3, name: 'Whole Wheat Flour', price: 120, image: 'https://picsum.photos/seed/flour/400', category: 'Flour', unit: 'kg' },
  { id: 4, name: 'Fine Flour (Maida)', price: 140, image: 'https://picsum.photos/seed/maida/400', category: 'Flour', unit: 'kg' },
  { id: 5, name: 'Fresh Milk', price: 180, image: 'https://picsum.photos/seed/milk/400', category: 'Milk & Dairy', unit: 'litre' },
  { id: 6, name: 'Yogurt', price: 150, image: 'https://picsum.photos/seed/yogurt/400', category: 'Milk & Dairy', unit: 'kg' },
  { id: 7, name: 'Cooking Oil', price: 550, image: 'https://picsum.photos/seed/oil/400', category: 'Oil & Ghee', unit: 'litre' },
  { id: 8, name: 'Pure Ghee', price: 900, image: 'https://picsum.photos/seed/ghee/400', category: 'Oil & Ghee', unit: 'kg' },
  { id: 9, name: 'White Sugar', price: 160, image: 'https://picsum.photos/seed/sugar/400', category: 'Sugar & Tea', unit: 'kg' },
  { id: 10, name: 'Tea Leaves', price: 700, image: 'https://picsum.photos/seed/tea/400', category: 'Sugar & Tea', unit: '250g' },
  { id: 11, name: 'Dishwash Soap', price: 100, image: 'https://picsum.photos/seed/soap/400', category: 'Household Essentials', unit: 'bar' },
  { id: 12, name: 'Laundry Detergent', price: 400, image: 'https://picsum.photos/seed/detergent/400', category: 'Household Essentials', unit: 'kg' },
  { id: 13, name: 'Butter', price: 500, image: 'https://picsum.photos/seed/butter/400', category: 'Milk & Dairy', unit: '200g' },
  { id: 14, name: 'Brown Sugar', price: 200, image: 'https://picsum.photos/seed/brownsugar/400', category: 'Sugar & Tea', unit: 'kg' },
];

export const FEATURED_PRODUCTS_IDS = [1, 3, 7, 5, 9];

export const CONTACT_INFO = {
  phone: '0321-5931123',
  whatsappNumber: '923215931123',
  address: 'Shop 32, Okhai Complex, Suparco Road, Mosamiyat, Karachi',
  communityLink: 'https://chat.whatsapp.com/yourcommunityinvite', // Replace with a real link
};
