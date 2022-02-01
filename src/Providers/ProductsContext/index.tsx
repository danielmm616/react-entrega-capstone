import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import api from "../../services/Axios";
import { useAuth } from "../AuthContext";

interface ProductsContextData {
  products: ProductsData[];
  registerProducts: (product: ProductsData) => void;
  editProducts: (product: ProductsData) => void;
  deleteProducts: (id: number) => void;
}

interface ProductsProviderProps {
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

const ProductsContext = createContext<ProductsContextData>(
  {} as ProductsContextData
);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const { authToken } = useAuth();
  const [products, setProducts] = useState<ProductsData[]>([]);

  useEffect(() => {
    api.get("/products").then((response) => setProducts(response.data));
  }, []);

  const registerProducts = (product: ProductsData) => {
    api.post("/products", product, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
  };

  const editProducts = (product: ProductsData) => {
    api.patch("/products", product, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
  };

  const deleteProducts = (id: number) => {
    api.delete(`/products/${id}`);
  };

  return (
    <ProductsContext.Provider
      value={{ products, registerProducts, editProducts, deleteProducts }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
