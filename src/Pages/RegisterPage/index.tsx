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
  Link,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { useAuth } from "../../Providers/AuthContext";

interface UserData {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
  state: string;
  city: string;
}

const LoginPage = () => {
  const history = useHistory();
  const { registerUser } = useAuth();

  const schema = yup.object().shape({
    name: yup.string().required("Informe seu nome."),
    email: yup.string().email("Invalid email.").required("Informe seu e-mail."),
    password: yup.string().required("Informe a senha.").min(6),
    confirmPassword: yup
      .string()
      .oneOf(["password"], "Senhas diferentes")
      .required("Informe a mesma senha")
      .min(6),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (user: UserData) => {
    registerUser(user);
    history.push("/shop");
  };

  return (
    <Flex>
      <Box w={"35%"} bg={"cream.100"}>
        <Heading>Login</Heading>
        <FormControl as="form" onSubmit={handleSubmit(onSubmitFunction)}>
          <Input {...register("name")}>Nome</Input>
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
          <Input {...register("email")}>E-mail</Input>
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          <Input {...register("password")}>Senha</Input>
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          <Input>Confirme a senha</Input>
          <FormErrorMessage>{errors.confirmPassword?.message}</FormErrorMessage>
          <Input {...register("state")}>Selecione o estado</Input>
          <FormErrorMessage>{errors.state?.message}</FormErrorMessage>
          <Input {...register("city")}>Selecione a cidade</Input>
          <FormErrorMessage>{errors.city?.message}</FormErrorMessage>
          <Button type="submit">Cadastrar</Button>
          <Text>
            Já possui conta? Faça o <Link to="/login">login.</Link>
          </Text>
        </FormControl>
      </Box>
      <Box w={"65%"}>
        <Image />
      </Box>
    </Flex>
  );
};

export default LoginPage;
