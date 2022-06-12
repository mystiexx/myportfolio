import { extendTheme } from "@chakra-ui/react";

export const Theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        fontFamily: 'Lora',
        backgroundColor: "#000",
        color: "#fff",
      },
    }),
  },
});
