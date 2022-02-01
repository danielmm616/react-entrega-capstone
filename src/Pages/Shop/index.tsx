import { Redirect } from "react-router-dom";
import ProductAddToCart from "../../components/Products";

const Shop = () => {
  const token = localStorage.getItem("@ArteSana:token");

  if (!token) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <strong>Produtos</strong>
      <ProductAddToCart />
    </>
  );
};
export default Shop;
