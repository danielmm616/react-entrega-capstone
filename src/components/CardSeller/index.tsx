import { Box, Flex, Image, Stat } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

interface User {
  name: string;
  state: string;
  city: string;
}

const CardSeller = ({ name, state, city }: User) => {
  const history = useHistory();

  return (
    <>
      <Box
        m="25px"
        display="flex"
        flexWrap="wrap"
        flexDirection="row"
        w="200px"
      >
        <Flex
          cursor="pointer"
          boxShadow="7px 7px 7px 0px rgba(0,0,0,0.22)"
          rounded="lg"
          bg="white"
          onClick={() => history.push("/shop")}
          h="290px"
          w="200px"
          justifyContent="center"
          background="#E5E5E5"
          p={3}
          color="black"
        >
          <Box
            fontSize="25px"
            padding-bottom="2px"
            key={name}
            color="green.200"
            fontWeight={800}
          >
            {name}
            <Box
              mt="30px"
              mb="30px"
              bg="white"
              display="flex"
              borderRadius="50%"
              justifyContent="center"
              alignItems="center"
            >
              <Image
                border="solid #E5E5E5 1px"
                borderRadius="50%"
                boxSize="120px"
                src={
                  "https://i.pinimg.com/originals/31/49/06/3149064b2ba03c557e30efbc7b30a114.png"
                }
                alt={""}
              />
            </Box>
            <Stat>
              <Stat fontSize="30px">{state}</Stat>
            </Stat>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default CardSeller;
