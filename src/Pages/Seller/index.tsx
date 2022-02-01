import CardSeller from "../../components/CardSeller";
import { Redirect } from "react-router-dom";
import { useAuth } from "../../Providers/AuthContext";

const Seller = () => {
  const token = localStorage.getItem("@ArteSana:token");
  const { user } = useAuth();

  if (!token) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <h2>Vendedores</h2>

      <CardSeller name={user.name} state={user.state} city={user.city} />
    </>
  );
};

export default Seller;
