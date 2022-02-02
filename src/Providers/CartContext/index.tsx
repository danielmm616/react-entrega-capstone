import { createContext, useContext, useState, ReactNode } from "react";
import { useToast } from "@chakra-ui/react";

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
  quantity: number;
  img: string;
  id: number;
}

const CartContext = createContext<ProductsContextData>(
  {} as ProductsContextData
);

export const CartProvider = ({ children }: CartProviderProps) => {
  const list = localStorage.getItem("Cart") || "";
  const cartList = list ? JSON.parse(list) : [];
  const [cartProducts, setCartProducts] = useState<ProductsData[]>(cartList);
  const toast = useToast();

  const addProducts = (product: ProductsData) => {
    // setCartProducts([...cartProducts, product]);
    setCartProducts([...cartProducts, { ...product, quantity: 1 }]);
    localStorage.setItem(
      "Cart",
      JSON.stringify([...cartProducts, { ...product, quantity: 1 }])
    );
    toast({
      position: "top",
      title: "Produto adicionado ao carrinho!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const removeProducts = (product: ProductsData) => {
    const cart = cartProducts.filter((item) => product.name !== item.name);
    setCartProducts(cart);
    localStorage.setItem("Cart", JSON.stringify(cart));
    toast({
      position: "top",
      title: "Produto removido do carrinho!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <CartContext.Provider value={{ cartProducts, addProducts, removeProducts }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
