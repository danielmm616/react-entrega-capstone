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
  Select,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, Redirect } from "react-router-dom";
import * as yup from "yup";
import { useAuth } from "../../Providers/AuthContext";
import ArteSanaLogin from "../../assets/ArteSanaLogin.png";

interface UserData {
  email: string;
  password: string;
  name: string;
  confirmPassword?: string;
  state: string;
  city: string;
  seller?: boolean;
}

const RegisterPage = () => {
  const { registerUser } = useAuth();
  const token = localStorage.getItem("@ArteSana:token");
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
    delete user.confirmPassword;
    const newUser = { ...user, seller: false };
    registerUser(newUser);
    console.log("onSubFunc user", user);
  };

  if (token) {
    return <Redirect to="/shop" />;
  }

  return (
    <Flex
      backgroundImage={
        "linear-gradient(to left, #F7F0F5 0, #F7F0F5 70%, #40916C 30%)"
      }
      w="100vw"
      minH={"100vh"}
      h="100%"
      justifyContent={"center"}
      alignItems={"center"}
      wrap={"wrap-reverse"}
      paddingBottom={"25px"}
    >
      <Flex
        w="80vw"
        h="100%"
        justifyContent={"space-evenly"}
        alignItems={"center"}
        wrap={"wrap-reverse"}
      >
        <Flex
          w={"351px"}
          bg={"brown.300"}
          h="582px"
          borderRadius="15px"
          direction={"column"}
          justifyContent={"space-evenly"}
        >
          <Heading fontWeight="regular" color="cream.100" fontSize={"40px"}>
            Cadastro
          </Heading>
          <FormControl as="form" onSubmit={handleSubmit(onSubmitFunction)}>
            <Input
              {...register("name")}
              placeholder="Nome"
              h="45px"
              w="80%"
              marginBottom={"20px"}
              bg={"brown.200"}
              _placeholder={{ color: "cream.100" }}
              color={"cream.100"}
            />
            <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
            <Input
              {...register("email")}
              placeholder="E-mail"
              h="45px"
              w="80%"
              marginBottom={"20px"}
              bg={"brown.200"}
              _placeholder={{ color: "cream.100" }}
              color={"cream.100"}
            />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            <Input
              {...register("password")}
              placeholder="Senha"
              type="password"
              h="45px"
              w="80%"
              marginBottom={"20px"}
              bg={"brown.200"}
              _placeholder={{ color: "cream.100" }}
              color={"cream.100"}
            />
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            <Input
              {...register("confirmPassword")}
              placeholder="Confirme a senha"
              type="password"
              h="45px"
              w="80%"
              marginBottom={"20px"}
              bg={"brown.200"}
              _placeholder={{ color: "cream.100" }}
              color={"cream.100"}
            />
            <FormErrorMessage>
              {errors.confirmPassword?.message}
            </FormErrorMessage>
            <Select
              h="45px"
              w="80%"
              marginBottom={"20px"}
              m="0 auto"
              bg={"brown.200"}
              {...register("state")}
            >
              <option style={{ backgroundColor:'#22724D' }} value="AC">Acre</option>
              <option style={{ backgroundColor:'#22724D' }} value="AL">Alagoas</option>
              <option style={{ backgroundColor:'#22724D' }} value="AP">Amapá</option>
              <option style={{ backgroundColor:'#22724D' }} value="AM">Amazonas</option>
              <option style={{ backgroundColor:'#22724D' }} value="BA">Bahia</option>
              <option style={{ backgroundColor:'#22724D' }} value="CE">Ceará</option>
              <option style={{ backgroundColor:'#22724D' }} value="DF">Distrito Federal</option>
              <option style={{ backgroundColor:'#22724D' }} value="ES">Espírito Santo</option>
              <option style={{ backgroundColor:'#22724D' }} value="GO">Goiás</option>
              <option style={{ backgroundColor:'#22724D' }} value="MA">Maranhão</option>
              <option style={{ backgroundColor:'#22724D' }} value="MT">Mato Grosso</option>
              <option style={{ backgroundColor:'#22724D' }} value="MS">Mato Grosso do Sul</option>
              <option style={{ backgroundColor:'#22724D' }} value="MG">Minas Gerais</option>
              <option style={{ backgroundColor:'#22724D' }} value="PA">Pará</option>
              <option style={{ backgroundColor:'#22724D' }} value="PB">Paraíba</option>
              <option style={{ backgroundColor:'#22724D' }} value="PR">Paraná</option>
              <option style={{ backgroundColor:'#22724D' }} value="PE">Pernambuco</option>
              <option style={{ backgroundColor:'#22724D' }} value="PI">Piauí</option>
              <option style={{ backgroundColor:'#22724D' }} value="RJ">Rio de Janeiro</option>
              <option style={{ backgroundColor:'#22724D' }} value="RN">Rio Grande do Norte</option>
              <option style={{ backgroundColor:'#22724D' }} value="RS">Rio Grande do Sul</option>
              <option style={{ backgroundColor:'#22724D' }} value="RO">Rondônia</option>
              <option style={{ backgroundColor:'#22724D' }} value="RR">Roraima</option>
              <option style={{ backgroundColor:'#22724D' }} value="SC">Santa Catarina</option>
              <option style={{ backgroundColor:'#22724D' }} value="SP">São Paulo</option>
              <option style={{ backgroundColor:'#22724D' }} value="SE">Sergipe</option>
              <option style={{ backgroundColor:'#22724D' }} value="TO">Tocantins</option>
              <option style={{ backgroundColor:'#22724D' }} value="IT">Itália</option>
            </Select>
            {/* <Input
              {...register("state")}
              placeholder="Selecione o estado"
              h="45px"
              w="80%"
              marginBottom={"20px"}
              bg={"brown.200"}
              _placeholder={{ color: "cream.100" }}
              color={"cream.100"}
            /> */}
            <FormErrorMessage>{errors.state?.message}</FormErrorMessage>
            <Input
              {...register("city")}
              placeholder="Informe sua cidade"
              h="45px"
              w="80%"
              marginBottom={"20px"}
              marginTop="20px"
              bg={"brown.200"}
              _placeholder={{ color: "cream.100" }}
              color={"cream.100"}
            />
            <FormErrorMessage>{errors.city?.message}</FormErrorMessage>
            <Button
              type="submit"
              bg={"green.200"}
              color={"cream.100"}
              w="80%"
              h="45px"
              _hover={{ backgroundColor: "green.300", transition: "0.5s" }}
            >
              Cadastrar
            </Button>
          </FormControl>
          <Text color={"cream.100"}>
            Já possui conta? Faça o <Link to="/login">login.</Link>
          </Text>
        </Flex>
        <Box w={"580px"}>
          <Image
            src={ArteSanaLogin}
            w={["300px", "330px", "330px", "330px", "450px", "530px", "560px"]}
            margin="0 auto"
            filter={"drop-shadow(5px 5px 5px #0000006f);"}
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default RegisterPage;
