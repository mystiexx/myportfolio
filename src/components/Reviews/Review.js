import React, { useState } from "react";
import { Box, Text, IconButton, Center } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const people = [
    {
        id: 1,
        name: "Sapele Moses",
        title: "Software Engineer",
        text: "lovely work done",
    },
    {
        id: 2,
        name: "Richard Igbiriki",
        title: "Software Engineer",
        text: "it was fun working together",
    },
];

const Reviews = () => {
    const [index, setIndex] = useState(0);
    const { name, title, text } = people[index];

    const checkNumber = (number) => {
        if (number > people.length - 1) {
            return 0;
        }
        if (number < 0) {
            return people.length - 1;
        }
        return number;
    };

    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    };

    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    };
    return (
        <Box>
            <Text textAlign="center" className="title-text">
                / Reviews
            </Text>

            <Center>
                <Box marginTop="50px">
                    <Text className="info" textAlign="center">
                        {text}
                    </Text>
                    <Text className="author" textAlign="center" marginTop='20px'>
                        {name}
                    </Text>
                    <Text className="job" textAlign="center">
                        {title}
                    </Text>

                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        marginTop="40px"
                    >
                        <IconButton
                            aria-label="Search database"
                            icon={<FaChevronLeft size={25} />}
                            variant="ghost"
                            onClick={prevPerson}
                        />

                        <IconButton
                            aria-label="Search database"
                            icon={<FaChevronRight size={25} />}
                            variant="ghost"
                            onClick={nextPerson}
                        />
                    </Box>
                </Box>
            </Center>
        </Box>
    );
};

export default Reviews;
