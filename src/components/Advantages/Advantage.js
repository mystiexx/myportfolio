import React from "react";
import { Box, Text, Grid, Image, Center, useColorModeValue } from "@chakra-ui/react";
import figma from "../../assets/figma.png";
import bootstrap from "../../assets/bootstrap.png";
import react from "../../assets/react.png";
import html from "../../assets/html-1.png";
import css from "../../assets/CSS.png";
import { useMediaQuery } from "@chakra-ui/media-query";

const Advantage = () => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");
    const bg = useColorModeValue("#F3F3F3", "none");
    const color = useColorModeValue("#010101", "#FFFFFF");

    return (
        <Box>
            <Text textAlign="center" className="title-text">
                My Advantage
            </Text>

            <Box marginTop="50px">
                <Grid
                    gridTemplateColumns={isNotSmallerScreen ? "repeat(5, 1fr)" : "repeat(2, 1fr)"}
                    gap={3}
                >
                    <Box>
                        <Box bg={bg} p={8}>
                            <Center>
                                <Image
                                    src={figma}
                                    alt="figma"
                                    boxSize="200px"
                                    className="adv-image"
                                />
                            </Center>
                            <Text textAlign="center" className="adv-p" color={color}>
                                60%
                            </Text>
                        </Box>
                        <Text
                            textAlign="center"
                            mt={5}
                            fontFamily="Open sans"
                            fontSize="1rem"
                            fontWeight="700"
                        >
                            Figma
                        </Text>
                    </Box>

                    <Box>
                        <Box bg={bg} p={8}>
                            <Center>
                                <Image
                                    src={bootstrap}
                                    alt="figma"
                                    boxSize="200px"
                                    className="adv-image"
                                />
                            </Center>
                            <Text textAlign="center" className="adv-p" color={color}>
                                95%
                            </Text>
                        </Box>
                        <Text
                            textAlign="center"
                            mt={5}
                            fontFamily="Open sans"
                            fontSize="1rem"
                            fontWeight="700"
                        >
                            BootStrap
                        </Text>
                    </Box>

                    <Box>
                        <Box bg={bg}  p={8}>
                            <Center>
                                <Image
                                    src={react}
                                    alt="figma"
                                    boxSize="200px"
                                    className="adv-image"
                                />
                            </Center>
                            <Text textAlign="center" className="adv-p" color={color}>
                                80%
                            </Text>
                        </Box>
                        <Text
                            textAlign="center"
                            mt={5}
                            fontFamily="Open sans"
                            fontSize="1rem"
                            fontWeight="700"
                        >
                            React js
                        </Text>
                    </Box>

                    <Box>
                        <Box bg={bg} p={8}>
                            <Center>
                                <Image
                                    src={html}
                                    alt="figma"
                                    boxSize="200px"
                                    className="adv-image"
                                />
                            </Center>
                            <Text textAlign="center" className="adv-p" color={color}>
                                95%
                            </Text>
                        </Box>
                        <Text
                            textAlign="center"
                            mt={5}
                            fontFamily="Open sans"
                            fontSize="1rem"
                            fontWeight="700"
                        >
                            HTML 5
                        </Text>
                    </Box>

                    <Box>
                        <Box bg={bg}  p={8}>
                            <Center>
                                <Image
                                    src={css}
                                    alt="figma"
                                    boxSize="200px"
                                    className="adv-image"
                                />
                            </Center>
                            <Text textAlign="center" className="adv-p" color={color}>
                                90%
                            </Text>
                        </Box>
                        <Text
                            textAlign="center"
                            mt={5}
                            fontFamily="Open sans"
                            fontSize="1rem"
                            fontWeight="700"
                        >
                            CSS 3
                        </Text>
                    </Box>
                </Grid>
            </Box>
        </Box>
    );
};

export default Advantage;
