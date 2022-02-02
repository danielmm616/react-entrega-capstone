import { Avatar, Box, Center, Flex, Icon, Text } from "@chakra-ui/react";
import { useState } from "react";

import { useCart } from "../../Providers/CartContext";

import { BsTrashFill } from "react-icons/bs";

interface ProductsData {
  name: string;
  category: string;
  price: number;
  quantity: number;
  img: string;
  id: number;
}

const CardCartC = ({ product }: { product: ProductsData }) => {
  const { removeProducts } = useCart();
  // const CardCartC = ({ name, quantity = 1, img }: ProductsData) => {
  const [count, setCount] = useState<number>(1);

  return (
    <>
      <Flex
        w={"260px"}
        m={"auto"}
        justifyContent={"space-between"}
        alignItems={"center"}
        borderBottom={"solid"}
        borderColor={"brown.200"}
        borderBottomWidth={"1px"}
      >
        <Avatar src={product.img} m={2} />

        <Box>
          <Text color={"green.300"} mb={2}>
            {product.name}
          </Text>
          <Center>
            <Center
              as="button"
              p={2}
              h={2}
              borderRadius={4}
              bg={"#E71D36"}
              color={"cream.100"}
              _hover={{ bg: "#d90429" }}
              onClick={() => {
                count > 1 && setCount(count - 1);
                product.quantity = count;
              }}
            >
              -
            </Center>
            <Text mx={3} color={"brown.300"}>
              {count}
            </Text>
            <Center
              as="button"
              p={2}
              h={2}
              borderRadius={4}
              bg={"green.200"}
              color={"cream.100"}
              _hover={{ bg: "green.300" }}
              onClick={() => {
                setCount(count + 1);
                product.quantity = count;
              }}
            >
              +
            </Center>
          </Center>
        </Box>

        <Icon
          as={BsTrashFill}
          cursor={"pointer"}
          color={"brown.300"}
          boxSize={6}
          ml={14}
          onClick={() => {
            removeProducts(product);
          }}
        />
      </Flex>
    </>
  );
};

export default CardCartC;
