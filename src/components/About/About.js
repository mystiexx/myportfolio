import React from "react";
import { Box, Text, Grid, Image, Center } from "@chakra-ui/react";
import hero from "../../assets/hero.jpg";
import { useMediaQuery } from "@chakra-ui/media-query";

const About = () => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

    return (
        <Box>
            <Grid
                templateColumns={isNotSmallerScreen ? "repeat(3, 1fr)" : "repeat(1, 1fr)"}
                gap={3}
            >
                <Box>
                    <Text className="sub-text">{"Biography"}</Text>
                    <Text className="sub-title" mt={3}>
                        Building awesome web apps with love! I'm Roland Enola, a frontend <br />{" "}
                        web developer
                    </Text>

                    <Box marginTop="50px">
                        <Text className="sub-text">{"Contact"}</Text>
                        <Text className="sub-title" mt={4}>
                            {"Bayelsa State, Nigeria"}
                        </Text>
                        <Text className="sub-title">{"aloneroland@gmail.com"}</Text>
                        <Text className="sub-title">{"+234 7059606487"}</Text>
                    </Box>
                    <Box marginTop="50px">
                        <Text className="sub-text">{"Services"}</Text>
                        <Text className="sub-title" mt={4}>
                            {"Website Development"}
                        </Text>
                        <Text className="sub-title">{"Website design"}</Text>
                    </Box>
                </Box>
                
                <Center>
                    <Box className={isNotSmallerScreen ? "hero-line" : "hero-line-smaller"}>
                        <Center>
                            <Image
                                src={hero}
                                alt="hero"
                                boxSize={isNotSmallerScreen ? "500px" : "300px"}
                                className="hero-image"
                                objectFit="cover"
                            />
                        </Center>
                    </Box>
                </Center>

                <Box>
                    <Text className="sub-text-right">
                        years of <br /> Experience
                    </Text>
                    <Text className="sub-title-right" mt={3}>
                        {"2"}
                    </Text>

                    <Box marginTop="50px">
                        <Text className="sub-text-right">{"Contact"}</Text>
                        <Text className="sub-title-right-normal" mt={4}>
                            {"Bayelsa State, Nigeria"}
                        </Text>
                    </Box>

                    <Box marginTop="50px">
                        <Text className="sub-text-right">{"projects done"}</Text>
                        <Text className="sub-title-right-normal" mt={4}>
                            {"Bayelsa State, Nigeria"}
                        </Text>
                    </Box>
                </Box>
            </Grid>
        </Box>
    );
};

export default About;
