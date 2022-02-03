import { Flex, Heading, Icon } from "@chakra-ui/react";
import CardTeam from "../../components/CardTeam";
import Daniel from "../../assets/deni.png";
import Emerson from "../../assets/emer.jpeg";
import Matteo from "../../assets/matt.jpeg";
import Yasmin from "../../assets/yas.jpeg";
import Marcio from "../../assets/marcio.png";
import AnimatedBox from "../../components/AnimatedBox";
import { IoReturnDownBack } from "react-icons/io5";
import { useHistory } from "react-router-dom";

const TeamPage = () => {
  const history = useHistory();
  return (
    <Flex
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      h="100vh"
    >
      <Heading
        color="cream.100"
        fontWeight={"normal"}
        margin="40px 0 20px 0"
        fontSize={["30px", "35px", "40px", "45px", "50px"]}
      >
        Team - Arte Sana
      </Heading>
      <AnimatedBox>
        <Flex
          wrap={"wrap"}
          overflowY={"auto"}
          minHeight={"400px"}
          margin="20px 0"
          justifyContent={"center"}
        >
          <CardTeam
            name='Deniels "Curinga" Morais'
            roleInitial="Tech Lead"
            role="Tech Lead"
            img={Daniel}
            description="Orienta o time e proporciona os recursos necessários para que o trabalho seja executado com a máxima eficiência."
            link="https://www.linkedin.com/in/danielmoraismm616/"
          />
          <CardTeam
            name='Emerson "Breg" Pereira'
            roleInitial="Scrum Master"
            role="Scrum Master"
            img={Emerson}
            description="Mantém o compromisso com os valores e práticas do Scrum, deve manter a flexibilidade e a abertura para melhorar o fluxo de trabalho."
            link="https://www.linkedin.com/in/emerson-berg-jorge-pereira/"
          />
          <CardTeam
            name='Matteo "🤌" Basso'
            roleInitial="Product Owner"
            role="Product Owner"
            img={Matteo}
            description="Responsável por maximizar o valor final do produto desenvolvido. Sua responsabilidade é gerenciar o Product Backlog."
            link="https://www.linkedin.com/in/matteo-basso-32465a223/"
          />
          <CardTeam
            name='Yasmin "Nhec" Marcelino'
            roleInitial="Quality Assurance"
            role="Quality Assurance"
            img={Yasmin}
            description="Busca garantir que o produto seja entregue respeitando as qualidades pretendidas pelo cliente."
            link="https://www.linkedin.com/in/yasmin-martins-de-brito-marcelino/"
          />
          <CardTeam
            name='Márcio "Xuxu" Alves'
            roleInitial="Quality Assurance"
            role="Quality Assurance"
            img={Marcio}
            description="Busca garantir que o produto seja entregue respeitando as qualidades pretendidas pelo cliente."
            link="https://www.linkedin.com/in/m%C3%A1rcio-alves-16a841148/"
          />
        </Flex>
      </AnimatedBox>
      <Icon
        onClick={() => history.push("/")}
        cursor="pointer"
        as={IoReturnDownBack}
        color="white"
        fontSize={40}
        borderRadius="5px"
        _hover={{ bg: "white", color: "green.300" }}
      />
    </Flex>
  );
};

export default TeamPage;
