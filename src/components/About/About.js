import React from "react";
import { Box, Text, Grid, Image } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";
import logo from '../../assets/logo.png'

const About = () => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

    return (
        <Box>
            <Grid
                templateColumns={isNotSmallerScreen ? "repeat(3, 1fr)" : "repeat(1, 1fr)"}
                gap={6}
            >
                <Box>
                    <Text className="sub-text">{"Biography"}</Text>
                    <Text className="sub-title" mt={3}>
                        Building awesome web apps with love! I'm Roland Enola, a frontend <br /> web
                        developer
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

                <Box position="relative">
                    <div className="word">
                        <Image src={logo}/>
                        <span>A</span>
                        <span>L</span> 
                        <span>O</span>
                        <span>N</span> 
                        <span>E</span>
                    </div>
                </Box>

                <Box>
                    <Text className="sub-text-right">
                        years of <br /> Experience
                    </Text>
                    <Text className="sub-title-right" mt={3}>
                        {"2"}
                    </Text>

                    <Box marginTop="50px">
                        <Text className="sub-text-right">{"projects done"}</Text>
                        <Text className="sub-title-right" mt={4}>
                            {"6"}
                        </Text>
                    </Box>
                </Box>
            </Grid>
        </Box>
    );
};

export default About;
