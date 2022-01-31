import { useProducts } from "../../Providers/ProductsContext"
import { useCart } from "../../Providers/CartContext"
import ButtonC from "../ButtonC"

import { Box, Image,Flex, Stat, StatLabel, StatNumber, Button
} from '@chakra-ui/react'

    
const ProductAddToCart = () => {
       const { products } = useProducts()
       const { addProducts } = useCart()

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
                        <Image  borderRadius='50%' boxSize='150px' src={produto.img} alt={''}/>
                    </Box>
                    <Stat m='10px'>
                     <StatLabel>{produto.category}</StatLabel>
                     <StatNumber>R$ {produto.price.toFixed(2)}</StatNumber>
                    </Stat>

                    <ButtonC  
                    onClick={() => addProducts(produto)}
                    bg='green.300' text='adicionar'/>
            </Box>
            ))}

        </Flex>

        </Box>
        </>

)
}

export default ProductAddToCart
