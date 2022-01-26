import {
  Flex,
  Box,
  Image,
  Heading,
  FormControl,
  FormErrorMessage,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useAuth } from "../../Providers/AuthContext";

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
    <Flex>
      <Box w={"65%"}>
        <Image />
      </Box>
      <Box w={"35%"} bg={"cream.100"}>
        <Heading>Login</Heading>
        <FormControl as="form" onSubmit={handleSubmit(onSubmitFunction)}>
          <Input {...register("email")} placeholder="E-mail" />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          <Input {...register("password")} placeholder="Senha" />
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          <Button type="submit">Entrar</Button>
          <Text>
            Não tem uma conta?
            <Link to="/register">Cadastre-se.</Link>
          </Text>
        </FormControl>
      </Box>
    </Flex>
  );
};

export default LoginPage;
