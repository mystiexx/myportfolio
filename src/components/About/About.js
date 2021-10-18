import React from "react";
import { Box, Text, Grid } from "@chakra-ui/react";

const About = () => {
    return (
        <Box>
            <Grid templateColumns="repeat(3, 1fr)" gap={3}>
                <Box>
                    <Text className="sub-text">{"Biography"}</Text>
                    <Text className="sub-title" mt={3}>
                        Work for money and build for love! <br /> I'm Roland Enola, a freelance{" "}
                        <br /> web developer
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

                <Box></Box>
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
