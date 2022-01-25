import { createContext, useContext, useState, ReactNode } from "react";

interface ProductsContextData {
  cartProducts: ProductsData[];
  addProducts: (product: ProductsData) => void;
  removeProducts: (product: ProductsData) => void;
}

interface CartProviderProps {
  children: ReactNode;
}

interface ProductsData {
  name: string;
  category: string;
  price: number;
  img: string;
}

const CartContext = createContext<ProductsContextData>(
  {} as ProductsContextData
);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartProducts, setCartProducts] = useState<ProductsData[]>([]);

  const addProducts = (product: ProductsData) => {
    setCartProducts([...cartProducts, product]);
  };

  const removeProducts = (product: ProductsData) => {
    const cart = cartProducts.filter((item) => product.name !== item.name);
    setCartProducts(cart);
  };

  return (
    <CartContext.Provider value={{ cartProducts, addProducts, removeProducts }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
