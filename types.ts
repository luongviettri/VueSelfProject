// src/types.ts or stores/types.ts
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}
interface Cart {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface State {
  products: Product[];
  cart: Cart[];
}

export type { Product, Cart, State };
