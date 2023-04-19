// pages/art/index.js
import {
    Box,
    Heading,
    ChakraProvider,
    Flex,
    Link as ChakraLink,
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
                            Adams skulpturer
                        </Heading>
                        <ImageSlideshow images={artImages} />
                        <Link href="/" passHref>
                            <ChakraLink
                                as="button"
                                mt={4}
                                px={4}
                                py={2}

                                borderRadius="md"

                            >
                                Hjem
                            </ChakraLink>
                        </Link>
                    </Flex>
                </Box>
            </Flex>
        </ChakraProvider>
    );
};

export default Art;
