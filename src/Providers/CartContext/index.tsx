import { createContext, useContext, useState, ReactNode } from "react";
import { useToast } from "@chakra-ui/react";

interface ProductsContextData {
  cartProducts: ProductsData[];
  addProducts: (product: ProductsData) => void;
  removeProducts: (product: ProductsData) => void;

  cart: Product[];
  addCart: (product: Product) => void;
  addQuantity: (product: Product) => void;
  subQuantity: (product: Product) => void;
  subProducts: (product: Product) => void;
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

interface Product {
  name: string;
  price: number;
  category: string;
  id: number;
  img: string;
  quantity: number;
  comments?: Comment[];
}

const CartContext = createContext<ProductsContextData>(
  {} as ProductsContextData
);

export const CartProvider = ({ children }: CartProviderProps) => {
  const list = localStorage.getItem("Cart") || "";
  const cartList = list ? JSON.parse(list) : [];
  const [cartProducts, setCartProducts] = useState<ProductsData[]>(cartList);
  const toast = useToast();

  // COMEČA AS MUDAČAS AQUI

  const [cart, setCart] = useState<Product[]>(
    JSON.parse(localStorage.getItem("@Arte:cart") || "[]")
  );

  const addCart = (newProduct: Product) => {
    const find = cart.find((element) => element.name === newProduct.name);

    if (!find) {
      newProduct.quantity = 1;
      setCart([...cart, newProduct]);
    } else {
      addQuantity(newProduct);
    }
  };

  const subProducts = (searchProduct: Product) => {
    let copyArr = [...cart];
    setCart(copyArr.filter((element) => element.name !== searchProduct.name));
  };

  const addQuantity = (searchProduct: Product) => {
    cart.find((element) => {
      if (element.name === searchProduct.name) {
        element.quantity++;
      }
    });
    setCart([...cart]);
  };

  const subQuantity = (searchProduct: Product) => {
    let copyArr = [...cart];
    cart.find((element) => {
      if (element.name === searchProduct.name) {
        if (searchProduct.quantity > 0) {
          element.quantity--;
          if (element.quantity === 0) {
            copyArr = copyArr.filter(
              (element) => element.name !== searchProduct.name
            );
          }
        }
      }
    });
    setCart([...copyArr]);
  };

  // TERMINA AQUI AS MUDANČAS

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

  localStorage.setItem("@Arte:cart", JSON.stringify(cart));
  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addProducts,
        removeProducts,
        cart,
        addCart,
        addQuantity,
        subQuantity,
        subProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
