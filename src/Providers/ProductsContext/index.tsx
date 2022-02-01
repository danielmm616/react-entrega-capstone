import { useToast } from "@chakra-ui/react";
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
  img: string;
  id: number;
}

const ProductsContext = createContext<ProductsContextData>(
  {} as ProductsContextData
);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const { authToken } = useAuth();
  const [products, setProducts] = useState<ProductsData[]>([]);
  const toast = useToast();
  useEffect(() => {
    api.get("/products").then((response) => setProducts(response.data));
  }, []);
  const token = localStorage.getItem("@ArteSana:token");
  const userId = Number(localStorage.getItem("@userId"));
  const registerProducts = (product: ProductsData) => {
    const { name, category, price, img, id } = product;
    const corpo = { name, category, price, img, id, userId };
    api
      .post("/products", corpo, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) =>
        toast({
          position: "top",
          title: "Produto cadastrado!",
          status: "success",
          duration: 3000,
          isClosable: true,
        })
      )
      .catch((_) =>
        toast({
          position: "top",
          title: "Não foi possível cadastrar seu produto!",
          status: "error",
          duration: 3000,
          isClosable: true,
        })
      );
  };

  const editProducts = (product: ProductsData) => {
    api
      .patch("/products", product, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((_) =>
        toast({
          position: "top",
          title: "Sucesso ao editar!",
          status: "success",
          duration: 3000,
          isClosable: true,
        })
      )
      .catch((_) =>
        toast({
          position: "top",
          title: "Erro ao editar!",
          status: "error",
          duration: 3000,
          isClosable: true,
        })
      );
  };

  const deleteProducts = (id: number) => {
    api
      .delete(`/products/${id}`)
      .then((_) =>
        toast({
          position: "top",
          title: "Produto deletado!",
          status: "success",
          duration: 3000,
          isClosable: true,
        })
      )
      .catch((_) =>
        toast({
          position: "top",
          title: "Não foi possível remover!",
          status: "error",
          duration: 3000,
          isClosable: true,
        })
      );
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
