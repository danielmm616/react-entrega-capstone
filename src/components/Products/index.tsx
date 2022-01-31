import { useProducts } from "../../Providers/ProductsContext"

import { Box, Image,Flex, Stat, StatLabel, StatNumber, Button
} from '@chakra-ui/react'
import ButtonC from "../ButtonC"

    
const ProductAddToCart = () => {
       const { products , registerProducts} = useProducts()

    return(
        <>
       
        <Box  m='25px auto' display='flex'flexWrap='wrap'  flexDirection='row' w='200px'
        >
        <Flex boxShadow={'dark-lg'} rounded='lg' bg='white'
        h='320px' justifyContent='center'  background='#E5E5E5'  p={3} color='black'>
            {products.map((produto) => (
            <Box  padding-bottom='2px'key={produto.name} color='green.300' fontWeight={800}>
                    {produto.name}
                    <Box display='flex' justifyContent='center'  alignItems='center'> 
                        <Image  borderRadius='cheio' boxSize='150px' src={produto.img} alt={''}/>
                    </Box>
                    <Stat m='10px'>
                     <StatLabel>{produto.category}</StatLabel>
                     <StatNumber>R$ {produto.price.toFixed(2)}</StatNumber>
                    </Stat>

                    <ButtonC  
                    onClick={() => registerProducts(produto)}
                    bg='green.300' text='adicionar'/>
            </Box>
            ))}

        </Flex>

        </Box>
        </>

)
}

export default ProductAddToCart
