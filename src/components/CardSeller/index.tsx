import  { Box, Flex,Image,Stat} from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'

// import { FormControl,
//          FormLabel,
//          FormErrorMessage,
//          FormHelperText,
//          Select
//          } from '@chakra-ui/react'

  interface User {
    name: string;
    state: string;
    city: string;
  }

 
const CardSeller = ({name,state,city}:User) => {

  const history = useHistory()
  // se usuario tiver produto é um produtor se nao é so um usuario
  //usar useParamns

  return(
    <>
   
    <Box h='100vh' m='25px auto' display='flex'flexWrap='wrap'  flexDirection='row' w='200px'>
    <Flex cursor='pointer' boxShadow={'dark-lg'} rounded='lg' bg='white' onClick={() => history.push('/registerProducts')}
    h='290px' w='200px' justifyContent='center'  background='#E5E5E5'  p={3} color='black'>

        <Box fontSize='25px' padding-bottom='2px'key={name} color='green.200' fontWeight={800}>
                {name = 'yasmin'}
                <Box  mt='30px'mb='30px' bg='white' display='flex'borderRadius='50%' justifyContent='center'  alignItems='center'> 
                    <Image border='solid #E5E5E5 1px'borderRadius='50%' boxSize='120px' src={'https://i.pinimg.com/originals/31/49/06/3149064b2ba03c557e30efbc7b30a114.png'} alt={''}/>
                </Box>
                <Stat >
                    <Stat fontSize='30px'>{state = 'SP'}</Stat>
                    <Stat>{city}</Stat>
                </Stat>
        </Box>
        
    </Flex>
    </Box>


    {/* <Box h='100vh' m='25px auto' display='flex'flexWrap='wrap'  flexDirection='row' w='200px'>
    <Flex  boxShadow={'dark-lg'} rounded='lg' bg='white' 
    h='290px' w='200px' justifyContent='center'  background='#E5E5E5'  p={3} color='black'>

        <Box fontSize='20px' padding-bottom='2px'key={name} color='green.200' fontWeight={800}>
                {name = 'yasmin'}
                <Box cursor='pointer'  mt='10px'mb='10px' bg='white' display='flex'borderRadius='50%' justifyContent='center'  alignItems='center'> 
                    <Image onClick={() => history.push('/registerProducts')}border='solid #E5E5E5 1px'borderRadius='50%' boxSize='120px' src={'https://i.pinimg.com/originals/31/49/06/3149064b2ba03c557e30efbc7b30a114.png'} alt={''}/>
                </Box>
                <Stat >
                    <Stat fontSize='20px'>{state = 'SP'}</Stat>
                    <Stat>{city}</Stat>
                </Stat>

                <FormControl>
                    <FormLabel htmlFor='category'>Categoria</FormLabel>
                    <Select id='category' placeholder='Veja categoria'>
                      <option>Frutas</option>
                      <option>Verduras</option>
                    </Select>
                </FormControl>
        </Box>
        
    </Flex>
    </Box> */}
    
    </>

)
}


export default CardSeller