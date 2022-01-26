import { Button } from "@chakra-ui/react";

interface ButtonCProps {
  variant?: string;
  text: string;
  variantColor: string;
}

const ButtonC = ({ variant = "solid", text, variantColor }: ButtonCProps) => {
  return (
    <Button color="white" variantColor={variantColor} variant={variant}>
      {text}
    </Button>
  );
};

export default ButtonC;
