import CardSeller from "../../components/CardSeller";
import { Redirect } from "react-router-dom";
import { useAuth } from "../../Providers/AuthContext";
import HeaderC from "../../components/HeaderC";
import { Text, Box, Flex, Stack, Center } from "@chakra-ui/react";
import CartC from "../../components/CartC";
import { useCart } from "../../Providers/CartContext";

const Seller = () => {
  const token = localStorage.getItem("@ArteSana:token");
  const { user } = useAuth();
  const { cartProducts } = useCart();

  if (!token) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <HeaderC />
      <Text fontSize="3xl" mt="10px">
        Escolha seu artesão
      </Text>
      <Flex w="95vw" mt="10px" alignItems="center">
        <Flex
          w={["90vw", "90vw", "90vw", "60vw"]}
          h="100%"
          ml={["5vw", "20px"]}
          mr={["0", "20px"]}
          minW="300px"
          wrap="wrap"
          justify="center"
          align="center"
        >
          <CardSeller name={user.name} state={user.state} city={user.city} />
          <CardSeller name={user.name} state={user.state} city={user.city} />
          <CardSeller name={user.name} state={user.state} city={user.city} />
          <CardSeller name={user.name} state={user.state} city={user.city} />
          <CardSeller name={user.name} state={user.state} city={user.city} />
          <CardSeller name={user.name} state={user.state} city={user.city} />
          <CardSeller name={user.name} state={user.state} city={user.city} />
          <CardSeller name={user.name} state={user.state} city={user.city} />

          <CartC list={cartProducts} />
        </Flex>
      </Flex>
    </>
  );
};

export default Seller;
