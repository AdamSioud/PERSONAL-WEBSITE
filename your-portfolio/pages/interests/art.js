import {
    Box,
    Heading,
    SimpleGrid,
    ChakraProvider,
    Flex,
    Button,
} from "@chakra-ui/react";
import Link from "next/link";
import { extendTheme } from "@chakra-ui/react";
import ImageSlideshow from "../../components/ImageSlideshow";

const artTheme = extendTheme({
    colors: {
        transparent: "transparent",
        black: "#000",
        white: "#fff",
        gray: {
            50: "#717171",
            100: "#222222",
        },
    },
});

const Art = () => {
    const artImages = [
        "https://pbs.twimg.com/media/FdU9JhlXkAE_wfa?format=jpg&name=large",
        "https://pbs.twimg.com/media/FdU8pT8WIAAIJTa?format=jpg&name=large",
        "https://pbs.twimg.com/media/FdU8pT9X0AEtVtc?format=jpg&name=large",
    ];

    return (
        <ChakraProvider theme={artTheme}>
            <Flex
                direction="column"
                alignItems="center"
                justifyContent="center"
                height="100vh"
            >
                <Box maxW="1500px" p={["6"]} mx="auto" my="10" width="100%">
                    <Flex direction="column" alignItems="center" spacing={4}>
                        <Heading as="h2" fontSize="2xl">
                            Skulpturkunst
                        </Heading>
                        <SimpleGrid minChildWidth="300px" spacing="10" minH="full">
                            <ImageSlideshow images={artImages} />
                        </SimpleGrid>
                        <Link href="/" passHref>
                            <Button as="a" mt={4}>
                                Return to Index
                            </Button>
                        </Link>
                    </Flex>
                </Box>
            </Flex>
        </ChakraProvider>
    );
};

export default Art;
