export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  featured: boolean;
  quantity: number;
  selectedSize?: string;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
}