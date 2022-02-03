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
      <FormProducts />
      <ProdutsEdits />
    </>
  );
};

export default RegisterProducts;
