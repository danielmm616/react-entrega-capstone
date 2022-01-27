import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormErrorMessage,
  Input,
  Button,
  Text,
  Image,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useAuth } from "../../Providers/AuthContext";
import ArteSanaLogin from "../../assets/ArteSanaLogin.png";

interface UserData {
  email: string;
  password: string;
}

const LoginPage = () => {
  const { logIn } = useAuth();

  const schema = yup.object().shape({
    email: yup.string().email("Invalid email.").required("Email required."),
    password: yup.string().required("Password required.").min(6),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (user: UserData) => {
    logIn(user);
  };

  return (
    <Flex
      backgroundImage={
        "linear-gradient(to right, #F7F0F5 0, #F7F0F5 70%, #40916C 30%)"
      }
      w="100vw"
      minH={"100vh"}
      h="100%"
      justifyContent={"center"}
      alignItems={"center"}
      wrap={"wrap"}
      paddingBottom={"25px"}
    >
      <Flex
        w="80vw"
        h="100%"
        justifyContent={"space-evenly"}
        alignItems={"center"}
        wrap={"wrap"}
      >
        <Box w={"580px"}>
          <Image src={ArteSanaLogin} w="551px" />
        </Box>
        <Flex
          w={"351px"}
          bg={"brown.300"}
          h="432px"
          borderRadius="15px"
          direction={"column"}
          justifyContent={"space-around"}
        >
          <Heading fontWeight="regular" color="cream.100" fontSize={"50px"}>
            Login
          </Heading>
          <FormControl
            as="form"
            onSubmit={handleSubmit(onSubmitFunction)}
            h={"40%"}
          >
            <Input
              {...register("email")}
              placeholder="E-mail"
              h="45px"
              w="80%"
              marginBottom={"20px"}
              bg={"brown.200"}
              _placeholder={{ color: "cream.100" }}
            />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            <Input
              {...register("password")}
              placeholder="Senha"
              w="80%"
              h="45px"
              marginBottom={"20px"}
              bg={"brown.200"}
              _placeholder={{ color: "cream.100" }}
            />
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            <Button
              type="submit"
              bg={"green.300"}
              color={"cream.100"}
              w="80%"
              h="45px"
            >
              Entrar
            </Button>
          </FormControl>
          <Text color={"cream.100"}>
            Não tem uma conta?&nbsp;
            <Link to="/register">Cadastre-se.</Link>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LoginPage;
