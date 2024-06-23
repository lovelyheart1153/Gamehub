import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
   initialColorMode: "light",
   useSystemColorMode: false,
};

const theme = extendTheme({
   fonts: {
      heading: `'Inter', sans-serif`,
      body: `'Inter', sans-serif`,
   },
   config,
});

export default theme;
