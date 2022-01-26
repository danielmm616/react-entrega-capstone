import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

interface InputCProps {
  placeholder: string;
  rightElement?: boolean;
  bg: string;
  width: string;
}

const InputC = ({
  placeholder,
  rightElement = false,
  bg,
  width,
}: InputCProps) => {
  return (
    <InputGroup>
      <Input
        placeholder={placeholder}
        bg={bg}
        _placeholder={{ color: "cream.100" }}
        width={width}
        mb="5px"
      />
      {rightElement && (
        <InputRightElement>
          <Button h="70%" mr="50px" fontSize="35px" color="brown.300">
            <BsSearch />
          </Button>
        </InputRightElement>
      )}
    </InputGroup>
  );
};

export default InputC;
