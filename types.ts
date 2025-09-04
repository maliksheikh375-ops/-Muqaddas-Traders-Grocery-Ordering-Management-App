
export type Category = 'All' | 'Rice' | 'Flour' | 'Milk & Dairy' | 'Oil & Ghee' | 'Sugar & Tea' | 'Household Essentials';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: Category;
  unit: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export type Page = 'home' | 'about' | 'cart';
