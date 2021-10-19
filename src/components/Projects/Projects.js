import React from "react";
import { Box, Text, Image, Grid } from "@chakra-ui/react";
import fyeo from "../../assets/fyeo.jpg";
import sut from "../../assets/sut.jpg";
import farmly from "../../assets/farmly.jpg";
import { useMediaQuery } from "@chakra-ui/media-query";

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
                <a href="https://sutairu.netlify.app/">
                    <Box>
                        <Image src={sut} alt='sut' className='adv-image'/>
                        <Text marginTop="30px" className="sub-text">
                            {" "}
                            Website Development
                        </Text>
                        <Text marginTop="10px" className="p-text">
                            Sutairu Online Store
                        </Text>
                    </Box>
                </a>

                <a href="https://fyeo.netlify.app/">
                    <Box>
                        <Image src={fyeo} alt='fyeo' className='adv-image'/>
                        <Text marginTop="30px" className="sub-text">
                            {" "}
                            Website Development
                        </Text>
                        <Text marginTop="10px" className="p-text">
                            Fyeo Online Diary
                        </Text>
                    </Box>
                </a>

                <a href="https://farmily.netlify.app">
                    <Box>
                        <Image src={farmly} alt='farmly' className='adv-image' />
                        <Text marginTop="30px" className="sub-text">
                            {" "}
                            Website Development
                        </Text>
                        <Text marginTop="10px" className="p-text">
                            Farmly Online Agriculutural App
                        </Text>
                    </Box>
                </a>
            </Grid>
        </Box>
    );
};

export default Projects;
