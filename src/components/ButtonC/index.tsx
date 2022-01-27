import { Button } from "@chakra-ui/react";
import { ButtonHTMLAttributes } from "react";

interface ButtonCProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  text: string;
  bg: string;
  minW?: string;
}

const ButtonC = ({
  variant = "solid",
  text,
  bg,
  minW,
  ...rest
}: ButtonCProps) => {
  return (
    <Button
      color="white"
      bg={bg}
      variant={variant}
      _hover={{ bg: "green.300" }}
      minW={minW}
      {...rest}
    >
      {text}
    </Button>
  );
};

export default ButtonC;
