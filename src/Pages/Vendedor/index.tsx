import { Redirect } from "react-router-dom";
import CardProdutor from "../../components/CardProdutor";

import { useAuth } from "../../Providers/AuthContext";

const Vendedor = () => {
  const token = localStorage.getItem("@ArteSana:token");

  const { user } = useAuth();

  if (!token) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <h2>Vendedores</h2>

      <CardProdutor name={user.name} state={user.state} city={user.city} />
    </>
  );
};

export default Vendedor;
