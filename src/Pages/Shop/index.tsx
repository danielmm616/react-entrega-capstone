import { Flex, Text } from "@chakra-ui/react";
import CartC from "../../components/CartC";
import HeaderC from "../../components/HeaderC";
import ProductAddToCart from "../../components/Products";
import { Redirect } from "react-router-dom";
import { useCart } from "../../Providers/CartContext";

const Shop = () => {
  const token = localStorage.getItem("@ArteSana:token");
  const { cartProducts } = useCart();

  if (!token) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <HeaderC />
      <Text fontWeight="600" fontSize="3xl" mt="10px">
        Escolha seus produtos
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
          <ProductAddToCart />
        </Flex>
        <CartC list={cartProducts} />
      </Flex>
    </>
  );
};

export default Shop;
