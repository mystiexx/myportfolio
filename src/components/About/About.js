import React from "react";
import { Box, Text, Grid, IconButton } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";
import {
  AiFillGithub,
  AiOutlineDribbble,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import "./style.css";

const About = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

  return (
    <Box>
      <Grid
        templateColumns={isNotSmallerScreen ? "200px auto" : "repeat(1, 1fr)"}
        gap={6}
      >
        <Box className={isNotSmallerScreen ? "step-item" : null}>
          <Box
            className={isNotSmallerScreen ? "step-box-item" : null}
            display="flex"
            justifyContent="center"
            flexDirection={isNotSmallerScreen ? "column" : "row"}
          >
            <a
              href="https://www.linkedin.com/in/enola-roland-18704b135/"
              target={"_blank"}
              rel="noreferrer noopener"
            >
              <IconButton
                aria-label="Search database"
                icon={<AiFillLinkedin size={25} />}
                variant="ghost"
                _hover={{
                  background: "transparent",
                }}
              />
            </a>

            <a
              href="https://twitter.com/emystiexx"
              target={"_blank"}
              rel="noreferrer noopener"
            >
              <IconButton
                aria-label="Search database"
                icon={<AiOutlineTwitter size={25} />}
                variant="ghost"
                _hover={{
                  background: "transparent",
                }}
              />
            </a>

            <a
              href="https://github.com/mystiexx"
              target={"_blank"}
              rel="noreferrer noopener"
            >
              <IconButton
                aria-label="Search database"
                icon={<AiFillGithub size={25} />}
                variant="ghost"
                _hover={{
                  background: "transparent",
                }}
              />
            </a>
            <a
              href="https://dribbble.com/alonexx"
              target={"_blank"}
              rel="noreferrer noopener"
            >
              <IconButton
                aria-label="Search database"
                icon={<AiOutlineDribbble size={25} />}
                variant="ghost"
                _hover={{
                  background: "transparent",
                }}
              />
            </a>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          position="relative"
          top="150px"
        >
          <Text
            fontSize={isNotSmallerScreen ? "4xl" : "3xl"}
            fontWeight="600"
            textAlign={isNotSmallerScreen ? "left" : "center"}
          >
            {"Roland Enola "}
          </Text>
          <Text
            fontSize={isNotSmallerScreen ? "4xl" : "4xl"}
            fontWeight="700"
            textAlign={isNotSmallerScreen ? "left" : "center"}
          >
            {"Frontend Web developer "}
          </Text>

          <Text
            fontSize={isNotSmallerScreen ? "2xl" : "2xl"}
            mt={3}
            textAlign={isNotSmallerScreen ? "left" : "center"}
          >
            Building awesome web apps with love! I'm Roland Enola, a frontend{" "}
            <br /> web developer
          </Text>

          <Box marginTop="50px">
            <Text
              textAlign={isNotSmallerScreen ? "left" : "center"}
              fontSize={isNotSmallerScreen ? "xl" : "2xl"}
              color="#577CFE"
              fontWeight='600'
            >
              Get in touch: {"aloneroland@gmail.com"}
            </Text>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default About;
