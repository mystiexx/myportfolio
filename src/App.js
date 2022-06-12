import React from "react";
import Header from "./components/Navigation/Header";
import { Container, Box } from "@chakra-ui/react";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import mv from "./assets/header_video.mp4";
import Skills from "./components/Skills/Skills";
import { useMediaQuery } from "@chakra-ui/media-query";

const App = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

  return (
    <div>
      <Header />
      <Box position="absolute" top="0" zIndex="-1" h="100vh" w="100%">
        <video
          loop
          autoPlay
          muted
          style={{
            opacity: "0.3",
            height: "100vh",
            objectFit: "fill",
            width: "100%",
          }}
        >
          <source src={mv} type="video/mp4" />
        </video>
      </Box>

      <Box mt={8} pb={8}>
        <Container maxW="container.lg">
          <Box mt={8}>
            <About />
          </Box>

          <Box marginTop="400px" h={isNotSmallerScreen ? "100vh" : "auto"} pb={isNotSmallerScreen ? "auto" : 8}>
            <Skills />
          </Box>
        </Container>
        <Box
          marginTop="auto"
          h="100vh"
          pt={3}
          pb={3}
          position="relative"
          display="flex"
          justifyContent="center"
          marginBottom="200px"
          alignContent="center"
          alignItems="center"
          bg="#0B0B0B"
        >
          <Container maxW="container.lg">
            <Projects />
          </Container>
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          w="100%"
          position="absolute"
          bottom="0"
          alignContent="center"
          alignItems="center"
          marginTop="200px"
          h="30vh"
          pt={3}
          pb={3}
        >
          <Container maxW="container.lg">
            <Footer />
          </Container>
        </Box>
      </Box>
    </div>
  );
};

export default App;
