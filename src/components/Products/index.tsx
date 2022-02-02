import { useProducts } from "../../Providers/ProductsContext";
import { useCart } from "../../Providers/CartContext";
// import ButtonC from "../ButtonC"

import { Box, Image, Flex, Stat, StatNumber, Button } from "@chakra-ui/react";

const ProductAddToCart = () => {
  const { products } = useProducts();
  const { addProducts } = useCart();

  return (
    <>
      <Box
        h="100vh"
        m="25px auto"
        display="flex"
        flexWrap="wrap"
        flexDirection="row"
        w="200px"
      >
        <Flex
          boxShadow="7px 7px 7px 0px rgba(0,0,0,0.22)"
          rounded="lg"
          bg="white"
          h="290px"
          w="200px"
          justifyContent="center"
          background="#E5E5E5"
          p={3}
          color="black"
        >
          {products.map((produto) => (
            <Box
              padding-bottom="2px"
              key={produto.name}
              color="green.200"
              fontWeight={800}
            >
              {produto.name}
              <Box display="flex" justifyContent="center" alignItems="center">
                <Image
                  mt="10px"
                  mb="10px"
                  borderRadius="50%"
                  boxSize="120px"
                  src={produto.img}
                  alt={""}
                />
              </Box>
              <Stat m="10px">
                <StatNumber>R$ {produto.price.toFixed(2)}</StatNumber>
              </Stat>

              <Button
                _hover={{ bg: "green.300" }}
                height="53px"
                borderRadius="0 0 7px 7px"
                color="white"
                width="200px"
                mt="5px"
                onClick={() => addProducts(produto)}
                bg="green.200"
              >
                Adicionar
              </Button>
            </Box>
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default ProductAddToCart;
