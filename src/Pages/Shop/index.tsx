import { Flex } from "@chakra-ui/react";
import CartC from "../../components/CartC";
import FormProducts from "../../components/FormProducts";
import HeaderC from "../../components/HeaderC";
import ProductAddToCart from "../../components/Products";
import ProdutsEdits from "../../components/ProdutsEdits";

const Shop = () => {
  return (
    <>
      <HeaderC />
      <br />
      <FormProducts />
      <Flex m={[8, 16]}>
        <ProductAddToCart />
        <CartC>{}</CartC>
      </Flex>
      <ProdutsEdits />
    </>
  );
};
export default Shop;
