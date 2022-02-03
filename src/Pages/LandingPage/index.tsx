import {
  Box,
  Image,
  Flex,
  Center,
  Text,
  VStack,
  Stack,
} from "@chakra-ui/react";
import CompleteLogo from "../../assets/ArteSanaLogin.png";
import LandingPageImage from "../../assets/Hortifruti.jpg";
import ButtonC from "../../components/ButtonC";
import { Redirect, useHistory } from "react-router-dom";

const LandingPage = () => {
  const history = useHistory();
  const token = localStorage.getItem("@ArteSana:token");

  if (token) {
    return <Redirect to="/shop" />;
  }

  return (
    <Box h="100vh" w="100vw">
      <Box h={["", "30vh"]}>
        <Image
          width="100vw"
          height={[0, 200]}
          objectFit="cover"
          src={LandingPageImage}
          alt="Frutas, verduras, variedades"
        />
      </Box>
      <Center>
        <Flex
          direction={["column-reverse", "row"]}
          align="center"
          justify="center"
          h={["", "50vh"]}
        >
          <Box boxSize={[250, "25vw"]} minW="250px">
            <Image
              src={CompleteLogo}
              alt="Logo Arte Sana"
              filter={"drop-shadow(5px 5px 5px #366b1e7f);"}
            />
          </Box>
          <VStack>
            <Text
              fontSize={["2xl", "1xl", "2xl", "3xl"]}
              maxWidth={["320px", "40vw"]}
              mt={[2, 10]}
            >
              Bem-vindo/a ao melhor lugar para comprar seus produtos artesanais
              favoritos!
            </Text>
          </VStack>
        </Flex>
      </Center>
      <Flex justify="center" mt={["25px", "4vh"]}>
        <Stack spacing={[7, 20]} direction={["column", "row"]}>
          <ButtonC
            onClick={() => history.push("/login")}
            text="Login"
            bg="green.200"
            minW="120px"
          />
          <ButtonC
            onClick={() => history.push("/register")}
            text="Cadastro"
            bg="green.200"
            minW="120px"
          />
        </Stack>
      </Flex>
      <Text
        onClick={() => history.push("/aboutus")}
        cursor={"pointer"}
        marginTop={"30px"}
        _hover={{ textDecoration: "underline", color: "green.200" }}
      >
        Conheça o time Arte Sana
      </Text>
    </Box>
  );
};

export default LandingPage;
