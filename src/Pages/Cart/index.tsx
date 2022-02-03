import {
  Box,
  Text,
  Center,
  Flex,
  Stack,
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
  ModalContent,
} from "@chakra-ui/react";
import HeaderC from "../../components/HeaderC";
import { useCart } from "../../Providers/CartContext";
import ButtonC from "../../components/ButtonC";
import { Redirect, useHistory } from "react-router-dom";
import CardCartC from "../../components/CardCartC";

const Cart = () => {
  const history = useHistory();
  const token = localStorage.getItem("@ArteSana:token");
  const { cartProducts, cart } = useCart();
  const { isOpen, onOpen, onClose } = useDisclosure();



  if (!token) {
    return <Redirect to="/" />;
  }

  if (cart.length === 0) {
    return (
      <Box bg="cream.100" w="100vw" h="100vh">
        <HeaderC />
        <Center fontSize="4xl">Carrinho</Center>
        <Flex direction="column" justify="center" align="center" mt="26vh">
          <Text fontSize="3xl" maxW="280px" mb="10px">
            Nada por aqui...
          </Text>
          <ButtonC
            onClick={() => history.push("/sellerPage")}
            text="Ir às compras"
            bg="green.200"
          />
        </Flex>
      </Box>
    );
  } else {
    return (
      <Box bg="cream.100" w="100vw" h="100vh">
        <HeaderC />
        <Center fontSize="4xl">Carrinho</Center>
        <Flex
          direction={["column", "row"]}
          justify="center"
          align={["center", "start"]}
        >
          <Box
            bg="gray.100"
            borderRadius="20px"
            w={["90vw", "60vw"]}
            h={["50vh", "65vh"]}
            ml={["0", "50px"]}
            mt="20px"
            minW="300px"
            overflowY="auto"
            boxShadow="xl"
            sx={{
              "&::-webkit-scrollbar": {
                width: "16px",
                borderRadius: "8px",
                backgroundColor: `gray.100`,
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: `green.200`,
                borderRadius: "8px",
              },
            }}
          >
            <Flex
              direction={["column", "row"]}
              wrap="wrap"
              justify='center'
              overflowY="auto"
              overflowX="clip"
            >
              {cart.map((product) => (
                <CardCartC product={product} />
              ))}
            </Flex>
          </Box>

          <Box
            w="210px"
            borderRadius="20px"
            bg="gray.100"
            m={["20px", "60px"]}
            h="100%"
            p="10px"
            boxShadow="lg"
          >
            <Stack spacing={8}>
              <Text fontSize="2xl">Total</Text>
              <Text fontSize="2xl">
                R${" "}
                {cart
                  .reduce(
                    (acc, element) =>
                      acc +
                      Number(String(element.price).replace(",", ".")) *
                        Number(element.quantity),
                    0
                  )
                  .toFixed(2)}
              </Text>
              <ButtonC
                text="Finalizar compra"
                bg="green.200"
                onClick={onOpen}
              />
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader color="green.200">
                    Pague com o QR-Code abaixo!
                  </ModalHeader>
                  <ModalCloseButton bg={"green.200"} />
                  <ModalBody p={5}>
                    <Center>
                      <img
                        src="https://qrtag.net/api/qr_4.png?url=https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                        alt="qrtag"
                      />
                    </Center>
                  </ModalBody>
                </ModalContent>
              </Modal>
            </Stack>
          </Box>
        </Flex>
      </Box>
    );
  }
};

export default Cart;
