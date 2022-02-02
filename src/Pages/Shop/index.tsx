import { Flex } from "@chakra-ui/react";
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
      <br />
      <Flex m={[8, 16]}>
        <ProductAddToCart />
        <CartC list={cartProducts} />
      </Flex>
    </>
  );
};

export default Shop;
