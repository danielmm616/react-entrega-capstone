import { useProducts } from "../../Providers/ProductsContext";
import { Icon } from "@chakra-ui/react";
import { BiTrash, BiEdit } from "react-icons/bi";
import { Box, Image, Flex, Stat, StatNumber } from "@chakra-ui/react";

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
  Select,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";

interface ProductsData {
  name: string;
  category: string;
  price: number;
  quantity: number;
  img: string;
  id: number;
}

const ProdutsEdits = () => {
  const { myProducts, editProducts, deleteProducts } = useProducts();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductsData>();

  const onSubmitProduct = (produto: ProductsData) => {
    const { name, category, price, img, id, quantity } = produto;
    const corpo = { name, category, price: Number(price), img, id, quantity };
    editProducts(corpo);
  };

  return (
    <>
      <Box
        h="100vh"
        m="25px auto"
        display="flex"
        flexWrap="wrap"
        flexDirection="row"
        justifyContent="space-evenly"
        maxW="1000px"
        data-testid="productsEdits-element"
      >
        {myProducts.map((produto) => (
          <Box
            background="#E5E5E5"
            boxShadow="7px 7px 7px 0px rgba(0,0,0,0.22)"
            h="280px"
            w="200px"
            rounded="lg"
            m="5px"
            padding-bottom="2px"
            key={produto.id}
            color="green.200"
            fontWeight={800}
          >
            {produto.name}
            <Box display="flex" justifyContent="center" alignItems="center">
              <Image
                background="#fff"
                mt="15px"
                mb="5px"
                borderRadius="50%"
                boxSize="120px"
                src={produto.img}
                alt={""}
              />
            </Box>
            <Stat m="15px">
              <StatNumber>R$ {produto.price}</StatNumber>
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
                  <ModalHeader color="green.200">Edite seu Produto</ModalHeader>
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
                          placeholder='Link'
                          h="45px"
                          _placeholder={{ color: "cream.100" }}
                          bg='brown.200'
                          color='cream.100'
                        />
                        <FormErrorMessage>
                          {errors.img?.message}
                        </FormErrorMessage>
                      </FormLabel>

                      <FormLabel color="green.200">
                        Nome do Produto
                        <Input
                          {...register("name")}
                          placeholder='Produto'
                          _placeholder={{ color: "cream.100" }}
                          bg='brown.200'
                          color='cream.100'
                        />
                        <FormErrorMessage>
                          {errors.name?.message}
                        </FormErrorMessage>
                      </FormLabel>

                      <FormLabel color="green.200">
                        Categoria
                        <Select
                          {...register("category")}
                          bg='brown.200'
                        >
                          <option style={{ backgroundColor:'#22724D' }} value="frutas">Frutas</option>
                          <option style={{ backgroundColor:'#22724D' }} value="legumes">Legumes</option>
                          <option style={{ backgroundColor:'#22724D' }} value="verduras">Verduras</option>
                          <option style={{ backgroundColor:'#22724D' }} value="artesanato">Artesanato</option>
                          <option style={{ backgroundColor:'#22724D' }} value="outros">Outros</option>
                        </Select>
                        <FormErrorMessage>
                          {errors.category?.message}
                        </FormErrorMessage>
                      </FormLabel>

                      <FormLabel color="green.200">
                        Pre??o
                        <Input
                          text={produto.price}
                          {...register("price")}
                          type="number"
                          placeholder="pre??o"
                          _placeholder={{ color: "cream.100" }}
                          bg='brown.200'
                          color='cream.100'
                        />
                        <FormErrorMessage>
                          {errors.price?.message}
                        </FormErrorMessage>
                      </FormLabel>
                      <Input
                        {...register("id")}
                        value={produto.id}
                        display={"none"}
                      />
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
      </Box>
    </>
  );
};

export default ProdutsEdits;
