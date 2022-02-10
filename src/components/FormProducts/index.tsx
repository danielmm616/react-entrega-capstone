import { useProducts } from "../../Providers/ProductsContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import ButtonC from "../ButtonC";
import * as yup from "yup";
import React from "react";

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
  Text,
} from "@chakra-ui/react";
import HeaderC from "../HeaderC";

interface ProductsData {
  name: string;
  category: string;
  price: number;
  quantity: number;
  img: string;
  id: number;
}

const FormProducts = () => {
  const { registerProducts } = useProducts();

  const schema = yup.object().shape({
    name: yup.string().required("Nome"),
    category: yup.string().required("Categoria"),
    price: yup.string().required("Preço"),
    img: yup.string().required("Imagem"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductsData>({
    resolver: yupResolver(schema),
  });

  const onSubmitProduct = (produto: ProductsData) => {
    registerProducts(produto);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <HeaderC />
      <Text fontWeight="600" m="5px" padding="5px" fontSize="3xl">
        Meus Produtos &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <ButtonC onClick={onOpen} bg="green.200" text="+" />
      </Text>

      <Modal data-testid="modal-element" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="green.200">Adicione seu Produto</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} display="flex" justifyContent="center">
            <FormControl as="form" onSubmit={handleSubmit(onSubmitProduct)}>
              <FormLabel color="green.200">
                Link Imagem
                <Input
                  {...register("img")}
                  placeholder="Link"
                  h="45px"
                  _placeholder={{ color: "cream.100" }}
                  bg='brown.200'
                  color='cream.100'
                />
                <FormErrorMessage>{errors.img?.message}</FormErrorMessage>
              </FormLabel>

              <FormLabel color="green.200">
                Nome do Produto
                <Input
                  {...register("name")}
                  placeholder="Nome"
                  _placeholder={{ color: "cream.100" }}
                  bg='brown.200'
                  color='cream.100'
                />
                <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
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
                <FormErrorMessage>{errors.category?.message}</FormErrorMessage>
              </FormLabel>

              <FormLabel color="green.200">
                Preço
                <Input
                  {...register("price")}
                  placeholder="Preço"
                  _placeholder={{ color: "cream.100" }}
                  bg='brown.200'
                  color='cream.100'
                />
                <FormErrorMessage>{errors.price?.message}</FormErrorMessage>
              </FormLabel>

              <ModalFooter display="flex" justifyContent="space-between">
                <ButtonC type="submit" bg="green.200" text="Save" />
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FormProducts;
