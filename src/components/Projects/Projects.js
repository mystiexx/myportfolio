import React from "react";
import { Box, Text, Image, IconButton, Tag, Flex } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { AiFillGithub } from "react-icons/ai";
import data from "./data";
import { MdOutlineLaunch } from "react-icons/md";
import "./style.css";

const Projects = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

  return (
    <Box h="auto">
      <Text
        fontSize={isNotSmallerScreen ? "4xl" : "xl"}
        fontWeight="700"
        color="#577CFE"
        textAlign="center"
        mb={8}
      >
        Projects
      </Text>
      <div className="card-wrapper">
        {data.map((person, personIndex) => {
          const { name, link, github, image, article, stacks } = person;
          return (
            <Box
              key={name + personIndex}
              className="p-box"
              w={isNotSmallerScreen ? "350px" : "300px"}
            >
              <Image src={image} alt="sut" />
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={3}
              >
                <Box>
                  <Text marginTop="10px" className="p-text">
                    {name}
                  </Text>
                </Box>
                <Box>
                  <a href={github} target={"_blank"} rel="noreferrer noopener">
                    <IconButton
                      aria-label="Search database"
                      icon={<AiFillGithub size={20} />}
                      variant="ghost"
                      _hover={{
                        background: "transparent",
                      }}
                    />
                  </a>

                  <a href={link} target={"_blank"} rel="noreferrer noopener">
                    <IconButton
                      aria-label="Search database"
                      icon={<MdOutlineLaunch size={20} />}
                      variant="ghost"
                      _hover={{
                        background: "transparent",
                      }}
                    />
                  </a>
                </Box>
              </Box>
              <p>{article}</p>
              <Flex mt={3}>
                {stacks.map((stacks, i) => (
                  <Tag
                    key={stacks + i}
                    bgColor="#577CFE3B"
                    color="#577CFE"
                    mr={4}
                  >
                    {stacks}
                  </Tag>
                ))}
              </Flex>
            </Box>
          );
        })}
      </div>
    </Box>
  );
};

export default Projects;
