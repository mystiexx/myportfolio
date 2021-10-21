import React from "react";
import { Box, Text, IconButton, Center } from "@chakra-ui/react";
import {  AiFillGithub, AiOutlineDribbble } from "react-icons/ai";
import { useMediaQuery } from "@chakra-ui/media-query";

const Footer = () => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

    return (
        <Box>
            <Box
                display={isNotSmallerScreen ? "flex" : ""}
                justifyContent={isNotSmallerScreen ? "space-between" : "center"}
                alignItems="center"
            >
                <Text className="f-text" textAlign={isNotSmallerScreen ? " " : "center"} >
                &copy; {new Date().getFullYear()}  Alone All rights reserved
                </Text>
                {isNotSmallerScreen ? (
                    <Box>
                      
                        <a href="https://github.com/mystiexx">
                            <IconButton
                                aria-label="Search database"
                                icon={<AiFillGithub size={25} />}
                                variant="ghost"
                            />
                        </a>
                        <a href="https://dribbble.com/alonexx">
                            <IconButton
                                aria-label="Search database"
                                icon={<AiOutlineDribbble size={25} />}
                                variant="ghost"
                            />
                        </a>
                    </Box>
                ) : (
                    <Center>
                        <Box>
                         
                            <a href="https://github.com/mystiexx">
                                <IconButton
                                    aria-label="Search database"
                                    icon={<AiFillGithub size={25} />}
                                    variant="ghost"
                                />
                            </a>
                            <a href="https://dribbble.com/alonexx">
                                <IconButton
                                    aria-label="Search database"
                                    icon={<AiOutlineDribbble size={25} />}
                                    variant="ghost"
                                />
                            </a>
                        </Box>
                    </Center>
                )}
            </Box>
        </Box>
    );
};

export default Footer;
