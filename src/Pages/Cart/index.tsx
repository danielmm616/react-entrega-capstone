import { Box, Text, Center, Flex, Stack } from "@chakra-ui/react";
import HeaderC from "../../components/HeaderC";
import { useCart } from "../../Providers/CartContext";
import ButtonC from "../../components/ButtonC";
import { Redirect, useHistory } from "react-router-dom";

const Cart = () => {
  const history = useHistory();
  const token = localStorage.getItem("@ArteSana:token");
  const { cartProducts } = useCart();

  if (!token) {
    return <Redirect to="/" />;
  }

  if (cartProducts.length === 1) {
    return (
      <Box bg="cream.100" w="100vw" h="100vh">
        <HeaderC />
        <Center fontSize="4xl">Carrinho</Center>
        <Flex direction="column" justify="center" align="center" mt="26vh">
          <Text fontSize="3xl" maxW="280px" mb="10px">
            Nada por aqui...
          </Text>
          <ButtonC
            onClick={() => history.push("/vendedor")}
            text="Ir às compras"
            bg="green.200"
          />
        </Flex>
      </Box>
    );
  } else {
    return (
      <Box bg="cream.100" w="100vw" h="100vh">
        <HeaderC />
        <Center fontSize="4xl">Carrinho</Center>
        <Flex
          direction={["column", "row"]}
          justify="center"
          align={["center", "start"]}
        >
          <Box
            bg="gray.100"
            borderRadius="20px"
            w={["90vw", "60vw"]}
            h={["50vh", "65vh"]}
            ml={["0", "50px"]}
            mt="20px"
            minW="300px"
            overflow="auto"
            boxShadow="xl"
          >
            Produtos
          </Box>
          <Box
            w="210px"
            borderRadius="20px"
            bg="gray.100"
            m={["20px", "60px"]}
            h="100%"
            p="10px"
            boxShadow="lg"
          >
            <Stack spacing={8}>
              <Text fontSize="2xl">Total</Text>
              <Text fontSize="2xl">R$</Text>
              <ButtonC text="Finalizar compra" bg="green.200" />
            </Stack>
          </Box>
        </Flex>
      </Box>
    );
  }
};

export default Cart;
