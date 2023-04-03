// Interests.js

import { Box, VStack, Heading, Text } from "@chakra-ui/react";

const Interests = () => {
    return (
        <Box>
            <Heading as="h2" fontSize="2xl" mb={4}>
                Intereesser
            </Heading>
            <VStack spacing={4} alignItems="flex-start">
                <Text>Interesse seksjonen må bygges på</Text>
                <Text>Finans har jeg lenge hatt et øye for</Text>
                <Text>Kunst, gå innom galleriene og museumene en by byr på</Text>
                <Text>Lage kunst selv, skulpturer ved hjelp av gips</Text>
            </VStack>
        </Box>
    );
};

export default Interests;
