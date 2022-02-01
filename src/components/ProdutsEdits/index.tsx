import { useProducts } from "../../Providers/ProductsContext";
import { Icon } from "@chakra-ui/react";
import { BiTrash, BiEdit } from "react-icons/bi";
import { Box, Image, Flex, Stat, StatNumber } from "@chakra-ui/react";
// import ButtonC from "../ButtonC";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  Input,
  FormErrorMessage,
  Button,
  FormLabel,
} from "@chakra-ui/react";

// import { yupResolver }from '@hookform/resolvers/yup'
import { useForm } from "react-hook-form";
// import * as yup from 'yup';

interface ProductsData {
  name: string;
  category: string;
  price: number;
  quantity: number;
  img: string;
  id: number;
}

const ProdutsEdits = () => {
  const { products, editProducts, deleteProducts } = useProducts();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductsData>();

  const onSubmitProduct = (produto: ProductsData) => {
    editProducts(produto);
    console.log("Produto add", produto);
  };

  return (
    <>
      <Box
        h="100vh"
        m="25px auto"
        display="flex"
        flexWrap="wrap"
        flexDirection="row"
        w="200px"
      >
        <Flex
          boxShadow="7px 7px 7px 0px rgba(0,0,0,0.22)"
          rounded="lg"
          bg="white"
          h="290px"
          w="200px"
          justifyContent="center"
          background="#E5E5E5"
          p={3}
          color="black"
        >
          {products.map((produto) => (
            <Box
              padding-bottom="2px"
              key={produto.name}
              color="green.200"
              fontWeight={800}
            >
              {produto.name}
              <Box display="flex" justifyContent="center" alignItems="center">
                <Image
                  mt="10px"
                  mb="10px"
                  borderRadius="50%"
                  boxSize="120px"
                  src={produto.img}
                  alt={""}
                />
              </Box>
              <Stat m="15px">
                <StatNumber>R$ {produto.price.toFixed(2)}</StatNumber>
              </Stat>
              <Flex display="flex" justifyContent="space-around">
                {/* Modal de Editar */}
                <Icon
                  as={BiEdit}
                  onClick={onOpen}
                  fontSize="40px"
                  cursor="pointer"
                />

                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader color="green.200">
                      Edite seu Produto
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6} display="flex" justifyContent="center">
                      <FormControl
                        as="form"
                        onSubmit={handleSubmit(onSubmitProduct)}
                      >
                        <FormLabel color="green.200">
                          Link Imagem
                          <Input
                            {...register("img")}
                            placeholder={produto.img}
                            h="45px"
                            _placeholder={{ color: "cream.400" }}
                          />
                          <FormErrorMessage>
                            {errors.img?.message}
                          </FormErrorMessage>
                        </FormLabel>

                        <FormLabel color="green.200">
                          Nome do Produto
                          <Input
                            {...register("name")}
                            placeholder={produto.name}
                            _placeholder={{ color: "cream.400" }}
                          />
                          <FormErrorMessage>
                            {errors.name?.message}
                          </FormErrorMessage>
                        </FormLabel>

                        <FormLabel color="green.200">
                          Categoria
                          <Input
                            {...register("category")}
                            placeholder={produto.category}
                            _placeholder={{ color: "cream.400" }}
                          />
                          <FormErrorMessage>
                            {errors.category?.message}
                          </FormErrorMessage>
                        </FormLabel>

                        <FormLabel color="green.200">
                          Preço
                          <Input
                            text={produto.price}
                            {...register("price")}
                            placeholder={produto.price.toFixed(2)}
                            _placeholder={{ color: "cream.400" }}
                          />
                          <FormErrorMessage>
                            {errors.price?.message}
                          </FormErrorMessage>
                        </FormLabel>

                        <ModalFooter
                          mr="10px"
                          diplay="flex"
                          justifyContent="space-between"
                        >
                          <Button
                            _hover={{ bg: "green.300" }}
                            color="white"
                            type="submit"
                            bg="green.200"
                          >
                            Editar
                          </Button>
                          <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                      </FormControl>
                    </ModalBody>
                  </ModalContent>
                </Modal>

                {/*  Botao de excluir */}
                <Icon
                  as={BiTrash}
                  fontSize="40px"
                  cursor="pointer"
                  onClick={() => deleteProducts(produto.id)}
                />
              </Flex>
            </Box>
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default ProdutsEdits;
