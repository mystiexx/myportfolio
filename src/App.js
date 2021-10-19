import React from "react";
import Header from "./components/Navigation/Header";
import { Text, Container, Box, useColorModeValue } from "@chakra-ui/react";
import About from "./components/About/About";
import Advantage from "./components/Advantages/Advantage";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";

const App = () => {
    const border = useColorModeValue("2px solid #4D4D4D", "2px solid white");
    return (
        <div>
            <Header />

            <Box marginTop="10px" borderBottom={border} w="100%" />
            <Box mt={8} pb={8}>
                <Container maxW="container.xl">
                    <Text className="title-text" textAlign="center">
                        {"Roland Enola "}
                    </Text>
                    <Text className="title-text" textAlign="center">
                        {"FreeLance Web developer "}
                    </Text>

                    <Box mt={8}>
                        <About />
                    </Box>

                    <Box marginTop="80px" borderBottom={border} w="100%" />

                    <Box marginTop="70px" pb={8}>
                        <Advantage />
                    </Box>
                    <Box marginTop="80px" borderBottom={border} w="100%" />

                    <Box marginTop="70px">
                        <Education />
                    </Box>

                    <Box marginTop="80px" borderBottom={border} w="100%" />

                    <Box marginTop='70px'>
                        <Projects/>
                    </Box>

                    <Box marginTop="80px" borderBottom={border} w="100%" />
                </Container>
            </Box>
        </div>
    );
};

export default App;
