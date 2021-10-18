import React from "react";
import { Container, Box, Text, IconButton } from "@chakra-ui/react";
import { AiOutlineTwitter, AiFillGithub, AiOutlineDribbble } from "react-icons/ai";
import ThemeSelector from "../ThemeSelector/ThemeSelector";

const Header = () => {
    return (
        <Box p={3}>
            <Container maxW="container.xl">
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Box display="flex">
                        <Text className='header-text'>Works</Text>
                        <Text className='header-text' ml={3}>Contact</Text>
                    </Box>

                    <Box><Text className='header-logo'>Alone</Text> </Box>

                    <Box>
                        <IconButton
                            aria-label="Search database"
                            icon={<AiOutlineTwitter size={25}/>}
                            variant="ghost"
                        />
                        <IconButton
                            aria-label="Search database"
                            icon={<AiFillGithub size={25}/>}
                            variant="ghost"
                        />
                        <IconButton
                            aria-label="Search database"
                            icon={<AiOutlineDribbble size={25}/>}
                            variant="ghost"
                        />
                        <ThemeSelector/>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Header;
