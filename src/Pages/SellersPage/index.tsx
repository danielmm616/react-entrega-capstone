import CardSeller from "../../components/CardSeller";
import { Redirect } from "react-router-dom";
import { useAuth } from "../../Providers/AuthContext";
import HeaderC from "../../components/HeaderC";
import { Text, Box, Flex, Stack, Center } from "@chakra-ui/react";
import CartC from "../../components/CartC";

const Seller = () => {
  const token = localStorage.getItem("@ArteSana:token");
  const { user } = useAuth();

  if (!token) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <HeaderC />
      <Text fontSize="2xl" mt="10px">
        Escolha seu artesão
      </Text>
      <Flex w='90vw' mt="30px" alignItems='center' >

      <Flex w={["90vw", "60vw"]}
            h='100%'
            ml={["5vw", "20px"]}
            mr={["0", '20px']}
            minW="300px"
            wrap='wrap'
            justify='center'
            align='center'
            >
              

      <CardSeller name={user.name} state={user.state} city={user.city} />
      </Flex>

            </Flex>
    </>
  );
};

export default Seller;
