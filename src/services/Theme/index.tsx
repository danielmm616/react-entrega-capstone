import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Outfit",
    body: "Outfit",
  },
  colors: {
    cream: {
      100: "#F7F0F5",
      200: "#F0DCEA",
      300: "#EBD6C2",
    },
    orange: {
      200: "#D9A774",
      300: "#BC8A5F",
    },
    gray: {
      100: "#E5E5E5",
      200: "#AEA298",
      300: "#8F857D",
      400: "#5C5552",
    },
    brown: {
      200: "#76635F",
      300: "#433633",
    },
    green: {
      200: "#40916C",
      300: "#22724D",
    },
  },
});

export default theme;
