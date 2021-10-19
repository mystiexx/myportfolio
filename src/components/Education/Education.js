import React from "react";
import { Box, Grid, Text } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";

const Education = () => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

    return (
        <Box h={isNotSmallerScreen ? "50vh" : "auto"}>
            <Text textAlign="center" className="title-text">
                {"Education & Experience"}
            </Text>

            <Grid gridTemplateColumns={isNotSmallerScreen ? "repeat(2, 1fr)" : "repeat(1, 1fr)" } gap={6}>
                <Box>
                    <Text className="sub-text" marginTop="30px" fontWeight="500">
                        {" "}
                        2016 - 2021{" "}
                    </Text>
                    <Text marginTop="50px" className="e-text">
                        {" "}
                        Bachelor's Degree, Computer Science and Informatics
                    </Text>
                    <Text className="e-text"> Federal University Otuoke</Text>
                </Box>

                <Box>
                    <Text className="sub-text" marginTop="30px" fontWeight="500">
                        {" "}
                        Mar 2021 - Sep 2021{" "}
                    </Text>
                    <Text marginTop="50px" className="e-text">
                        Frontend Developer
                    </Text>
                    <Text className="e-text"> Euidem Technologies</Text>

                    <Text className="sub-text" marginTop="50px" fontWeight="500">
                        {" "}
                        Jan 2019 - Jan 2020{" "}
                    </Text>
                    <Text marginTop="30px" className="e-text">
                        Intern
                    </Text>
                    <Text className="e-text"> Afridash</Text>
                </Box>
            </Grid>
        </Box>
    );
};

export default Education;
