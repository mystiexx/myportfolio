import React from "react";
import { Container, Box, Text, IconButton } from "@chakra-ui/react";
import {  AiFillGithub, AiOutlineDribbble } from "react-icons/ai";
import ThemeSelector from "../ThemeSelector/ThemeSelector";
import { RiMenu4Line } from "react-icons/ri";
import { useMediaQuery } from "@chakra-ui/media-query";

const Header = () => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

    return (
        <Box p={3}>
            <Container maxW="container.lg">
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <IconButton
                        aria-label="Search database"
                        icon={<RiMenu4Line size={25} />}
                        variant="ghost"
                        display={isNotSmallerScreen ? "none" : "inline-block"}
                    />
                  

                    <Box>
                        <Text
                            className="header-logo"
                            display={isNotSmallerScreen ? "flex" : "none"}
                        >
                            Alone_Dev
                        </Text>{" "}
                    </Box>

                    <Box>
                      
                        <a href="https://github.com/mystiexx">
                            <IconButton
                                aria-label="Search database"
                                icon={<AiFillGithub size={25} />}
                                variant="ghost"
                                display={isNotSmallerScreen ? "inline" : "none"}
                            />
                        </a>
                        <a href="https://dribbble.com/alonexx">
                            <IconButton
                                aria-label="Search database"
                                icon={<AiOutlineDribbble size={25} />}
                                variant="ghost"
                                display={isNotSmallerScreen ? "inline-block" : "none"}
                            />
                        </a>
                        <ThemeSelector />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Header;
