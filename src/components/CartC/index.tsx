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
  id?: number;
}

interface CartCProps {
  list: Product[];
}

const CartC = ({ list }: CartCProps) => {
  const history = useHistory();
  const { cartProducts } = useCart();

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
          {list.length === 0 ? (
            <Center>
              <Text color="green.300" fontSize="2xl" w="60%" mt="60px">
                Nada no carrinho... compre algo bom e caseiro!
              </Text>
            </Center>
          ) : (
            list.map((product) => (
              <CardCartC
                product={product}
                // name={product.name}
                // quantity={1}
                // img={product.img}
                // category={product.category}
                // price={product.price}
                // key={product.name}
              />
            ))
          )}
        </Box>
        <Flex mb="20px" justify="space-between" p="0 10px">
          <Text>Total</Text>
          <Text>
            {list.reduce(
              (acc, product) => acc + product.price * product.quantity,
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
    </Box>
  );
};

export default CartC;
