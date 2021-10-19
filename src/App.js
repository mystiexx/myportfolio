import React from "react";
import Header from "./components/Navigation/Header";
import { Text, Container, Box, Divider } from "@chakra-ui/react";
import About from "./components/About/About";
import Advantage from "./components/Advantages/Advantage";

const App = () => {
    return (
        <div>
            <Header />

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

                    {/* <Box  className='divider' marginTop='50px'/> */}

                    <Divider colorScheme="black" variant="solid" marginTop="50px" />

                    <Box marginTop='70px' pb={8}>
                        <Advantage />
                    </Box>
                    <Divider colorScheme="black" variant="solid" marginTop="50px" />
                </Container>
            </Box>
        </div>
    );
};

export default App;
