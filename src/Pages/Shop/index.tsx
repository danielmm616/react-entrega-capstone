import { Flex } from "@chakra-ui/react";
import CartC from "../../components/CartC";
import HeaderC from "../../components/HeaderC";
import ProductAddToCart from "../../components/Products";

const Shop = () => {
  return (
    <>
      <HeaderC />
      <Flex m={[8, 16]}>
        <ProductAddToCart />
        <CartC />
      </Flex>
    </>
  );
};
export default Shop;
