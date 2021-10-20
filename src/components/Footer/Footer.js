import React from "react";
import { Box, Text, IconButton } from "@chakra-ui/react";
import { AiOutlineTwitter, AiFillGithub, AiOutlineDribbble } from "react-icons/ai";

const Footer = () => {
    return (
        <Box>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Text className='f-text'>2021 Alone All rights reserved</Text>

                <Box>
                    <IconButton
                        aria-label="Search database"
                        icon={<AiOutlineTwitter size={25} />}
                        variant="ghost"
                    />
                    <a href="https://github.com/mystiexx">
                        <IconButton
                            aria-label="Search database"
                            icon={<AiFillGithub size={25} />}
                            variant="ghost"
                        />
                    </a>
                    <a href="https://dribbble.com/alonexx">
                        <IconButton
                            aria-label="Search database"
                            icon={<AiOutlineDribbble size={25} />}
                            variant="ghost"
                        />
                    </a>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
