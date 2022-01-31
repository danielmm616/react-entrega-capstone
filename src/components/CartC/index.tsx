import { Box, Text, Flex } from "@chakra-ui/react";
import ButtonC from "../ButtonC";
import { useHistory } from "react-router-dom";
import CardCartC from "../CardCartC";

const CartC = () => {
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
      <Box w="300px" h="300px" bg="gray.100">
        <CardCartC />
      </Box>
      <Flex mb="20px">
        <Text>Total</Text>
        <Text>R$</Text>
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
