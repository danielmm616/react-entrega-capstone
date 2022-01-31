import { Box, Text, Flex } from "@chakra-ui/react";
import ButtonC from "../ButtonC";
import { useHistory } from "react-router-dom";

const CartC = () => {

    const history = useHistory()
  return (
    <Box color="white" w="300px" h="450px" bg="brown.300" borderRadius="10px">
      <Text p="10px">Compra atual</Text>
      <Box w="300px" h="300px" bg="gray.100"></Box>
      <Flex mb="20px">
        <Text>Total</Text>
        <Text>R$</Text>
      </Flex>

      <ButtonC onClick={()=> history.push('/cart')} text="Ir para o carrinho" bg="green.200" />
    </Box>
  );
};

export default CartC;
