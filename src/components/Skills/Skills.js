import React from "react";
import { Box, Text, Grid, Center, Image } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";
import data from "./data";
import BrandEffect from "../../assets/BrandEffect";

const Skills = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

  return (
    <Box>
      <Text
        fontSize={isNotSmallerScreen ? "4xl" : "xl"}
        fontWeight="700"
        color="#577CFE"
        textAlign="center"
      >
        {"Skills"}
      </Text>
      <Box
        position="absolute"
        left="0"
        zIndex="-1"
        display={isNotSmallerScreen ? "block" : "none"}
      >
        <BrandEffect />
      </Box>

      <Grid
        templateColumns={
          isNotSmallerScreen ? "repeat(5, 1fr)" : "repeat(2, 1fr)"
        }
        gap={6}
        mt={8}
      >
        {data.map((data) => (
          <Box key={data.id}>
            <Center>
              <Image src={data.image} alt={data.image} />
            </Center>
            <Text textAlign="center" textTransform="uppercase" fontSize="1xl">
              {data.name}
            </Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
