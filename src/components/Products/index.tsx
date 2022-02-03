import { useProducts } from "../../Providers/ProductsContext";
import { useCart } from "../../Providers/CartContext";

import { Box, Image, Flex, Stat, StatNumber, Button } from "@chakra-ui/react";

const ProductAddToCart = () => {
  const { products } = useProducts();
  const { addCart } = useCart();

  return (
    <>
      <Box
        m="25px auto"
        display="flex"
        flexWrap="wrap"
        flexDirection="row"
        justifyContent="space-evenly"
        maxW="1000px"
        data-testid="products-element"
      >
        {products.map((produto) => (
          <Box
            background="#E5E5E5"
            boxShadow="7px 7px 7px 0px rgba(0,0,0,0.22)"
            h="280px"
            w="200px"
            rounded="lg"
            m="15px"
            padding-bottom="2px"
            key={produto.name}
            color="green.200"
            fontWeight={800}
          >
            {produto.name}
            <Box display="flex" justifyContent="center" alignItems="center">
              <Image
                background="#fff"
                mt="15px"
                mb="5px"
                borderRadius="50%"
                boxSize="120px"
                src={produto.img}
                alt={""}
              />
            </Box>
            <Stat m="10px">
              <StatNumber>R$ {produto.price}</StatNumber>
            </Stat>

            <Button
              _hover={{ bg: "green.300" }}
              height="53px"
              borderRadius="0 0 7px 7px"
              color="white"
              width="200px"
              mt="7px"
              onClick={() => addCart(produto)}
              bg="green.200"
            >
              Adicionar
            </Button>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default ProductAddToCart;
