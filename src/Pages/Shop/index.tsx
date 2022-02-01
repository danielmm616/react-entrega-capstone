import { Flex } from "@chakra-ui/react";
import CartC from "../../components/CartC";
import FormProducts from "../../components/FormProducts";
import HeaderC from "../../components/HeaderC";
import ProductAddToCart from "../../components/Products";
import ProdutsEdits from "../../components/ProdutsEdits";
import { Redirect } from "react-router-dom";

const Shop = () => {
  const token = localStorage.getItem("@ArteSana:token");
  if (!token) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <HeaderC />
      <br />
      <FormProducts />
      <Flex m={[8, 16]}>
        <ProductAddToCart />
      </Flex>
      <ProdutsEdits />
    </>
  );
};

export default Shop;
