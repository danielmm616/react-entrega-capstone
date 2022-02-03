import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { BsCart3 } from "react-icons/bs";
import { MdOutlineSell } from "react-icons/md";
import { RiLogoutBoxRLine } from "react-icons/ri";
import Logo from "../../assets/ArteSanaLogo.png";
import { useAuth } from "../../Providers/AuthContext";
import { Icon } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

const HeaderC = () => {
  const { logOut } = useAuth();
  const history = useHistory();
  const name = localStorage.getItem("@Username");

  return (
    <Flex
      bg="brown.300"
      w="100vw"
      justifyContent="space-around"
      alignItems="center"
      wrap="wrap"
      data-testid="header-element"
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
        <Icon
          as={BsCart3}
          fontSize="40px"
          color="cream.100"
          cursor="pointer"
          onClick={() => history.push("/cart")}
          _hover={{ transform: "scale(1.1)", transition: "0.5s" }}
        />
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
