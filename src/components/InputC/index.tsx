import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";

interface InputCProps {
  placeholder: string;
  rightElement?: boolean;
  icon?: string;
}

const InputC = ({ placeholder, rightElement = false, icon }: InputCProps) => {
  return (
    <InputGroup>
      <Input placeholder={placeholder} />
      {rightElement && (
        <InputRightElement>
          <Button>{icon}</Button>
        </InputRightElement>
      )}
    </InputGroup>
  );
};

export default InputC;
