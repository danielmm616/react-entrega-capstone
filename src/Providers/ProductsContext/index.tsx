import { useToast } from "@chakra-ui/react";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import api from "../../services/Axios";

interface ProductsContextData {
  products: ProductsData[];
  registerProducts: (product: ProductsData) => void;
  editProducts: (product: ProductsData) => void;
  deleteProducts: (id: number) => void;
  sellers: SellersData[];
  getUserId: (id:number) => void;
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

interface SellersData {
  email: string;
  password: string;
  name: string;
  state: string;
  seller: boolean;
  id: number;
}

const ProductsContext = createContext<ProductsContextData>(
  {} as ProductsContextData
);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<ProductsData[]>([]);
  const [sellers, setSellers] = useState<SellersData[]>([]);
  const toast = useToast();
  const [productsUserId, setProductsUserId] = useState(0)

  useEffect(() => {
    api.get(`/products?userId=${productsUserId}`).then((response) => setProducts(response.data));
  }, [productsUserId]);

  const getUserId = (id: number) => {
    setProductsUserId(id)
  }

  useEffect(() => {
    api
      .get("/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setSellers(response.data));
  });
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
    const body = { ...product, userId };
    console.log(body);
    api
      .patch(`/products/${product.id}`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
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
      .delete(`/products/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
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
      value={{
        products,
        registerProducts,
        editProducts,
        deleteProducts,
        sellers,
        getUserId
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
