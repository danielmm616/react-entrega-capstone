import { Box, Text, Flex } from "@chakra-ui/react";
import ButtonC from "../ButtonC";
import { useHistory } from "react-router-dom";
import CardCartC from "../CardCartC";
import { ReactNode } from "react";
import { useCart } from "../../Providers/CartContext";

interface CartCProps {
  children: ReactNode;
}

interface ProductsData {
  name: string;
  category: string;
  price: number;
  quantity: number;
  img: string;
}

const CartC = ({ children }: CartCProps) => {
  const { cartProducts } = useCart();
  const history = useHistory();
  return (
    <Box
      color="white"
      w="300px"
      h="450px"
      bg="brown.300"
      borderRadius="10px"
      boxShadow="7px 7px 5px 0px rgba(0,0,0,0.22)"
    >
      <Text p="10px">Compra atual</Text>
      <Box
        w="300px"
        h="300px"
        bg="gray.100"
        overflowY="auto"
        sx={{
          "&::-webkit-scrollbar": {
            width: "16px",
            borderRadius: "8px",
            backgroundColor: `gray.100`,
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: `green.200`,
            borderRadius: "8px",
          },
        }}
      >
        {children}
        {cartProducts.map((product) => (
          <CardCartC product={product} />
        ))}
      </Box>
      <Flex mb="20px" justify="space-between" p="0 10px">
        <Text>Total</Text>
        <Text>
          {cartProducts.reduce(
            (acc, product) =>
              acc + Number(product.price) * Number(product.quantity),
            0
          )}{" "}
          R$
        </Text>
      </Flex>

      <ButtonC
        onClick={() => history.push("/cart")}
        text="Ir para o carrinho"
        bg="green.200"
      />
    </Box>
  );
};

export default CartC;
