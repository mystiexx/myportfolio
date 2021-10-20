import React from "react";
import { Box, Text, Image, Grid, IconButton } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { AiFillGithub } from "react-icons/ai";
import data from "./data";

const Projects = () => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

    return (
        <Box h="auto">
            <Text textAlign="center" className="title-text">
                Projects
            </Text>

            <Grid
                gridTemplateColumns={isNotSmallerScreen ? "repeat(3, 1fr)" : "repeat(1, 1fr)"}
                gap={6}
                marginTop="70px"
            >
                {data.map((person, personIndex) => {
                    const { subTitle, name, link, github, image } = person;
                    return (
                        <Box key={personIndex}>
                            <Image src={image} alt="sut" className="adv-image" />
                            <Box display="flex" justifyContent="space-between" alignItems="center">
                                <Box>
                                    <Text marginTop="30px" className="sub-text">
                                        {" "}
                                        {subTitle}
                                    </Text>
                                    <a href={link}>
                                        <Text marginTop="10px" className="p-text">
                                            {name}
                                        </Text>
                                    </a>
                                </Box>
                                <a href={github}>
                                    <IconButton
                                        aria-label="Search database"
                                        icon={<AiFillGithub size={20} />}
                                        variant="ghost"
                                        display={isNotSmallerScreen ? "inline" : "none"}
                                    />
                                </a>
                            </Box>
                        </Box>
                    );
                })}
            </Grid>
        </Box>
    );
};

export default Projects;
