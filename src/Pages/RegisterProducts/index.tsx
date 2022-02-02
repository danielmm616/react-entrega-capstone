import ProdutsEdits from "../../components/ProdutsEdits";
import FormProducts from "../../components/FormProducts";
import { Redirect } from "react-router-dom";

const RegisterProducts = () => {
  const token = localStorage.getItem("@ArteSana:token");

  if (!token) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <h2>Register Produtos</h2>
      <br />
      <FormProducts />
      <ProdutsEdits />
    </>
  );
};

export default RegisterProducts;
