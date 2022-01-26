import { Flex, Heading, Image } from "@chakra-ui/react";
import { BsShop } from "react-icons/bs";
import { RiLogoutBoxRLine } from "react-icons/ri";
import Logo from "../../assets/ArteSanaLogo.png";
import { useAuth } from "../../Providers/AuthContext";
import InputC from "../InputC";

const HeaderC = () => {
  const { logOut } = useAuth();

  return (
    <Flex
      bg="brown.300"
      w="100vw"
      justifyContent="space-around"
      alignItems="center"
      wrap="wrap"
    >
      <Flex direction="column" alignItems="center" justifyContent="center">
        <Image src={Logo} alt="Arte Sana" height="50%" width="100px" />
        <Heading fontWeight="regular" color="cream.100" marginTop="-16px">
          Arte Sana
        </Heading>
      </Flex>
      <Flex color="cream.100">
        <InputC
          placeholder="Procure..."
          bg="brown.200"
          rightElement
          width="200px"
        />
        <BsShop fontSize="40px" color="cream.100" cursor="pointer" />
        &nbsp;&nbsp;
        <RiLogoutBoxRLine
          fontSize="40px"
          color="cream.100"
          cursor="pointer"
          onClick={logOut}
        />
      </Flex>
    </Flex>
  );
};

export default HeaderC;
