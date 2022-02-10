import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { BsCart3 } from "react-icons/bs";
import { MdOutlineSell } from "react-icons/md";
import { RiLogoutBoxRLine } from "react-icons/ri";
import Logo from "../../assets/ArteSanaLogo.png";
import { useAuth } from "../../Providers/AuthContext";
import { Icon } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { useCart } from "../../Providers/CartContext";

const HeaderC = () => {
  const { logOut } = useAuth();
  const history = useHistory();
  const name = localStorage.getItem("@Username");
  const { cart } = useCart();

  return (
    <Flex
      bg="brown.300"
      w="100vw"
      justifyContent="space-around"
      alignItems="center"
      wrap="wrap"
      data-testid="header-element"
      background="linear-gradient(0deg, rgba(34,114,77,1) 0%, rgba(67,54,51,1) 42.5%);"
      boxShadow="1px 0px 20px -1px rgba(0,0,0,0.75)"
    >
      <Box display={"flex"} h="100%" alignItems={"center"} wrap="wrap">
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          cursor={"pointer"}
          onClick={() => history.push("/sellerPage")}
        >
          <Image
            src={Logo}
            alt="Arte Sana"
            height="72%"
            width="100px"
            _hover={{
              transform: "scale(1.05)",
              transition: "0.3s",
            }}
          />
          <Heading fontWeight="regular" color="cream.100" marginTop="-16px">
            Arte Sana
          </Heading>
        </Flex>
        <Heading color={"cream.100"} marginLeft={"10px"} fontWeight={"600"}>
          Olá, {name}
        </Heading>
      </Box>
      <Flex
        color="cream.100"
        w="200px"
        justifyContent="space-around"
        marginBottom="10px"
      >
        <Flex w="40px" _hover={{ transform: "scale(1.1)", transition: "0.5s" }}>
          <Icon
            as={BsCart3}
            fontSize="40px"
            color="cream.100"
            cursor="pointer"
            onClick={() => history.push("/cart")}
          />
          {cart.length > 0 && (
            <Text
              bg={"green.200"}
              h="20px"
              w="20px"
              borderRadius={"100%"}
              marginLeft={"-20px"}
            >
              {cart.length}
            </Text>
          )}
        </Flex>
        <Icon
          as={MdOutlineSell}
          fontSize="40px"
          color="cream.100"
          cursor="pointer"
          onClick={() => history.push("/registerProducts")}
          _hover={{ transform: "scale(1.1)", transition: "0.5s" }}
        />
        <Icon
          as={RiLogoutBoxRLine}
          fontSize="40px"
          color="cream.100"
          cursor="pointer"
          onClick={logOut}
          _hover={{ transform: "scale(1.1)", transition: "0.5s" }}
        />
      </Flex>
    </Flex>
  );
};

export default HeaderC;
