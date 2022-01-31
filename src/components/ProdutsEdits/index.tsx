import { useProducts } from "../../Providers/ProductsContext";
import { Icon } from '@chakra-ui/react';
import { BiTrash, BiEdit } from 'react-icons/bi';
import { Box, Image, Flex, Stat, StatLabel, StatNumber} from '@chakra-ui/react'


const ProdutsEdits = () => {

    const { products,editProducts, deleteProducts } = useProducts();

    return (
        <>
        <Box m='25px auto' display='flex' flexWrap='wrap' flexDirection='row' w='200px'>
            <Flex boxShadow={'dark-lg'} rounded='lg' bg='white' h='320px' justifyContent='center' background='#E5E5E5' p={3} color='black'>
                {products.map((produto) => (
                    <Box padding-bottom='2px' key={produto.name} color='green.300' fontWeight={800}>
                        {produto.name}
                        <Box display='flex' justifyContent='center' alignItems='center'>
                            <Image borderRadius='50%' boxSize='150px' src={produto.img} alt={''}/>
                        </Box>
                        <Stat m='10px'>
                            <StatLabel>{produto.category}</StatLabel>
                            <StatNumber>R$ {produto.price.toFixed(2)}</StatNumber>
                        </Stat>
                        <Flex display='flex' justifyContent='space-around'>
                            <Icon as={BiEdit}
                            fontSize='40px'
                            cursor='pointer'
                            onClick={() => editProducts(produto)}/>  

                            <Icon as={BiTrash}
                            fontSize='40px'
                            cursor='pointer'
                            onClick={() => deleteProducts(produto.id)}/>                    
                        </Flex>
                    </Box>
                ))}
            </Flex>
        </Box>

        
        
        </>
    )
}

export default ProdutsEdits;