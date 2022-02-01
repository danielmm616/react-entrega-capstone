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
} from "@chakra-ui/react";

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
    console.log("Produto add", produto);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <ButtonC onClick={onOpen} bg="green.200" text="+" />

      <Modal isOpen={isOpen} onClose={onClose}>
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
                  placeholder="Link Imagem"
                  h="45px"
                  _placeholder={{ color: "cream.300" }}
                />
                <FormErrorMessage>{errors.img?.message}</FormErrorMessage>
              </FormLabel>

              <FormLabel color="green.200">
                Nome do Produto
                <Input
                  {...register("name")}
                  placeholder="Nome"
                  _placeholder={{ color: "cream.300" }}
                />
                <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
              </FormLabel>

              <FormLabel color="green.200">
                Categoria
                <Input
                  {...register("category")}
                  placeholder="Categoria"
                  _placeholder={{ color: "cream.300" }}
                />
                <FormErrorMessage>{errors.category?.message}</FormErrorMessage>
              </FormLabel>

              <FormLabel color="green.200">
                Preço
                <Input
                  {...register("price")}
                  placeholder="Preço"
                  _placeholder={{ color: "cream.300" }}
                />
                <FormErrorMessage>{errors.price?.message}</FormErrorMessage>
              </FormLabel>

              <ModalFooter>
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
