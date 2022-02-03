import { Box, Text, Flex, Center } from "@chakra-ui/react";
import ButtonC from "../ButtonC";
import { useHistory } from "react-router-dom";
import CardCartC from "../CardCartC";
import { useCart } from "../../Providers/CartContext";

interface Product {
  name: string;
  quantity: number;
  img: string;
  category: string;
  price: number;
  id: number;
}

interface CartCProps {
  list: Product[];
}

const CartC = ({ list }: CartCProps) => {
  const history = useHistory();
  const { cart } = useCart();

  return (
    <Box
      display={["none", "none", "none", "inherit"]}
      position="fixed"
      left="70vw"
      bottom="5vh"
    >
      <Box
        color="white"
        w="300px"
        h="450px"
        bg="brown.300"
        borderRadius="10px"
        boxShadow="7px 7px 7px 0px rgba(0,0,0,0.22)"
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
          {cart.length === 0 ? (
            <Center>
              <Text color="green.300" fontSize="2xl" w="60%" mt="60px">
                Nada no carrinho... compre algo bom e caseiro!
              </Text>
            </Center>
          ) : (
            cart.map((product) => <CardCartC product={product} />)
          )}
        </Box>
        <Flex mb="20px" justify="space-between" p="0 10px">
          <Text>Total:</Text>
          <Text>
            R${" "}
            {cart
              .reduce(
                (acc, element) =>
                  acc +
                  Number(String(element.price).replace(",", ".")) *
                    Number(element.quantity),
                0
              )
              .toFixed(2)}
          </Text>
        </Flex>

        <ButtonC
          onClick={() => history.push("/cart")}
          text="Ir para o carrinho"
          bg="green.200"
        />
      </Box>
    </Box>
  );
};

export default CartC;
