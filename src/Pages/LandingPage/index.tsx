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
import { useHistory } from "react-router-dom";

const LandingPage = () => {
  const history = useHistory();
  return (
    <Box bg='cream.100' h='100vh' w='100vw'>
      <Box>
        <Image
          width="100vw"
          height={[0, 200]}
          objectFit="cover"
          src={LandingPageImage}
          alt="Frutas, verduras, variedades"
        />
      </Box>
      <Center>
        <Flex direction={["column-reverse", "row"]} align="center">
          <Box boxSize={[250, 300]}>
            <Image
              src={CompleteLogo}
              alt="Logo Arte Sana"
              filter={"drop-shadow(5px 5px 5px #366b1e7f);"}
            />
          </Box>
          <VStack>
            <Text fontSize="2xl" maxWidth="320px" mt={[14, 10]} >
              Bem-vindo/a ao melhor lugar para comprar seus produtos artesanais
              favoritos!
            </Text>
          </VStack>
        </Flex>
      </Center>
      <Flex justify="center" mt={["25px", "35px"]}>
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
    </Box>
  );
};

export default LandingPage;
