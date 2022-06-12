import React from "react";
import { Container, Box, Text } from "@chakra-ui/react";

const Header = () => {

  return (
    <Box p={3}>
      <Container maxW="container.lg">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Text
              fontSize="2xl"
              fontWeight={"600"}
              color="#577CFE"
              textTransform="uppercase"
            >
              Alone
            </Text>{" "}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
