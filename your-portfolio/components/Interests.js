// Interests.js

import { Box, VStack, Heading, Text } from "@chakra-ui/react";

const Interests = () => {
    return (
        <Box>
            <Heading as="h2" fontSize="2xl" mb={4}>
                Interests
            </Heading>
            <VStack spacing={4} alignItems="flex-start">
                <Text>Some of my interests include:</Text>
                <Text>- Reading books on various topics, such as science and history</Text>
                <Text>- Watching movies and TV shows</Text>
                <Text>- Traveling to new places and experiencing different cultures</Text>
                <Text>- Playing video games and board games with friends and family</Text>
            </VStack>
        </Box>
    );
};

export default Interests;
