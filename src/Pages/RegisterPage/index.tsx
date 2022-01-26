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
  name: string;
  confirmPassword?: string;
  state: string;
  city: string;
}

const RegisterPage = () => {
  const { registerUser } = useAuth();

  const schema = yup.object().shape({
    name: yup.string().required("Informe seu nome."),
    email: yup.string().email("Invalid email.").required("Informe seu e-mail."),
    password: yup.string().required("Informe a senha.").min(6),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Senhas diferentes")
      .required("Informe a mesma senha")
      .min(6),
    state: yup.string().required("Informe o estado"),
    city: yup.string().required("Informe a cidade"),
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
    console.log("onSubFunc user", user);
  };

  return (
    <Flex>
      <Box w={"35%"} bg={"cream.100"}>
        <Heading>Cadastro</Heading>
        <FormControl as="form" onSubmit={handleSubmit(onSubmitFunction)}>
          <Input {...register("name")} placeholder="Nome" />
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
          <Input {...register("email")} placeholder="E-mail" />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          <Input
            {...register("password")}
            placeholder="Senha"
            type="password"
          />
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          <Input
            {...register("confirmPassword")}
            placeholder="Confirme a senha"
            type="password"
          />
          <FormErrorMessage>{errors.confirmPassword?.message}</FormErrorMessage>
          <Input {...register("state")} placeholder="Selecione o estado" />
          <FormErrorMessage>{errors.state?.message}</FormErrorMessage>
          <Input {...register("city")} placeholder="Selecione a cidade" />
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

export default RegisterPage;
