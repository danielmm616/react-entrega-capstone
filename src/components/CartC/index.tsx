import { Box, Text, Flex } from "@chakra-ui/react";
import ButtonC from "../ButtonC";
import { useHistory } from "react-router-dom";
import CardCartC from "../CardCartC";
import { ReactNode } from "react";

interface CartCProps {
  children: ReactNode;
}

const CartC = ({ children }: CartCProps) => {
  
  const history = useHistory();

  return (
    <Box color="white" w="300px" h="450px" bg="brown.300" borderRadius="10px">
      <Text p="10px">Compra atual</Text>
      <Box w="300px" h="300px" bg="gray.100" overflowY="auto"
      sx={{
        '&::-webkit-scrollbar': {
          width: '16px',
          borderRadius: '8px',
          backgroundColor: `gray.100`,
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: `green.200`,
          borderRadius: '8px'
        },
      }}>
        {children}
      </Box>
      <Flex mb="20px" justify="space-between" p="0 10px">
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
