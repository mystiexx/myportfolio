import React from "react";
import { useColorMode,  IconButton } from "@chakra-ui/react";
import { BsSun, BsMoon } from "react-icons/bs";

const ThemeSelector = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <IconButton
            aria-label="Search database"
            icon={colorMode === "light" ? <BsMoon size={25}/> : <BsSun size={25}/>}
            variant="ghost"
            onClick={toggleColorMode}
        />
    );
};

export default ThemeSelector;
