import CardSeller from "../../components/CardSeller";
import { Redirect } from "react-router-dom";
import HeaderC from "../../components/HeaderC";
import { Text, Flex } from "@chakra-ui/react";
import CartC from "../../components/CartC";
import { useProducts } from "../../Providers/ProductsContext";

const Seller = () => {
  const token = localStorage.getItem("@ArteSana:token");
  const list = localStorage.getItem("Cart") || "";
  const cartList = list ? JSON.parse(list) : [];
  const { sellers } = useProducts();

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
          {sellers.map((seller) => (
            <CardSeller
              name={seller.name}
              state={seller.state}
              city={seller.name}
            />
          ))}
          <CartC list={cartList} />
        </Flex>
      </Flex>
    </>
  );
};

export default Seller;
